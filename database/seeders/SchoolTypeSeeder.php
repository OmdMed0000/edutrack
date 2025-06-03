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
    public function run()
{
    $types = [
        ['school_type' => 'Lycée Technique OFPPT'],
        ['school_type' => 'Centre de Formation OFPPT'],
        ['school_type' => 'Institut Spécialisé OFPPT'],
        ['school_type' => 'Ecole Supérieure de Technologie'],
    ];

    foreach ($types as $type) {
        \App\Models\SchoolType::create($type);
    }
}
}
