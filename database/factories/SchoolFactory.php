<?php

namespace Database\Factories;

use App\Models\PlatfromAdmin;
use App\Models\SchoolType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\School>
 */
class SchoolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'school_name'=>'ISTA DALKHLA',
            'school_key'=>'ISTA',
            'created_by'=>PlatfromAdmin::inRandomOrder()->first()->id,
            'school_type_id'=>4,
        ];
    }
}
