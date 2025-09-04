<?php

namespace Database\Seeders;

use App\Models\RtiOfficer;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RtiOfficerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $officers = [
            // Public Information Officers
            [
                'name_en' => "Shri R.A. Ide",
                'name_mr' => "श्री. रा.आ.इधे",
                'designation_en' => "Assistant District Planning Officer",
                'designation_mr' => "सहायक जिल्हा नियोजन अधिकारी",
                'jurisdiction_en' => "All matters related to Planning Branch",
                'jurisdiction_mr' => "नियोजन शाखेतील सर्व कामा संबंधित",
                'address_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'address_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'phone' => "0257-2223135",
                'email' => "dpojalgaon@gmail.com",
                'officer_type' => 'public_information',
                'sort_order' => 1,
                'is_active' => true,
            ],

            // Assistant Public Information Officers
            [
                'name_en' => "Shri B.B. Patil",
                'name_mr' => "श्री. बी.बी.पाटील",
                'designation_en' => "Assistant Research Officer",
                'designation_mr' => "सहायक संशोधन अधिकारी",
                'jurisdiction_en' => "All works of Planning Branch",
                'jurisdiction_mr' => "नियोजन शाखेतील सर्व कामा करिता",
                'address_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'address_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'phone' => "0257-2223135",
                'email' => "dpojalgaon@gmail.com",
                'officer_type' => 'assistant_public_information',
                'sort_order' => 1,
                'is_active' => true,
            ],

            // Appellate Authorities
            [
                'name_en' => "Shri Vijay Shinde",
                'name_mr' => "श्री. विजय शिंदे",
                'designation_en' => "District Planning Officer, Jalgaon",
                'designation_mr' => "जिल्हा नियोजन अधिकारी जळगांव",
                'jurisdiction_en' => "Jalgaon District",
                'jurisdiction_mr' => "जळगाव जिल्हा",
                'address_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'address_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'phone' => "0257-2223135",
                'email' => "dpojalgaon@gmail.com",
                'officer_type' => 'appellate_authority',
                'sort_order' => 1,
                'is_active' => true,
            ],
        ];

        foreach ($officers as $officer) {
            RtiOfficer::create($officer);
        }
    }
}