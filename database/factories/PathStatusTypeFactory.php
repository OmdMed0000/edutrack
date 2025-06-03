<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PathStatusType>
 */
class PathStatusTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statuses = ['Active', 'Inactive', 'Suspended', 'Completed', 'Transferred'];
        return [
            'status_type' => $this->faker->unique()->randomElement($statuses),
        ];
    }
}
