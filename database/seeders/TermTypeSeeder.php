<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
{
    $types = [
        ['term_type' => 'Trimestre'],
        ['term_type' => 'Semestre'],
        ['term_type' => 'Module'],
    ];

    foreach ($types as $type) {
        \App\Models\TermType::create($type);
    }
}
}
