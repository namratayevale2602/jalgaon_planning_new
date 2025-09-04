<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TimeBoundActivitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $activities = [
            [
                'activity_en' => "MLA Local Area Development Program",
                'activity_mr' => "आमदार स्थानिक विकास कार्यक्रम",
                'timeframe_en' => "90 days from receipt of proposal",
                'timeframe_mr' => "प्रस्ताव प्राप्त झाल्यापासून 90 दिवस",
                'responsible_en' => "Research Assistant-2 & 4",
                'responsible_mr' => "सहायक संशोधन अधिकारी-2 व 4",
                'sort_order' => 1,
            ],
            [
                'activity_en' => "MP Local Area Development Program",
                'activity_mr' => "खासदार स्थानिक विकास कार्यक्रम",
                'timeframe_en' => "45 days from receipt of proposal",
                'timeframe_mr' => "प्रस्ताव प्राप्त झाल्यापासून 45 दिवस",
                'responsible_en' => "Research Assistant-3",
                'responsible_mr' => "सहायक संशोधन अधिकारी-3",
                'sort_order' => 2,
            ],
            [
                'activity_en' => "District Annual Plan preparation",
                'activity_mr' => "जिल्हा वार्षिक योजना आराखडा तयार करणे",
                'timeframe_en' => "105 days",
                'timeframe_mr' => "105 दिवस",
                'responsible_en' => "Research Assistant-1",
                'responsible_mr' => "सहायक संशोधन अधिकारी-1",
                'sort_order' => 3,
            ],
            [
                'activity_en' => "Tourism Development Program",
                'activity_mr' => "पर्यटन विकास कार्यक्रम",
                'timeframe_en' => "30 days",
                'timeframe_mr' => "30 दिवस",
                'responsible_en' => "Research Assistant",
                'responsible_mr' => "सहायक संशोधन अधिकारी",
                'sort_order' => 4,
            ],
            [
                'activity_en' => "Providing information under RTI",
                'activity_mr' => "माहितीच्या अधिकारातील माहिती पुरविणे",
                'timeframe_en' => "30 days",
                'timeframe_mr' => "30 दिवस",
                'responsible_en' => "Assistant District Planning Officer",
                'responsible_mr' => "सहायक जिल्हा नियोजन अधिकारी",
                'sort_order' => 5,
            ],
            [
                'activity_en' => "Sending meeting agenda to DPC members",
                'activity_mr' => "जिल्हा नियोजन समिती सदस्यांना बैठक अजेंडा पाठविणे",
                'timeframe_en' => "7 days before meeting",
                'timeframe_mr' => "बैठकीच्या 7 दिवस आधी",
                'responsible_en' => "Research Assistant-1",
                'responsible_mr' => "सहायक संशोधन अधिकारी-1",
                'sort_order' => 6,
            ],
            [
                'activity_en' => "Sending meeting documents to DPC members",
                'activity_mr' => "जिल्हा नियोजन समिती सदस्यांना बैठक संच पाठविणे",
                'timeframe_en' => "7 days before meeting",
                'timeframe_mr' => "बैठकीच्या 7 दिवस आधी",
                'responsible_en' => "Research Assistant-1",
                'responsible_mr' => "सहायक संशोधन अधिकारी-1",
                'sort_order' => 7,
            ],
            [
                'activity_en' => "Monthly progress report to government",
                'activity_mr' => "मासिक प्रगती अहवाल शासनास पाठविणे",
                'timeframe_en' => "By 10th of every month",
                'timeframe_mr' => "दरमहा 10 तारखेपर्यंत",
                'responsible_en' => "Research Assistant/Statistical Assistant",
                'responsible_mr' => "सहायक संशोधन अधिकारी/सांख्यिकी सहायक",
                'sort_order' => 8,
            ],
        ];

        foreach ($activities as $activity) {
            DB::table('time_bound_activities')->insert(array_merge($activity, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}