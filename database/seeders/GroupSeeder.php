<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Group;
use App\Models\School;
use App\Models\SchoolStructureInstance;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure at least one school exists
        $school = School::inRandomOrder()->first() ?? School::factory()->create();

        // Ensure at least one structure instance exists for the school
        $structureInstance = SchoolStructureInstance::where('school_id', $school->id)->inRandomOrder()->first();

        if (!$structureInstance) {
            $structureInstance = SchoolStructureInstance::factory()->create([
                'school_id' => $school->id,
            ]);
        }

        // Create 10 groups linked to the school and structure instance
        Group::factory()->count(10)->create([
            'school_id' => $school->id,
            'school_structure_instance_id' => $structureInstance->id,
        ]);

        $this->command->info('✅ Groups seeded successfully!');
    }
}
