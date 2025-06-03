<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SchoolYearSeeder extends Seeder
{
    public function run()
    {
        $schools = \App\Models\School::all();
        $currentYear = now()->year;
    
        foreach ($schools as $school) {
            // Create current school year
            \App\Models\SchoolYear::create([
                'school_id' => $school->id,
                'start_date' => Carbon::create($currentYear - 1, 9, 1),
                'end_date' => Carbon::create($currentYear, 7, 31),
                'is_active' => true,
            ]);
    
            // Create previous school years
            for ($i = 2; $i <= 3; $i++) {
                \App\Models\SchoolYear::create([
                    'school_id' => $school->id,
                    'start_date' => Carbon::create($currentYear - $i, 9, 1),
                    'end_date' => Carbon::create($currentYear - $i + 1, 7, 31),
                    'is_active' => false,
                ]);
            }
        }
    }
}
