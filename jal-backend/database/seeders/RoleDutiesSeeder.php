<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleDutiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'position_en' => "District Collector",
                'position_mr' => "जिल्हाधिकारी",
                'duties_en' => json_encode([
                    "Approval of MLA Local Area Development works",
                    "Approval of MP Local Area Development works",
                    "Approval of District Annual Plan",
                    "Chairperson of District Planning Committee meetings",
                ]),
                'duties_mr' => json_encode([
                    "आमदार स्थानिक विकास कार्यक्रम मंजुरी",
                    "खासदार स्थानिक विकास कार्यक्रम मंजुरी",
                    "जिल्हा वार्षिक योजना मंजुरी",
                    "जिल्हा नियोजन समिती बैठकींचे अध्यक्षत्व",
                ]),
                'authority_en' => json_encode([
                    "As per Finance Department GR No. Viniyam/Pro.Kr.46/2001 dated 11/07/2001",
                    "As per Finance Department GR No. Sthavika-0616/Pro.Kr.96/Ka-1482 dated 12/07/2016",
                    "Central Government's April - 2023 Guidebook",
                    "As per Planning Department GR No. Jivayo-1007/Pro.Kr.39/Ka-1444 dated 16/02/2008",
                ]),
                'authority_mr' => json_encode([
                    "म.शा. वित्त विभागाचे शा. नि. क्र. वि. अ. प्र.-1000/प्र.क्र.46/2001, विनियम, दि.11जुलै 2001",
                    "म.शा. वित्त विभागाचे शा. नि. क्र. स्थाविका-0616/प्र.क्र.96/का-1482 दि.12/07/2016",
                    "केंद्र शासनाची एप्रिल - 2023 ची मार्गदर्शक पुस्तिका",
                    "म.शा. नियोजन विभाग, शा. नि. क्र. जिवायो-1007/प्र.क्र.39/का-1444, दि.16.02.2008",
                ]),
                'icon' => 'FaUserTie',
                'sort_order' => 1,
            ],
            [
                'position_en' => "District Planning Officer",
                'position_mr' => "जिल्हा नियोजन अधिकारी",
                'duties_en' => json_encode([
                    "Office In-charge responsibilities",
                    "Assist District Collector in planning matters",
                    "Prepare District Annual Plan and submit to government",
                    "Organize District Planning Committee meetings",
                    "Monitor progress of district plans and special programs",
                    "Process MLA/MPLAD proposals for approval",
                    "Maintain computerized records of planning matters",
                    "Maintain accounts of MLA/MPLAD/Tourism programs",
                    "Prepare budget estimates for planning cell",
                    "Inspect 10% of works under district annual plan",
                    "Follow up on fund disbursement to implementing agencies",
                    "Prepare district plan booklet and progress reports",
                    "Submit reports on approved MLA/MPLAD works",
                    "Perform other duties assigned by Planning Department",
                ]),
                'duties_mr' => json_encode([
                    "कार्यालय प्रमुख जबाबदाऱ्या",
                    "जिल्हाधिकारी यांना नियोजन विषयांत मदत करणे",
                    "जिल्हा वार्षिक योजना तयार करून शासनास सादर करणे",
                    "जिल्हा नियोजन समितीच्या बैठका आयोजित करणे",
                    "जिल्हा योजना व विशेष कार्यक्रमांची प्रगती मॉनिटर करणे",
                    "आमदार/खासदार निधीचे प्रस्ताव मंजुरीसाठी सादर करणे",
                    "नियोजन विषयांची संगणकीय नोंद ठेवणे",
                    "आमदार/खासदार/पर्यटन कार्यक्रमांचे लेखा ठेवणे",
                    "नियोजन कक्षासाठी अर्थसंकल्पीय अंदाज तयार करणे",
                    "जिल्हा वार्षिक योजनेतील 10% कामांची पाहणी करणे",
                    "अंमलबजावणी यंत्रणांना निधी प्राप्तीसाठी पाठपुरावा करणे",
                    "जिल्हा योजना पुस्तिका तयार करणे",
                    "आमदार/खासदार कार्यक्रमांतील मंजूर कामांचे अहवाल सादर करणे",
                    "नियोजन विभागाने सोपविलेली इतर कामे करणे",
                ]),
                'authority_en' => json_encode([
                    "As per Planning Department Circular No. Jinis-1002/Pro.Kr.6/Ka-1444 dated 24/04/2002",
                    "As per Government Resolutions mentioned for each duty",
                ]),
                'authority_mr' => json_encode([
                    "म.शा. नियोजन विभाग यांचे परिपत्रक क्र.जिनिस-1002/प्र.क्र.6/का-1444, दि. 24 एप्रिल 2002",
                    "प्रत्येक कर्तव्यासाठी नमूद केलेल्या शासन निर्णयांनुसार",
                ]),
                'icon' => 'FaUserTie',
                'sort_order' => 2,
            ],
            [
                'position_en' => "Assistant District Planning Officer",
                'position_mr' => "सहायक जिल्हा नियोजन अधिकारी",
                'duties_en' => json_encode([
                    "Handle all matters related to District Annual Plan",
                    "Perform duties assigned by District Collector/Planning Officer",
                    "Act as Drawing and Disbursing Officer",
                    "Serve as Public Information Officer",
                    "Handle matters related to MLA/MPLAD funds, Tourism, Hill Area Development",
                ]),
                'duties_mr' => json_encode([
                    "जिल्हा वार्षिक योजना संबंधी सर्व कामकाज पाहणे",
                    "जिल्हाधिकारी/नियोजन अधिकारी यांनी सोपविलेली कामे करणे",
                    "आहरण व संवितरण अधिकारी म्हणून काम पाहणे",
                    "जन माहिती अधिकारी म्हणून कामकाज पाहणे",
                    "आस्थाविका, खास्थाविका, पर्यटन, डोंगरी विकास कार्यक्रम संबंधी कामे",
                ]),
                'authority_en' => json_encode([
                    "As per Planning Department GR No. CAU-1401/Pro.Kr.348/Ka-1426 dated 24/01/2006",
                    "As per GR No. Sankirna-5710/Pro.Kr.30/Ka-1426 dated 29/02/2012",
                ]),
                'authority_mr' => json_encode([
                    "म.शा. नियोजन विभाग शासन निर्णय क्र.सीएयु-1401/प्र.क्र.348/का-1426 दि.24/01/2006",
                    "शासन निर्णय क्र.संकीर्ण-5710/प्र.क्र.30/का-1426 दि.29/02/2012",
                ]),
                'icon' => 'FaUserTie',
                'sort_order' => 3,
            ],
            [
                'position_en' => "Assistant Research Officer (Various Positions)",
                'position_mr' => "सहायक संशोधन अधिकारी (विविध पदे)",
                'duties_en' => json_encode([
                    "Assistant Research Officer-1: Handle matters related to Zilla Parishad under District Annual Plan",
                    "Assistant Research Officer-2: Hilly Division Development Program, Assistant Public Information Officer Works and Minority Development Program",
                    "Assistant Research Officer-3: Handle MPLAD Program",
                    "Assistant Research Officer-4: Handle MLA Local Area Development Program",
                    "Assistant Research Officer-5: State Schemes Work Under District Annual Plan",
                ]),
                'duties_mr' => json_encode([
                    "सहायक संशोधन अधिकारी-1: जिल्हा वार्षिक योजना अंतर्गत जिल्हा परिषद विषयक कामे",
                    "सहायक संशोधन अधिकारी-2: डोंगरी विभाग विकास कार्यक्रम, सहायक जन माहिती अधिकारी कामे व अल्पसंख्यांक विकास कार्यक्रम",
                    "सहायक संशोधन अधिकारी-3: खासदार स्थानिक विकास कार्यक्रम",
                    "सहायक संशोधन अधिकारी-4: आमदार स्थानिक विकास कार्यक्रम",
                    "सहायक संशोधन अधिकारी-5: जिल्हा वार्षिक योजना अंतर्गत राज्य योजनांविषयक कामे",
                ]),
                'authority_en' => json_encode([
                    "As per various Government Resolutions and circulars",
                    "Central Government's April - 2023 Guidebook",
                ]),
                'authority_mr' => json_encode([
                    "विविध शासन निर्णय व परिपत्रकांनुसार",
                    "केंद्र शासनाची एप्रिल - 2023 ची मार्गदर्शक पुस्तिका (खासदार निधीसाठी)",
                ]),
                'icon' => 'FaUserTie',
                'sort_order' => 4,
            ],
            [
                'position_en' => "Statistical Assistant",
                'position_mr' => "सांख्यिकी सहायक",
                'duties_en' => json_encode([
                    "SA-1: Scrutinize proposals received under statutory development schemes",
                    "SA-2: Prepare minutes of meetings, typing work, prepare monthly progress reports",
                ]),
                'duties_mr' => json_encode([
                    "सांख्यिकी सहायक-1: वैधानिक विकास मंडळ योजनांतर्गत प्रस्तावांची छानणी करणे",
                    "सांख्यिकी सहायक-2: बैठकीचे इतिवृत्त तयार करणे, टंकलेखन, मासिक प्रगती अहवाल तयार करणे",
                ]),
                'authority_en' => json_encode(["As per Planning Department GRs"]),
                'authority_mr' => json_encode(["म.शा. नियोजन विभागाच्या शासन निर्णयांनुसार"]),
                'icon' => 'FaUserTie',
                'sort_order' => 5,
            ],
            [
                'position_en' => "Accountant",
                'position_mr' => "लेखाधिकारी",
                'duties_en' => json_encode([
                    "Handle all accounting matters",
                    "Perform duties assigned by District Collector/Planning Officer",
                ]),
                'duties_mr' => json_encode([
                    "लेखा विषयक सर्व कामकाज पाहणे",
                    "जिल्हाधिकारी/नियोजन अधिकारी यांनी सोपविलेली कामे करणे",
                ]),
                'authority_en' => json_encode([
                    "As per Planning Department GR No. Jivayo-1007/Pro.Kr.39/Ka-1444 dated 16/02/2008",
                ]),
                'authority_mr' => json_encode([
                    "म.शा. नियोजन विभाग यांचे शा. नि. क्र.जिवायो-1007/प्र.क्र.39/का-1444, दि.16 फेब्रुवारी, 2008",
                ]),
                'icon' => 'FaUserTie',
                'sort_order' => 6,
            ],
        ];

        foreach ($roles as $role) {
            DB::table('role_duties')->insert(array_merge($role, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}