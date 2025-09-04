<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StaffMembersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $staffMembers = [
            [
                'name_en' => 'Shri.Vijay Shinde',
                'name_mr' => 'श्री. विजय शिंदे',
                'designation_en' => 'District Planning Officer',
                'designation_mr' => 'जिल्हा नियोजन अधिकारी',
                'phone' => '0257-2223135',
                'email' => 'dpojalgaon@gmail.com',
                'responsibilities_en' => json_encode([
                    "Carrying out responsibilities as an office head",
                    "Assisting the District Collector in planning matters",
                    "Preparing the District Annual Plan and submitting it to the Government",
                    "Organizing meetings of the District Planning Committee",
                    "Monitoring the progress of the District Plan and special programs",
                    "Submitting the MLA/MP Fund proposals for approval",
                    "Performing the responsibility as the First Appellate Officer",
                    "Inspecting 10% of the work of the District Annual Plan and all other plans/programs",
                ]),
                'responsibilities_mr' => json_encode([
                    "कार्यालय प्रमुख म्हणून जबाबदारी पार पाडणे",
                    "जिल्हाधिकारी यांना नियोजन विषयांत मदत करणे",
                    "जिल्हा वार्षिक योजना तयार करून शासनास सादर करणे",
                    "जिल्हा नियोजन समितीच्या बैठका आयोजित करणे",
                    "जिल्हा योजना व विशेष कार्यक्रमांची प्रगती मॉनिटर करणे",
                    "आमदार/खासदार निधीचे प्रस्ताव मंजुरीसाठी सादर करणे",
                    "प्रथम अपिलीय अधिकारी म्हणून जबाबदारी पार पाडणे",
                    "जिल्हा वार्षिक योजना व इतर सर्व योजना/कार्यक्रमांच्या 10% कामांची पाहणी करणे ",
                ]),
                'photo' => null,
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name_en' => 'Shri.Rahul Idhe',
                'name_mr' => 'श्री. राहुल इधे',
                'designation_en' => 'Assistant District Planning Officer',
                'designation_mr' => 'सहाय्यक जिल्हा नियोजन अधिकारी',
                'phone' => '0257-2223135',
                'email' => 'dpojalgaon@gmail.com',
                'responsibilities_en' => json_encode([
                    "Public Information Officer",
                    "Drawing and Disbursement Officer",
                    "Submitting proposals for approval under the District Annual Plan",
                    "Preparing District Plan Manual",
                    "Following up with the implementing agencies for receipt of funds",
                    "Maintaining computerized records of planning matters",
                ]),
                'responsibilities_mr' => json_encode([
                    "जनमाहिती अधिकारी",
                    "आहरण व संवितरण अधिकारी",
                    "जिल्हा वार्षिक योजनांतर्गत प्रस्ताव मंजुरीसाठी सादर करणे",
                    "जिल्हा योजना पुस्तिका तयार करणे",
                    "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
                    "नियोजन विषयांची संगणकीय नोंद ठेवणे",
                ]),
                'photo' => null,
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name_en' => 'Shri Bharat Salunke',
                'name_mr' => 'श्री. भरत साळुंके',
                'designation_en' => 'Assistant District Planning Officer',
                'designation_mr' => 'सहाय्यक जिल्हा नियोजन अधिकारी',
                'phone' => '0257-2223135',
                'email' => 'dpojalgaon@gmail.com',
                'responsibilities_en' => json_encode([
                    "Submitting proposals for approval under MLA/MP/Regional Tourism Development Program/Dongri Development Program/Minority Development Program",
                    "Following up with the implementing agencies for receipt of funds",
                    "Submitting reports of approved works under MLA/MP programs and performing other tasks assigned by the Planning Department",
                ]),
                'responsibilities_mr' => json_encode([
                    "आमदार/खासदार/प्रादेशिक पर्यटन विकास कार्यक्रम/डोंगरी विकास कार्यक्रम/ अल्पसंख्यांक विकास कार्यक्रम अंतर्गत प्रस्ताव मंजूरीसाठी सादर करणे",
                    "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
                    "आमदार/खासदार कार्यक्रमांतील मंजूर कामांचे अहवाल सादर करणेव नियोजन विभागाने सोपविलेली इतर कामे करणे",
                ]),
                'photo' => null,
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('staff_members')->insert($staffMembers);
    }
}