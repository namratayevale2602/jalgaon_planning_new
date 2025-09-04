<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResponsibilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Composition (Key Responsibilities)
        DB::table('responsibilities')->insert([
            'items' => json_encode([
                'en' => [
                    "Annual district planning and committee coordination",
                    "MLA/MP fund management and project monitoring",
                    "Tourism development program implementation",
                    "Budget preparation and financial monitoring",
                ],
                'mr' => [
                    "जिल्हा वार्षिक योजना आखणी आणि समिती समन्वय",
                    "आमदार/खासदार निधी व्यवस्थापन आणि प्रकल्प देखरेख",
                    "पर्यटन विकास कार्यक्रम अंमलबजावणी",
                    "अर्थसंकल्पीय अंदाज तयारी आणि आर्थिक देखरेख",
                ]
            ]),
            'type' => 'composition',
            'sort_order' => 1,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Committees (Governing References)
        DB::table('responsibilities')->insert([
            'items' => json_encode([
                'en' => [
                    "Govt. Circular No. JINIS-1002/Pr.Kra.6/Ka-1444, dt. 24 April 2002",
                    "Govt. Decision No. JIVAYO-1007/Pr.Kra.39/Ka-1444, dt. 16 Feb 2008",
                    "Planning Department Government Decision No. Sthavika-0616/Pr.No.96/Ka-1482, dt. 12/07/2016",
                    "Planning Dept. Circular No. JINIS-1002/Pr.Kra.6/Ka-1444, dt. 24/04/2002",
                    "Finance Dept. Order No. Viniyam/Pr.Kra.46/2001, dt. 11 July 2001",
                ],
                'mr' => [
                    "म.शा. परिपत्रक क्र. जिनिस-1002/प्र.क्र.6/का-1444, दि. 24 एप्रिल 2002",
                    "शासन निर्णय क्र. जिवायो-1007/प्र.क्र.39/का-1444, दि. 16 फेब्रुवारी 2008",
                    "नियोजन विभाग शासन निर्णय क्र. स्थाविका-0616/प्र.क्र.96/का-1482, दि. 12/07/2016",
                    "नियोजन विभाग परिपत्रक क्र. जिनिस-1002/प्र.क्र.6/का-1444, दि. 24/04/2002",
                    "वित्त विभाग शासन निर्णय क्र. विनियम/प्र.क्र.46/2001, दि. 11 जुलै 2001",
                ]
            ]),
            'type' => 'committees',
            'sort_order' => 2,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}