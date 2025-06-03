<?php

namespace Database\Factories;

use App\Models\School;
use App\Models\SchoolStructureUnit;
use App\Models\SchoolStructureInstance;
use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolStructureInstanceFactory extends Factory
{
    protected $model = SchoolStructureInstance::class;

    public function definition(): array
    {
        $school = School::inRandomOrder()->first() ?? School::factory()->create();
        $structureUnit = SchoolStructureUnit::inRandomOrder()->first() ?? SchoolStructureUnit::factory()->create();

        // أسماء واقعية فـ OFPPT
        $ofpptNames = [
            '1ère année',
            '2ème année',
            'Développement Digital',
            'Réseau Informatique',
            'Gestion des Entreprises',
            'Administration',
            'Informatique',
            'Électronique',
            'Comptabilité',
            'Technique de Vente',
            'RH & Logistique',
            'Multimédia',
            'Maintenance Informatique',
        ];

        return [
            'school_id' => $school->id,
            'school_structure_unit_id' => $structureUnit->id,
            'parent_id' => SchoolStructureInstance::inRandomOrder()->first()?->id,
            // Removed unique() here to avoid uniqueness limit errors
            'name' => $this->faker->randomElement($ofpptNames),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (SchoolStructureInstance $instance) {
            // Optional logic here
        });
    }

    public function root()
    {
        return $this->state(function (array $attributes) {
            return ['parent_id' => null];
        });
    }

    public function child()
    {
        return $this->state(function (array $attributes) {
            return ['parent_id' => SchoolStructureInstance::inRandomOrder()->first()?->id];
        });
    }
}
