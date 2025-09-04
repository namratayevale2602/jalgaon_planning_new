<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DecisionProcessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $processes = [
            [
                'work_type' => json_encode([
                    'en' => "MLA Local Development Program",
                    'mr' => "आमदार स्थानिक विकास कार्यक्रम"
                ]),
                'timeline' => json_encode([
                    'en' => "45 days after receiving proposal",
                    'mr' => "प्रस्ताव प्राप्त झाल्यानंतर 45 दिवस"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer-4",
                    'mr' => "सहायक संशोधन अधिकारी-4"
                ]),
                'sort_order' => 1,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Member of Parliament Local Area Development Scheme",
                    'mr' => "खासदार स्थानिक क्षेत्र विकास कार्यक्रम"
                ]),
                'timeline' => json_encode([
                    'en' => "45 days after receiving proposal",
                    'mr' => "प्रस्ताव प्राप्त झाल्यानंतर 45 दिवस"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer-4",
                    'mr' => "सहायक संशोधन अधिकारी-4"
                ]),
                'sort_order' => 2,
            ],
            [
                'work_type' => json_encode([
                    'en' => "District Annual Plan Preparation",
                    'mr' => "जिल्हा वार्षिक योजना आराखडा तयार करणे"
                ]),
                'timeline' => json_encode([
                    'en' => "105 days",
                    'mr' => "105 दिवस"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer-4",
                    'mr' => "सहायक संशोधन अधिकारी-4"
                ]),
                'sort_order' => 3,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Regional Tourism Development Plan",
                    'mr' => "प्रादेशिक पर्यटन विकास कार्यक्रम"
                ]),
                'timeline' => json_encode([
                    'en' => "30 days",
                    'mr' => "30 दिवस"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer",
                    'mr' => "सहायक संशोधन अधिकारी"
                ]),
                'sort_order' => 4,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Providing information under RTI",
                    'mr' => "माहितीच्या अधिकारातील माहिती पुरविणे"
                ]),
                'timeline' => json_encode([
                    'en' => "30 days",
                    'mr' => "30 दिवस"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant District Planning Officer",
                    'mr' => "सहायक जिल्हा नियोजन अधिकारी"
                ]),
                'sort_order' => 5,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Sending meeting agenda to members",
                    'mr' => "सदस्यांना बैठकीचा अजेंडा पाठविणे"
                ]),
                'timeline' => json_encode([
                    'en' => "7 days before meeting",
                    'mr' => "बैठकीच्या 7 दिवस आधी"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer-4",
                    'mr' => "सहायक संशोधन अधिकारी-4"
                ]),
                'sort_order' => 6,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Sending meeting documents to members",
                    'mr' => "सदस्यांना बैठकीचा संच पाठविणे"
                ]),
                'timeline' => json_encode([
                    'en' => "7 days before meeting",
                    'mr' => "बैठकीच्या 7 दिवस आधी"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer-4",
                    'mr' => "सहायक संशोधन अधिकारी-4"
                ]),
                'sort_order' => 7,
            ],
            [
                'work_type' => json_encode([
                    'en' => "Sending monthly progress report to government",
                    'mr' => "मासिक प्रगती अहवाल शासनास पाठविणे"
                ]),
                'timeline' => json_encode([
                    'en' => "By 10th of each month",
                    'mr' => "महिन्याच्या 10 तारखेपर्यंत"
                ]),
                'responsible' => json_encode([
                    'en' => "Assistant Research Officer / Statistical Assistant",
                    'mr' => "सहायक संशोधन अधिकारी / सांख्यिकी सहायक"
                ]),
                'sort_order' => 8,
            ],
        ];

        foreach ($processes as $process) {
            DB::table('decision_processes')->insert(array_merge($process, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}