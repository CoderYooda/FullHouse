<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement('ALTER TABLE "participants" ALTER COLUMN "serial_number" TYPE integer USING "serial_number"::integer');
        Schema::table('participants', function (Blueprint $table) {
            $table->integer('serial_number')->nullable()->default(null)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('participants', function (Blueprint $table) {
            $table->string('serial_number')->nullable()->default(null)->change();
        });
    }
};
