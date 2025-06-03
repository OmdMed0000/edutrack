<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    $schoolYears = \App\Models\SchoolYear::all();
    $termTypes = \App\Models\TermType::all();

    foreach ($schoolYears as $schoolYear) {
        foreach ($termTypes as $type) {
            $termCount = $type->term_type === 'Trimestre' ? 3 : ($type->term_type === 'Semestre' ? 2 : 4);
            
            for ($i = 1; $i <= $termCount; $i++) {
                $startDate = Carbon::parse($schoolYear->start_date);
                $endDate = Carbon::parse($schoolYear->end_date);
                
                // Calculate term dates based on type
                if ($type->term_type === 'Trimestre') {
                    $termLength = $startDate->diffInDays($endDate) / 3;
                    $termStart = $startDate->copy()->addDays(($i - 1) * $termLength);
                    $termEnd = $termStart->copy()->addDays($termLength);
                } elseif ($type->term_type === 'Semestre') {
                    $termLength = $startDate->diffInDays($endDate) / 2;
                    $termStart = $startDate->copy()->addDays(($i - 1) * $termLength);
                    $termEnd = $termStart->copy()->addDays($termLength);
                } else { // Module
                    $termLength = $startDate->diffInDays($endDate) / 4;
                    $termStart = $startDate->copy()->addDays(($i - 1) * $termLength);
                    $termEnd = $termStart->copy()->addDays($termLength);
                }

                \App\Models\Term::create([
                    'school_year_id' => $schoolYear->id,
                    'school_id' => $schoolYear->school_id,
                    'term_type_id' => $type->id,
                    'term_name' => $type->term_type . ' ' . $i,
                    'start_date' => $termStart,
                    'end_date' => $termEnd,
                ]);
            }
        }
    }
}
}
