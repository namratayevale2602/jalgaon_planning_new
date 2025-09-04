<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PoliticalRepresentativesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departmentData = [
            'en' => [
                'title' => "Political Representatives",
                'categories' => [
                    [
                        'title' => "",
                        'people' => [
                            [
                                'name' => "Hon. Shri. Gulabrao Raghunath Patil",
                                'designation' => "Minister for Water Supply and Sanitation, Govt. of Maharashtra",
                                'matdarsangh' => "Jalgaon (Rural)",
                                'image' => 'gulabraoPatil.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "",
                        'people' => [
                            [
                                'name' => "Shri.Aayush Prasad",
                                'designation' => "Collector",
                                'matdarsangh' => "Jalgoan",
                                'image' => 'dmsir.jpg',
                            ],
                            [
                                'name' => "Shri.Vijay Shinde",
                                'designation' => "District Planning Officer",
                                'matdarsangh' => "Jalgaon",
                                'image' => 'vijayshinde.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "Lok Sabha Members",
                        'people' => [
                            [
                                'name' => "Hon. Smt. Raksha Nikhil Khadse",
                                'designation' => "Minister of State for Youth Affairs and Sports, Govt. of India",
                                'matdarsangh' => "Raver Lok Sabha",
                                'image' => 'rakshakhadse.jpg',
                            ],
                            [
                                'name' => "Hon. Smt. Smita Uday Wagh",
                                'designation' => "",
                                'matdarsangh' => "Jalgaon Lok Sabha",
                                'image' => 'smitawagh.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "Vidhan Sabha Members",
                        'people' => [
                            [
                                'name' => "Hon. Shri. Girish Dattatray Mahajan",
                                'designation' => "Minister for Water Resources (Vidarbha, Tapi, Konkan Basin Development Corporation) & Disaster Management, Govt. of Maharashtra",
                                'matdarsangh' => "Jamner",
                                'image' => 'girish.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Sanjay Waman Sawkare",
                                'designation' => "Minister for Textiles, Govt. of Maharashtra",
                                'matdarsangh' => "Bhusawal",
                                'image' => 'sanjaysavkare.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Kishor Appa Patil",
                                'designation' => "",
                                'matdarsangh' => "Pachora-Bhadgaon",
                                'image' => 'kishoepatil.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Suresh Damu Bholle (Raju Mama)",
                                'designation' => "",
                                'matdarsangh' => "Jalgaon (City)",
                                'image' => 'rajubhole.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Chandrakant Balirao Sonawane",
                                'designation' => "",
                                'matdarsangh' => "Chopda",
                                'image' => 'chandrakantsonvane.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Anil Bhaidas Patil",
                                'designation' => "",
                                'matdarsangh' => "Amalner",
                                'image' => 'anilpatil.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Chandrakant Nibaji Patil",
                                'designation' => "",
                                'matdarsangh' => "Muktainagar",
                                'image' => 'chandrakantpatil.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Mangesh Ramesh Chavan",
                                'designation' => "",
                                'matdarsangh' => "Chalisgaon",
                                'image' => 'mangeshchavhan.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Amol Chimanrao Patil",
                                'designation' => "",
                                'matdarsangh' => "Erandol-Parola",
                                'image' => 'amolpatil.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Amol Haribhau Jawale",
                                'designation' => "",
                                'matdarsangh' => "Raver",
                                'image' => 'amoljawale.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "Vidhan Parishad Members",
                        'people' => [
                            [
                                'name' => "Hon. Shri. Eknathrao Khadse",
                                'designation' => "MLC",
                                'matdarsangh' => "Vidhan Parishad",
                                'image' => 'eknathkhadse.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Kishor Bhikaji Darade",
                                'designation' => "MLC",
                                'matdarsangh' => "Teachers Constituency, Nashik",
                                'image' => 'kishoedarade.jpg',
                            ],
                            [
                                'name' => "Hon. Shri. Satyajit Sudhir Tabe",
                                'designation' => "MLC",
                                'matdarsangh' => "Graduates Constituency, Nashik",
                                'image' => 'satyjittambe.jpg',
                            ],
                        ],
                    ],
                ],
            ],
            'mr' => [
                'title' => "राजकीय प्रतिनिधी",
                'categories' => [
                    [
                        'title' => "",
                        'people' => [
                            [
                                'name' => "मा.ना.श्री.गुलाबराव रघुनाथ पाटील",
                                'designation' => "मंत्री पाणी पुरवठा व स्वच्छता, महाराष्ट्र राज्य, तथा पालकमंत्री जळगाव जिल्हा",
                                'matdarsangh' => "जळगाव (ग्रामीण)",
                                'image' => 'gulabraoPatil.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "",
                        'people' => [
                            [
                                'name' => "श्री आयुष प्रसाद",
                                'designation' => "जिल्हाधिकारी",
                                'matdarsangh' => "जळगाव",
                                'image' => 'dmsir.jpg',
                            ],
                            [
                                'name' => "श्री विजय शिंदे",
                                'designation' => "जिल्हा नियोजन अधिकारी",
                                'matdarsangh' => "जळगाव",
                                'image' => 'vijayshinde.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "लोकसभा सदस्य",
                        'people' => [
                            [
                                'name' => "मा.ना. श्रीमती. रक्षा निखिल खडसे",
                                'designation' => "युवक आणि क्रीडा राज्यमंत्री, भारत सरकार",
                                'matdarsangh' => "रावेर लोकसभा",
                                'image' => 'rakshakhadse.jpg',
                            ],
                            [
                                'name' => "मा.खा.श्रीमती. स्मिता उदय वाघ",
                                'designation' => "",
                                'matdarsangh' => "जळगाव लोकसभा",
                                'image' => 'smitawagh.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "विधानसभा सदस्य",
                        'people' => [
                            [
                                'name' => "मा.ना.श्री. गिरीश दत्तात्रय महाजन",
                                'designation' => "मंत्री जलसंपदा (विदर्भ, तापी, कोकण खोरे विकास महामंडळ), आपत्ती व्यवस्थापन, महाराष्ट्र राज्य",
                                'matdarsangh' => "जामनेर",
                                'image' => 'girish.jpg',
                            ],
                            [
                                'name' => "मा.ना.श्री. संजय वामन सावकारे",
                                'designation' => "मंत्री वस्त्रोद्योग, महाराष्ट्र राज्य",
                                'matdarsangh' => "भुसावळ",
                                'image' => 'sanjaysavkare.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. किशोर आप्पा पाटील",
                                'designation' => "",
                                'matdarsangh' => "पाचोरा - भडगांव",
                                'image' => 'kishoepatil.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. सुरेश दामू भोळे (राजू मामा)",
                                'designation' => "",
                                'matdarsangh' => "जळगाव (शहर)",
                                'image' => 'rajubhole.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. चंद्रकांत बळीराम सोनवणे",
                                'designation' => "",
                                'matdarsangh' => "चोपडा",
                                'image' => 'chandrakantsonvane.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. अनिल भाईदास पाटील",
                                'designation' => "",
                                'matdarsangh' => "अमळनेर",
                                'image' => 'anilpatil.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. चंद्रकांत निंबाजी पाटील",
                                'designation' => "",
                                'matdarsangh' => "मुक्ताईनगर",
                                'image' => 'chandrakantpatil.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. मंगेश रमेश चव्हाण",
                                'designation' => "",
                                'matdarsangh' => "चाळीसगांव",
                                'image' => 'mangeshchavhan.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. अमोल चिमणराव पाटील",
                                'designation' => "",
                                'matdarsangh' => "एरंडोल - पारोळा",
                                'image' => 'amolpatil.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. अमोल हरिभाऊ जावळे",
                                'designation' => "",
                                'matdarsangh' => "रावेर",
                                'image' => 'amoljawale.jpg',
                            ],
                        ],
                    ],
                    [
                        'title' => "विधानपरिषद सदस्य",
                        'people' => [
                            [
                                'name' => "मा.आ.श्री. एकनाथराव खडसे",
                                'designation' => "विधान परिषद सदस्य",
                                'matdarsangh' => "वि.प.स.",
                                'image' => 'eknathkhadse.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. किशोर भिकाजी दराडे",
                                'designation' => "विधान परिषद सदस्य",
                                'matdarsangh' => "शिक्षक मतदारसंघ नाशिक",
                                'image' => 'kishoedarade.jpg',
                            ],
                            [
                                'name' => "मा.आ.श्री. सत्यजीत सुधीर तांबे",
                                'designation' => "विधान परिषद सदस्य",
                                'matdarsangh' => "नाशिक पदवीधर मतदारसंघ",
                                'image' => 'satyjittambe.jpg',
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $sortOrder = 0;

        foreach ($departmentData['en']['categories'] as $categoryIndex => $category) {
            foreach ($category['people'] as $personIndex => $person) {
                // Find corresponding Marathi data
                $mrPerson = $departmentData['mr']['categories'][$categoryIndex]['people'][$personIndex];

                DB::table('political_representatives')->insert([
                    'name_en' => $person['name'],
                    'name_mr' => $mrPerson['name'],
                    'designation_en' => $person['designation'],
                    'designation_mr' => $mrPerson['designation'],
                    'matdarsangh_en' => $person['matdarsangh'],
                    'matdarsangh_mr' => $mrPerson['matdarsangh'],
                    'image_path' => $person['image'],
                    'category' => $category['title'],
                    'subcategory' => null,
                    'sort_order' => $sortOrder++,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}