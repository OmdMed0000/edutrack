<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolYear>
 */
class SchoolYearFactory extends Factory
{
    public function definition()
{
    $startYear = $this->faker->numberBetween(2020, 2023);
    
    return [
        'school_id' => \App\Models\School::inRandomOrder()->first()->id,
        'start_date' => Carbon::create($startYear, 9, 1),
        'end_date' => Carbon::create($startYear + 1, 7, 31),
        'is_active' => $this->faker->boolean(70),
    ];
}
}
