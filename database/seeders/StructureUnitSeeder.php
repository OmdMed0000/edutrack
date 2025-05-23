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
        $units = ['Levels','Years','Fields','Options','Groups'];
        foreach($units as $unit){
           StructureUnit::create([
                  'unit_name'=>$unit
           ]);

        };
    }
}
