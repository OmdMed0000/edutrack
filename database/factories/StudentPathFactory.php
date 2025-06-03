<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\School;
use App\Models\Account;
use App\Models\Group;
use App\Models\SchoolYear;
use App\Models\PathStatusType;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudentPath>
 */
class StudentPathFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Get or create a school
        $school = School::inRandomOrder()->first() ?? School::factory()->create();
        
        // Get or create a student account
        $studentAccount = Account::whereHas('user', function($query) {
            $query->where('role_id', 4); // Student role ID is 4
        })->inRandomOrder()->first() ?? Account::factory()->create([
            'user_key' => User::factory()->create([
                'role_id' => 4 // Student role ID is 4
            ])->user_key
        ]);
        
        // Get or create a group for the school
        $group = Group::where('school_id', $school->id)->inRandomOrder()->first() 
            ?? Group::factory()->create(['school_id' => $school->id]);
        
        // Get or create a school year
        $schoolYear = SchoolYear::where('school_id', $school->id)->inRandomOrder()->first() 
            ?? SchoolYear::factory()->create(['school_id' => $school->id]);
        
        // Get or create a path status type
        $pathStatus = PathStatusType::inRandomOrder()->first() 
            ?? PathStatusType::factory()->create();

        return [
            'school_id' => $school->id,
            'student_account_id' => $studentAccount->id,
            'group_id' => $group->id,
            'school_year_id' => $schoolYear->id,
            'path_status_id' => $pathStatus->id,
            'is_active' => $this->faker->boolean(80), // 80% chance of being active
            'is_primary' => $this->faker->boolean(90), // 90% chance of being primary
        ];
    }
}
