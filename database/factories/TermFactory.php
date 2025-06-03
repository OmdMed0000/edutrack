<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Term>
 */
class TermFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $schoolYear = \App\Models\SchoolYear::inRandomOrder()->first();
        $termType = \App\Models\TermType::inRandomOrder()->first();
    
        return [
            'school_year_id' => $schoolYear->id,
            'school_id' => $schoolYear->school_id,
            'term_type_id' => $termType->id,
            'term_name' => $termType->term_type . ' ' . $this->faker->numberBetween(1, 3),
            'start_date' => $this->faker->dateTimeBetween($schoolYear->start_date, $schoolYear->end_date),
            'end_date' => $this->faker->dateTimeBetween($schoolYear->start_date, $schoolYear->end_date),
        ];
    }
}
