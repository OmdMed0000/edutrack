<?php

namespace Database\Seeders;

use App\Models\PlatformRole;
use Illuminate\Database\Seeder;

class PlatformRoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Admin',
                'description' => 'System Administrator'
            ],
            [
                'name' => 'Absence Manager',
                'description' => 'Manages student absences'
            ],
            [
                'name' => 'Teacher',
                'description' => 'School Teacher'
            ],
            [
                'name' => 'Student',
                'description' => 'School Student'
            ]
        ];

        foreach ($roles as $role) {
            PlatformRole::create($role);
        }
    }
} 