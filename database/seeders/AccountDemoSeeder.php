<?php

namespace Database\Seeders;

use App\Models\Account;
use Illuminate\Database\Seeder;

class AccountDemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crée 5 comptes enseignants actifs
        Account::factory()
            ->count(5)
            ->active()
            ->teacher()
            ->create();

        // Crée 3 comptes enseignants inactifs
        Account::factory()
            ->count(3)
            ->inactive()
            ->teacher()
            ->create();

        // Crée 10 comptes étudiants actifs
        Account::factory()
            ->count(10)
            ->active()
            ->student()
            ->create();

        // Crée 5 comptes étudiants inactifs
        Account::factory()
            ->count(5)
            ->inactive()
            ->student()
            ->create();

        // Crée 5 comptes mixtes aléatoires
        Account::factory()
            ->count(5)
            ->create();
    }
}
