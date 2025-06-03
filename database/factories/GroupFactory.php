<?php

namespace Database\Factories;

use App\Models\Group;
use App\Models\School;
use App\Models\SchoolStructureInstance;
use Illuminate\Database\Eloquent\Factories\Factory;

class GroupFactory extends Factory
{
    protected $model = Group::class;

    public function definition(): array
    {
        // Get existing or create a new school
        $school = School::inRandomOrder()->first() ?? School::factory()->create();

        // Get a structure instance for the selected school
        $structureInstance = SchoolStructureInstance::where('school_id', $school->id)->inRandomOrder()->first();

        // If no structure instance exists, create one
        if (!$structureInstance) {
            $structureInstance = SchoolStructureInstance::factory()->create([
                'school_id' => $school->id,
            ]);
        }

        return [
            'school_id' => $school->id,
            'school_structure_instance_id' => $structureInstance->id,
'type' => $this->faker->randomElement(['Regular', 'Optional']),
        ];
    }
}
