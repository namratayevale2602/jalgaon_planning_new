<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PoliticalRepresentativesSeeder::class,
            OrganizationalStructureSeeder::class,
            DecisionProcessSeeder::class,
            ResponsibilitySeeder::class,
            RoleDutiesSeeder::class,
            TimeBoundActivitiesSeeder::class,
            StaffMembersSeeder::class,
            SchemesSeeder::class,
            DownloadSeeder::class,
            BlogSeeder::class,
            TourismSpotSeeder::class,
            // Add other seeders here
        ]);
    }
}