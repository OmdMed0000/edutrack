<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolType>
 */
class SchoolTypeFactory extends Factory
{
    public function definition()
    {
        $types = [
            'Lycée Technique OFPPT',
            'Centre de Formation OFPPT',
            'Institut Spécialisé OFPPT',
            'Ecole Supérieure de Technologie'
        ];
    
        return [
            'school_type' => $this->faker->randomElement($types),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
