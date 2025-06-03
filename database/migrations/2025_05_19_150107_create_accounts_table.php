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
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('school_key');
            $table->string('user_key')->unique();
            $table->foreignId('teacher_type_id')->nullable()->constrained('teacher_types','id')->onDelete('cascade');
            $table->string('password');
            $table->string('original_password');
            $table->boolean('is_active')->default(false);
            $table->timestamp('last_reset_password_at')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->foreign('school_key')->references('school_key')->on('schools');
            $table->foreign('user_key')->references('user_key')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
