<?php

namespace Database\Seeders;

use App\Models\PlatfromAdmin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlatfromAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PlatfromAdmin::factory()->create();
    }
}
