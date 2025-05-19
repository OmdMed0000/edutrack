<?php

namespace Database\Seeders;

use App\Models\TeacherType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeacherTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['teacher_type'=>'Official'],
            ['teacher_type'=>'Part-Time'],
            ['teacher_type'=>'Contract-Based'],
         
        ];
        foreach($types as $type){
            TeacherType::create($type);
        };
    }
}
