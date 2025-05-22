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
        Schema::create('schedule_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('term_id')->constrained('terms');
            $table->foreignId('school_id')->constrained('schools');
            $table->string('name');
            $table->date('start_date');
            $table->time('end_time')->nullable();
            $table->boolean('is_current')->default(false);
            $table->unique(['term_id', 'school_id', 'is_current'], 'unique_current_version');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedule_versions');
    }
};
