<?php

namespace Database\Factories;

use App\Models\PlatfromRole;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    

    {
        return [
            'full_name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'birth_date' => fake()->date(),
            'gender' => fake()->randomElement(['Male','Female']),
            'user_key' => Str::random(5),
            'phone_number'=>fake()->phoneNumber(),
            'role_id'=>PlatfromRole::inRandomOrder()->first()->id,
           
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
   
}
