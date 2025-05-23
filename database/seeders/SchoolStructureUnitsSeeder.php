<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolStructureUnitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('school_structure_units')->insert([
            [
               'school_id'=> 1,
               'unit_id'=> 1,
               'parent_id'=> null,
                'order'=> 1,
            ],
            [
                'school_id'=> 1,
                'unit_id'=> 3,
                'parent_id'=> 1,
                 'order'=> 2,
             ],
             [
                'school_id'=> 1,
                'unit_id'=> 2,
                'parent_id'=> 2,
                 'order'=> 4,
             ],
             [
                'school_id'=> 1,
                'unit_id'=> 4,
                'parent_id'=> 3,
                 'order'=> 4,
             ],
             [
                'school_id'=> 1,
                'unit_id'=> 5,
                'parent_id'=> 4,
                 'order'=> 5,
             ]


        ]);
    }
}
