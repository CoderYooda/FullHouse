<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('seasons', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->default(1);
        });
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->default(1);
        });
        Schema::table('tournaments', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->default(1);
        });
        Schema::table('tournament_type', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->default(1);
        });
        Schema::table('feedback', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
