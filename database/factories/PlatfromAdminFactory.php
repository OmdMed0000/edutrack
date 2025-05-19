<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlatfromAdmin>
 */
class PlatfromAdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => 'Ayoub Fikry',
            'email' => 'fikryayoub0@gmail.com',
            'phone_number'=>'0694219386',
            'birth_date'=>'2004-10-20',
            'password'=> Hash::make('password'),
            'original_password' => Hash::make('password'),
            'gender'=>'Male',
            'is_active' => false,
            'last_active_at' => null,
        ];
    }
}
