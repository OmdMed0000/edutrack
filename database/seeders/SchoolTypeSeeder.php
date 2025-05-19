<?php

namespace Database\Seeders;

use App\Models\SchoolType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SchoolTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['school_type'=>'Primary School'],
            ['school_type'=>'Middle School'],
            ['school_type'=>'High School'],
            ['school_type'=>'University'],
        ];
        foreach($types as $type){
            SchoolType::create($type);
        };
    }
}
