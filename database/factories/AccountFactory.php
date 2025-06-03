<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\School;
use App\Models\TeacherType;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    public function definition(): array
    {
        $school = School::inRandomOrder()->first() ?? School::factory()->create();
        $user = User::factory()->create(); // ✅ Crée un nouvel utilisateur unique
        $teacherType = TeacherType::inRandomOrder()->first();

        return [
            'school_key' => $school->school_key,
            'user_key' => $user->user_key,
            'teacher_type_id' => $teacherType?->id,
            'password' => Hash::make('password'),
            'original_password' => 'password',
            'is_active' => $this->faker->boolean(80),
            'last_reset_password_at' => $this->faker->optional(0.3)->dateTimeBetween('-1 year', 'now'),
            'last_login_at' => $this->faker->optional(0.7)->dateTimeBetween('-1 month', 'now'),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function ($account) {
            // Optionnel : actions supplémentaires après création
        });
    }

    public function active()
    {
        return $this->state(fn (array $attributes) => ['is_active' => true]);
    }

    public function inactive()
    {
        return $this->state(fn (array $attributes) => ['is_active' => false]);
    }

    public function teacher()
    {
        return $this->state(fn (array $attributes) => [
            'teacher_type_id' => TeacherType::inRandomOrder()->first()?->id,
        ]);
    }

    public function student()
    {
        return $this->state(fn (array $attributes) => [
            'teacher_type_id' => null,
        ]);
    }
}
