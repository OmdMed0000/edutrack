<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolStructureInstanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('school_structure_instances')->insert([
            [
                 'school_id'=>1,
                 'parent_id'=>null,
                 'school_structure_unit_id'=>1,
                 'name'=>'TS'
            ],
            [
                'school_id'=>1,
                'parent_id'=>null,
                'school_structure_unit_id'=>1,
                'name'=>'T'
           ],
            [
                        'school_id'=>1,
                        'parent_id'=>null,
                        'school_structure_unit_id'=>1,
                        'name'=>'S'
            ],
            [
                    'school_id'=>1,
                    'parent_id'=>null,
                    'school_structure_unit_id'=>1,
                    'name'=>'Q'
            ],
            [
                'school_id'=>1,
                'parent_id'=>1,
                'school_structure_unit_id'=>2,
                'name'=>'DD'
        ],
        [
            'school_id'=>1,
            'parent_id'=>1,
            'school_structure_unit_id'=>2,
            'name'=>'ID'
    ],


        ]);
    }
}
