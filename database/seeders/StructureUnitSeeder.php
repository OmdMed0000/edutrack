<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\StructureUnit;

class StructureUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $units = [
            'Level' => 'School levels (Elementary, Middle, High)',
            'Class' => 'Academic classes',
            'Section' => 'Class sections',
            'Year' => 'Academic years',
            'Field' => 'Study fields',
            'Option' => 'Study options',
            'Group' => 'Student groups'
        ];

        foreach ($units as $name => $description) {
            StructureUnit::create([
                'unit_name' => $name
            ]);
        }
    }
}
