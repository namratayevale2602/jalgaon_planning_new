<?php

namespace Database\Seeders;

use App\Models\Scheme;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class SchemesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing records
        Scheme::truncate();
        
        // Create sample schemes data
        $schemes = [
            // ANNUAL PLAN
            [
                'slug' => 'annualPlan',
                'name' => [
                    'en' => 'DISTRICT ANNUAL PLAN',
                    'mr' => 'जिल्हा वार्षिक योजना'
                ],
                'description' => [
                    'en' => 'Comprehensive annual development plans for local areas',
                    'mr' => 'स्थानिक भागांसाठी व्यापक वार्षिक विकास योजना'
                ],
                'details' => [
                    'en' => [
                        'Road construction and maintenance',
                        'Water supply projects',
                        'Public infrastructure development',
                        'Education facility improvements',
                        'Healthcare infrastructure',
                        'Yearly budget allocation'
                    ],
                    'mr' => [
                        'रस्ते बांधकाम आणि देखभाल',
                        'पाणीपुरवठा प्रकल्प',
                        'सार्वजनिक पायाभूत सुविधा विकास',
                        'शैक्षणिक सुविधा सुधारणा',
                        'आरोग्यसेवा पायाभूत सुविधा',
                        'वार्षिक अर्थसंकल्प वाटप'
                    ]
                ],
                'image_path' => 'schemes/images/annual_plan.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'Annual Plan Guidelines 2023-24',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/annual_plan_guidelines.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'District Planning Handbook',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/district_planning_handbook.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'वार्षिक योजना मार्गदर्शक तत्त्वे २०२३-२४',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/annual_plan_guidelines_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'जिल्हा नियोजन हँडबुक',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/district_planning_handbook_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 1,
                'is_active' => true,
                'order' => 1
            ],

            // MLA FUNDS
            [
                'slug' => 'mlaFunds',
                'name' => [
                    'en' => 'MLA Local Development Program',
                    'mr' => 'आमदार स्थानिक विकास कार्यक्रम'
                ],
                'description' => [
                    'en' => 'Development projects under MLA Local Area Development funds',
                    'mr' => 'आमदार स्थानिक विकास कार्यक्रम'
                ],
                'details' => [
                    'en' => [
                        'Construction projects to be approved only on government/local government land',
                        '10% limit for maintenance and repair of properties constructed under government schemes',
                        'Action should be taken regarding approval within 45 days',
                        'Final approval of the District Collector is required',
                        'Implementation through the implementing agencies',
                        'Monthly & quarterly progress reports',
                        'Random inspection of works by a team led by the District Planning Office'
                    ],
                    'mr' => [
                        'फक्त शासकीय/स्थानिक स्वराज्य संस्थांच्या जागांवर मंजूर करण्यात येणारे बांधकाम प्रकल्प',
                        'प्रशासकीय खर्चासाठी जास्तीत जास्त 10% ऐवजी शासकीय योजनांमधून बांधकाम करण्यात आलेल्या मालमत्तांच्या देखभाल दुरूस्तीसाठी 10% मर्यादेत',
                        '45-दिवसांत मंजुरीबाबत कार्यवाही करावी',
                        'जिल्हाधिकारी महोदयांची अंतीम मंजूरी आवश्यक',
                        'कार्यान्वयीन यंत्रणेव्दारे अंमलबजावणी',
                        'मासिक व तिमाही प्रगती अहवाल',
                        'जिल्हा नियोजन अधिकारी यांचे नेतृत्वाखालील पथकाव्दारे कामांची यादृच्छीक पध्दतीने तपासणी'
                    ]
                ],
                'image_path' => 'schemes/images/mla_funds.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'MLA Local Development Program Guidelines Government Decision Dated 12/07/2016',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mla_guidelines.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'आमदार स्थानिक विकास कार्यक्रम मार्गदर्शक तत्वे शासन निर्णय दि. 12/07/2016',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mla_guidelines_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 2,
                'is_active' => true,
                'order' => 2
            ],

            // MP FUNDS
            [
                'slug' => 'mpFunds',
                'name' => [
                    'en' => 'MP Local Area Development Program',
                    'mr' => 'खासदार स्थानिक क्षेत्र विकास कार्यक्रम'
                ],
                'description' => [
                    'en' => 'Development projects under MP Local Area Development Program',
                    'mr' => 'खासदार स्थानिक क्षेत्र विकास कार्यक्रम'
                ],
                'details' => [
                    'en' => [
                        '45-day approval period',
                        'Final approval of the District Collector is required',
                        'Random inspection of works by a team led by the District Planning Office',
                        'Upload photographs (geotagged) of completed work',
                        'Follows latest program guidelines (April 2023)',
                        'List of approved projects (2023-24) available'
                    ],
                    'mr' => [
                        '45-दिवसांची मंजुरी मुदत',
                        'जिल्हाधिकारी महोदयांची अंतीम मंजूरी आवश्यक',
                        'जिल्हा नियोजन अधिकारी यांचे नेतृत्वाखालील पथकाव्दारे कामांची यादृच्छीक पध्दतीने तपासणी',
                        'पुर्ण झालेल्या कामांचे छायाचित्रे (जियो टॅग्ड) अपलोड करावे',
                        'खासदार स्थानिक क्षेत्र विकास कार्यक्रमाच्या मार्गदर्शक सुचना, एप्रिल-2023 नुसार',
                        'मंजूर प्रकल्प यादी (2023-24) उपलब्ध'
                    ]
                ],
                'image_path' => 'schemes/images/mp_funds.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'MP LADS Scheme Guidelines',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mp_guidelines.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Implementation Framework',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mp_framework.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'खासदार एलएडीएस योजना मार्गदर्शक तत्त्वे',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mp_guidelines_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'अंमलबजावणी फ्रेमवर्क',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/mp_framework_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 3,
                'is_active' => true,
                'order' => 3
            ],

            // HILLY AREA DEVELOPMENT
            [
                'slug' => 'hillyArea',
                'name' => [
                    'en' => 'HILLY REGION DEVELOPMENT PROGRAM',
                    'mr' => 'डोंगरी विभाग विकास कार्यक्रम'
                ],
                'description' => [
                    'en' => 'Special development projects for hilly and difficult terrains',
                    'mr' => 'डोंगराळ आणि अवघड भूप्रदेशांसाठी विशेष विकास प्रकल्प'
                ],
                'details' => [
                    'en' => [
                        'Road connectivity projects',
                        'Landslide prevention measures',
                        'Special housing schemes',
                        'Water conservation programs',
                        'Eco-tourism development',
                        'Hill agriculture support'
                    ],
                    'mr' => [
                        'रस्ते कनेक्टिव्हिटी प्रकल्प',
                        'जमीनसरकाव रोखण्याचे उपाय',
                        'विशेष गृहनिर्माण योजना',
                        'जलसंधारण कार्यक्रम',
                        'पर्यटन विकास',
                        'डोंगरी शेती समर्थन'
                    ]
                ],
                'image_path' => 'schemes/images/hilly_area.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'Govt Decision No.Donvika-2021/ Q.No.58/ Ka.1481-A,Ministry',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision1.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Government Decision, No.-Donvika-2009/P.No.6/Ka. 1483, Ministry',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision2.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Govt Decision No: Domvika-2021/P.No.58/Ka-1481-A Ministry',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision3.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'शासन निर्णय क्र.डोंविका-2021/ प्र.क्र.58/ का.1481-अ,मंत्रालय',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision1_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'शासन निर्णय , क्रमांक-डोंविका-२००९/प्र.क्र .६/का. १४८३,मंत्रालय',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision2_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'शासन निर्णय क्रमाांक: डोंविका-२०21/प्र.क्र.58/का-१४८१-अ मंत्रालय',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/hilly_decision3_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 4,
                'is_active' => true,
                'order' => 4
            ],

            // HUMAN DEVELOPMENT
            [
                'slug' => 'humanDevelopment',
                'name' => [
                    'en' => 'HUMAN DEVELOPMENT',
                    'mr' => 'मानवी विकास'
                ],
                'description' => [
                    'en' => 'Programs focused on human development and welfare',
                    'mr' => 'मानवी विकास आणि कल्याणावर लक्ष केंद्रित केलेले कार्यक्रम'
                ],
                'details' => [
                    'en' => [
                        'Skill development centers',
                        'Women empowerment programs',
                        'Child welfare initiatives',
                        'Health awareness campaigns',
                        'Adult literacy programs',
                        'Community development projects'
                    ],
                    'mr' => [
                        'कौशल्य विकास केंद्रे',
                        'महिला सक्षमीकरण कार्यक्रम',
                        'बालकल्याण उपक्रम',
                        'आरोग्य जागरूकता मोहीम',
                        'प्रौढ साक्षरता कार्यक्रम',
                        'समुदाय विकास प्रकल्प'
                    ]
                ],
                'image_path' => 'schemes/images/human_development.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'Human Development Framework',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/human_framework.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Skill Development Guidelines',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/skill_guidelines.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'मानवी विकास फ्रेमवर्क',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/human_framework_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'कौशल्य विकास मार्गदर्शक तत्त्वे',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/skill_guidelines_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 5,
                'is_active' => true,
                'order' => 5
            ],

            // MINORITY SCHEMES
            [
                'slug' => 'minoritySchemes',
                'name' => [
                    'en' => 'MINORITY SCHEMES',
                    'mr' => 'अल्पसंख्याक योजना'
                ],
                'description' => [
                    'en' => 'Development schemes for minority community welfare',
                    'mr' => 'अल्पसंख्याक समुदाय कल्याणासाठी विकास योजना'
                ],
                'details' => [
                    'en' => [
                        'Educational scholarships',
                        'Skill development programs',
                        'Community center construction',
                        'Economic empowerment',
                        'Cultural preservation',
                        'Infrastructure development'
                    ],
                    'mr' => [
                        'शैक्षणिक शिष्यवृत्ती',
                        'कौशल्य विकास कार्यक्रम',
                        'समुदाय केंद्र बांधकाम',
                        'आर्थिक सक्षमीकरण',
                        'सांस्कृतिक संवर्धन',
                        'पायाभूत सुविधा विकास'
                    ]
                ],
                'image_path' => 'schemes/images/minority_schemes.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'Minority Welfare Schemes',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/minority_schemes.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Scholarship Guidelines',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/scholarship_guidelines.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'अल्पसंख्याक कल्याण योजना',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/minority_schemes_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'शिष्यवृत्ती मार्गदर्शक तत्त्वे',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/scholarship_guidelines_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 6,
                'is_active' => true,
                'order' => 6
            ],

            // OTHER SCHEMES
            [
                'slug' => 'otherSchemes',
                'name' => [
                    'en' => 'OTHER SCHEMES',
                    'mr' => 'इतर योजना'
                ],
                'description' => [
                    'en' => 'Various other development schemes and programs',
                    'mr' => 'विविध इतर विकास योजना आणि कार्यक्रम'
                ],
                'details' => [
                    'en' => [
                        'Village development projects',
                        'Urban infrastructure',
                        'Public sanitation',
                        'Digital literacy',
                        'Sports infrastructure',
                        'Cultural heritage'
                    ],
                    'mr' => [
                        'ग्रामीण विकास प्रकल्प',
                        'शहरी पायाभूत सुविधा',
                        'सार्वजनिक स्वच्छता',
                        'डिजिटल साक्षरता',
                        'क्रीडा पायाभूत सुविधा',
                        'सांस्कृतिक वारसा'
                    ]
                ],
                'image_path' => 'schemes/images/other_schemes.jpg',
                'documents' => [
                    'en' => [
                        'title' => 'Documents',
                        'items' => [
                            [
                                'name' => 'Various Development Schemes',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/various_schemes.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'Implementation Guidelines',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/implementation_guidelines.pdf',
                                'external_url' => null
                            ]
                        ]
                    ],
                    'mr' => [
                        'title' => 'दस्तऐवज',
                        'items' => [
                            [
                                'name' => 'विविध विकास योजना',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/various_schemes_mr.pdf',
                                'external_url' => null
                            ],
                            [
                                'name' => 'अंमलबजावणी मार्गदर्शक तत्त्वे',
                                'type' => 'file',
                                'file_path' => 'schemes/documents/implementation_guidelines_mr.pdf',
                                'external_url' => null
                            ]
                        ]
                    ]
                ],
                'category_id' => 7,
                'is_active' => true,
                'order' => 7
            ]
        ];

        // Insert data into the database
        foreach ($schemes as $scheme) {
            Scheme::create($scheme);
        }

        $this->command->info('Schemes seeded successfully!');
    }
}