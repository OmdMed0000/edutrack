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
        Schema::create('school_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained('schools','id')->onDelete('cascade');
            $table->foreignId('role_id')->constrained('platfrom_roles','id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_roles');
    }
};
