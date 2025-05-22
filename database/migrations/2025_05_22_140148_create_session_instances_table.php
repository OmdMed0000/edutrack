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
        Schema::create('session_instances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('term_id')->constrained('terms')->onDelete('cascade');
            $table->foreignId('version_id')->constrained('schedule_versions')->onDelete('cascade');
            $table->foreignId('replaced_session_id')->nullable()->constrained('session_instances')->onDelete('set null');
            $table->foreignId('school_id')->constrained('schools')->onDelete('cascade');
            $table->foreignId('session_template_id')->constrained('session_templates')->onDelete('cascade');
            $table->date('start_date');
            $table->time('end_time');
            $table->foreignId('day_id')->constrained('week_days')->onDelete('cascade');
            $table->enum('status',['Active','Temporaire','Overrided','Canceled']);
            $table->boolean('is_temporary')->default(false);
            $table->foreignId('time_slot_id')->constrained('time_slots')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('session_instances');
    }
};
