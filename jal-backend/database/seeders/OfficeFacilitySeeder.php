<?php

namespace Database\Seeders;

use App\Models\OfficeFacility;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OfficeFacilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $facilities = [
            [
                'facility_en' => "Information about visiting hours",
                'facility_mr' => "भेटण्याच्या वेळे संदर्भात माहिती",
                'time_en' => "During office hours",
                'time_mr' => "कार्यालयीन वेळेत",
                'process_en' => "By scheduling appointment/walk-in",
                'process_mr' => "आगाऊ भेटीची वेळ ठरवून/ आयत्या वेळी",
                'location_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'location_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'responsible_en' => "District Planning Officer/ Concerned person regarding subject",
                'responsible_mr' => "जिल्हा नियोजन आधिकारी/ विषया संदर्भातील संबंधित व्यक्ती",
                'grievance_en' => "District Planning Officer",
                'grievance_mr' => "जिल्हा नियोजन अधिकारी",
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'facility_en' => "Facilities available for record inspection",
                'facility_mr' => "अभिलेख तपासणीसाठी उपलब्ध सुविधांची माहिती",
                'time_en' => "Monday Time 3.00 PM to 5.00 PM",
                'time_mr' => "सोमवारी दु.3.00 ते सां.5.00 वाजेपर्यंत",
                'process_en' => "By submitting application",
                'process_mr' => "अर्ज सादर करून",
                'location_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'location_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'responsible_en' => "District Planning Officer",
                'responsible_mr' => "जिल्हा नियोजन अधिकारी",
                'grievance_en' => "District Planning Officer",
                'grievance_mr' => "जिल्हा नियोजन अधिकारी",
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'facility_en' => "Information about facilities available for work inspection",
                'facility_mr' => "कामाच्या तपासणीसाठी उपलब्ध सुविधांची माहिती",
                'time_en' => "During office hours",
                'time_mr' => "कार्यालयीन वेळेत",
                'process_en' => "By submitting application",
                'process_mr' => "अर्ज सादर करून",
                'location_en' => "District Planning Committee, District Collector Office, Jalgaon",
                'location_mr' => "जिल्हा नियोजन समिती, जिल्हाधिकारी कार्यालय, जळगांव",
                'responsible_en' => "District Planning Officer",
                'responsible_mr' => "जिल्हा नियोजन अधिकारी",
                'grievance_en' => "District Planning Officer",
                'grievance_mr' => "जिल्हा नियोजन अधिकारी",
                'sort_order' => 3,
                'is_active' => true,
            ],
        ];

        foreach ($facilities as $facility) {
            OfficeFacility::create($facility);
        }
    }
}