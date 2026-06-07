<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('city_id')->nullable()->constrained('cities');
            $table->unsignedBigInteger('merged_into_user_id')->nullable();
            $table->foreign('merged_into_user_id')->references('id')->on('users');
            $table->boolean('is_active')->default(true);
            $table->timestamp('email_verified_at')->nullable()->after('email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['city_id']);
            $table->dropForeign(['merged_into_user_id']);
            $table->dropColumn(['city_id', 'merged_into_user_id', 'is_active', 'email_verified_at']);
        });
    }
};
