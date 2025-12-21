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
        Schema::table('tournaments', function (Blueprint $table) {
            $table->string('type')->default('classic');
            $table->integer('stack')->default(50000);
            $table->integer('small_blind')->default(100);
            $table->integer('big_blind')->default(100);
            $table->integer('ante')->default(100);
            $table->integer('buy_in')->default(650);
            $table->integer('re_entry')->default(650);
            $table->integer('add_on')->default(650);
            $table->integer('levels_start')->default(10);
            $table->integer('levels_end')->default(20);
            $table->time('late_registration')->default('21:00');
            $table->boolean('is_private')->default(false);
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
