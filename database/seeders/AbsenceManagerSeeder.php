<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Account;
use App\Models\School;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AbsenceManagerSeeder extends Seeder
{
    public function run(): void
    {
        $school = School::first();
        
        if (!$school) {
            $school = School::factory()->create();
        }

        // Create 3 absence managers
        for ($i = 0; $i < 3; $i++) {
            $user = User::create([
                'full_name' => fake()->name(),
                'email' => fake()->unique()->safeEmail(),
                'birth_date' => fake()->date(),
                'gender' => fake()->randomElement(['Male', 'Female']),
                'user_key' => 'AM' . str_pad($i + 1, 3, '0', STR_PAD_LEFT),
                'phone_number' => fake()->phoneNumber(),
                'role_id' => 2, // Absence Manager role
            ]);

            Account::create([
                'school_key' => $school->school_key,
                'user_key' => $user->user_key,
                'password' => Hash::make('password'),
                'original_password' => 'password',
                'is_active' => true,
            ]);
        }
    }
} 