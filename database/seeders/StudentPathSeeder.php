<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\School;
use App\Models\Account;
use App\Models\Group;
use App\Models\SchoolYear;
use App\Models\PathStatusType;
use App\Models\StudentPath;
use Illuminate\Support\Facades\Log;

class StudentPathSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        try {
            // Check if we have any schools
            if (School::count() === 0) {
                $this->command->error('No schools found. Please run SchoolSeeder first.');
                return;
            }

            // Check if we have any path status types
            if (PathStatusType::count() === 0) {
                $this->command->info('No path status types found. Creating default statuses...');
                $this->call(PathStatusTypeSeeder::class);
            }

            // Get all schools
            $schools = School::all();
            $totalPathsCreated = 0;

            foreach ($schools as $school) {
                $this->command->info("Processing school: {$school->name}");

                // Get student accounts for this school
                $studentAccounts = Account::where('school_key', $school->school_key)
                    ->whereHas('user', function($query) {
                        $query->whereHas('roles', function($q) {
                            $q->where('role_name', 'student');
                        });
                    })
                    ->get();

                if ($studentAccounts->isEmpty()) {
                    $this->command->warn("No student accounts found for school: {$school->name}");
                    continue;
                }

                // Get groups for this school
                $groups = Group::where('school_id', $school->id)->get();
                if ($groups->isEmpty()) {
                    $this->command->warn("No groups found for school: {$school->name}");
                    continue;
                }
                
                // Get school years for this school
                $schoolYears = SchoolYear::where('school_id', $school->id)->get();
                if ($schoolYears->isEmpty()) {
                    $this->command->warn("No school years found for school: {$school->name}");
                    continue;
                }
                
                // Get path status types
                $pathStatuses = PathStatusType::all();
                if ($pathStatuses->isEmpty()) {
                    $this->command->error("No path status types found. Please run PathStatusTypeSeeder first.");
                    return;
                }

                // Create student paths for each student
                foreach ($studentAccounts as $studentAccount) {
                    try {
                        // Create 1-3 paths per student (some students might have multiple paths)
                        $numPaths = rand(1, 3);
                        
                        for ($i = 0; $i < $numPaths; $i++) {
                            StudentPath::create([
                                'school_id' => $school->id,
                                'student_account_id' => $studentAccount->id,
                                'group_id' => $groups->random()->id,
                                'school_year_id' => $schoolYears->random()->id,
                                'path_status_id' => $pathStatuses->random()->id,
                                'is_active' => $i === 0, // Only the first path is active
                                'is_primary' => $i === 0, // Only the first path is primary
                            ]);
                            $totalPathsCreated++;
                        }
                    } catch (\Exception $e) {
                        Log::error("Error creating path for student {$studentAccount->id}: " . $e->getMessage());
                        $this->command->error("Error creating path for student {$studentAccount->id}: " . $e->getMessage());
                    }
                }
            }

            $this->command->info("✅ Successfully created {$totalPathsCreated} student paths!");
        } catch (\Exception $e) {
            Log::error("Error in StudentPathSeeder: " . $e->getMessage());
            $this->command->error("Error in StudentPathSeeder: " . $e->getMessage());
        }
    }
}
