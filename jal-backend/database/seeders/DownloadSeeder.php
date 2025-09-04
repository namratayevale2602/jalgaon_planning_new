<?php

namespace Database\Seeders;

use App\Models\Download;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DownloadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reports = [
            [
                'title' => [
                    'en' => "Jalgaon District Financial Review 2024",
                    'mr' => "जळगाव जिल्हा आर्थिक समालोचन 2024",
                ],
                'description' => [
                    'en' => "Comprehensive financial analysis of Jalgaon district for 2023-24",
                    'mr' => "2023-24 साठी जळगाव जिल्ह्याचे सर्वसमावेशक आर्थिक विश्लेषण",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa/2023-24/DSA_Jalgaon_2023-24.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon District Financial Review 2023",
                    'mr' => "जळगाव जिल्हा आर्थिक समालोचन 2023",
                ],
                'description' => [
                    'en' => "Financial assessment of Jalgaon district for 2022-23",
                    'mr' => "2022-23 साठी जळगाव जिल्ह्याचे आर्थिक मूल्यांकन",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa/2022-23/DSA%202023%20Jalgaon_006.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon District Financial Review 2022",
                    'mr' => "जळगाव जिल्हा आर्थिक समालोचन 2022",
                ],
                'description' => [
                    'en' => "Detailed financial report of Jalgaon district for 2021-22",
                    'mr' => "2021-22 साठी जळगाव जिल्ह्याचे तपशीलवार आर्थिक अहवाल",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa/2021-22/DSA_Jalgaon_2021-22.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon District Financial Review 2021",
                    'mr' => "जळगाव जिल्हा आर्थिक समालोचन 2021",
                ],
                'description' => [
                    'en' => "Economic survey of Jalgaon district for 2020-21",
                    'mr' => "2020-21 साठी जळगाव जिल्ह्याचे आर्थिक सर्वेक्षण",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/Jalgaon_DSA_2021.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon District Financial Review 2020",
                    'mr' => "जळगाव जिल्हा आर्थिक समालोचन 2020",
                ],
                'description' => [
                    'en' => "Financial status report of Jalgaon district for 2019-20",
                    'mr' => "2019-20 साठी जळगाव जिल्ह्याचे आर्थिक स्थिती अहवाल",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa_Jalgaon_2020.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon Taluka Selected Indicators 2023-24",
                    'mr' => "जळगाव जिल्हा तालुका निवडक निर्देशांक 2023-24",
                ],
                'description' => [
                    'en' => "Key development indicators for Jalgaon talukas 2023-24",
                    'mr' => "2023-24 साठी जळगाव तालुक्यांचे प्रमुख विकास निर्देशांक",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa/TalukaNirdeshak/2023-24/DSA_Jalgaon_2023-24.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Jalgaon Taluka Selected Indicators 2022-23",
                    'mr' => "जळगाव जिल्हा तालुका निवडक निर्देशांक 2022-23",
                ],
                'description' => [
                    'en' => "Development metrics for Jalgaon talukas 2022-23",
                    'mr' => "2022-23 साठी जळगाव तालुक्यांचे विकास मेट्रिक्स",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/dsa/TalukaNirdeshak/2022-23/DSA_Jalgaon_2022-23.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Maharashtra Economic Survey 2024-25",
                    'mr' => "महाराष्ट्राची आर्थिक पाहणी 2024-25",
                ],
                'description' => [
                    'en' => "Comprehensive economic analysis of Maharashtra state",
                    'mr' => "महाराष्ट्र राज्याचे सर्वसमावेशक आर्थिक विश्लेषण",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/ESM1920/chapter/Marathi/esm_2425_m.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Maharashtra Economic Survey 2023-24",
                    'mr' => "महाराष्ट्राची आर्थिक पाहणी 2023-24",
                ],
                'description' => [
                    'en' => "State economic performance and analysis 2023-24",
                    'mr' => "2023-24 साठी राज्याची आर्थिक कामगिरी आणि विश्लेषण",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/ESM_2023_24_Mar_Book.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Maharashtra Economic Survey 2022-23",
                    'mr' => "महाराष्ट्राची आर्थिक पाहणी 2022-23",
                ],
                'description' => [
                    'en' => "Economic trends and sectoral analysis of Maharashtra",
                    'mr' => "महाराष्ट्राचे आर्थिक ट्रेंड आणि क्षेत्रवार विश्लेषण",
                ],
                'file_url' => "https://mahades.maharashtra.gov.in/files/publication/ESM_2022_23_Mar_Book.pdf",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "District Development Plan (KBC North Maharashtra University Report)",
                    'mr' => "जिल्हा विकास आराखडा (कवयित्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ अहवाल)",
                ],
                'description' => [
                    'en' => "Development framework report by KBC North Maharashtra University",
                    'mr' => "कवयित्री बहिणाबाई चौधरी विद्यापीठाचा विकास आराखडा अहवाल",
                ],
                'file_url' => "https://drive.google.com/file/d/1oZQ5-40jRxgDSl6hElpHVBTrtxpW2FeM/view?usp=drive_link",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "District Development Plan (Symbiosis University Report)",
                    'mr' => "जिल्हा विकास आराखडा (सिम्बॉयसिस विद्यापीठ पुणे अहवाल)",
                ],
                'description' => [
                    'en' => "Comprehensive development strategy by Symbiosis University",
                    'mr' => "सिम्बॉयसिस विद्यापीठाचा सर्वसमावेशक विकास धोरण अहवाल",
                ],
                'file_url' => "https://drive.google.com/file/d/1QUr2l6rTw25abSYGG3ZcPHh-M8zEo9EN/view?usp=drive_link",
                'file_type' => "PDF",
                'is_external' => true,
            ],
            [
                'title' => [
                    'en' => "Maharashtra Economic Advisory Council 2023 Report",
                    'mr' => "महाराष्ट्र आर्थिक सल्लागार समिती अहवाल 2023",
                ],
                'description' => [
                    'en' => "Policy recommendations and economic guidance for Maharashtra",
                    'mr' => "महाराष्ट्रासाठी धोरण शिफारसी आणि आर्थिक मार्गदर्शन",
                ],
                'file_url' => "https://plan.maharashtra.gov.in/Sitemap/plan/Acts_Rules_and_Notifications_issued_in_respect_of_Maharashtra_District_Planning_Committee.htm",
                'file_type' => "PDF",
                'is_external' => true,
            ],
        ];

        foreach ($reports as $report) {
            Download::create($report);
        }
    }
}