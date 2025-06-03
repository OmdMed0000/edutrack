<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SchoolStructureInstance;

class SchoolStructureInstanceSeeder extends Seeder
{
    public function run()
    {
        // Create 5 root instances (no parent)
        $roots = SchoolStructureInstance::factory()
            ->count(5)
            ->root()
            ->create();

        // Create 15 child instances linked randomly to existing instances
        SchoolStructureInstance::factory()
            ->count(15)
            ->child()
            ->create();
    }
}
