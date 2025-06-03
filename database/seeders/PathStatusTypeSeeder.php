<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PathStatusType;

class PathStatusTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            'Active',
            'Inactive',
            'Suspended',
            'Completed',
            'Transferred',
        ];

        foreach ($statuses as $status) {
            PathStatusType::firstOrCreate(['status_type' => $status]);
        }
    }
}
