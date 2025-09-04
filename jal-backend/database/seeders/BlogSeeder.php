<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $blogs = [
            [
                'title_en' => "DPC Jalgaon's Urban Development Initiatives 2023",
                'title_mr' => "जिल्हा नियोजन समिती जळगावचे शहरी विकास उपक्रम २०२३",
                'slug' => "dpc-jalgaon-urban-development-initiatives-2023",
                'excerpt_en' => "Overview of DPC Jalgaon's major urban development projects and their impact on city infrastructure.",
                'excerpt_mr' => "जळगाव शहराच्या पायाभूत सुविधांवर जिल्हा नियोजन समितीच्या प्रमुख शहरी विकास प्रकल्पांचा आढावा.",
                'content_en' => "The District Planning Committee of Jalgaon has launched several urban development initiatives in 2023 aimed at improving city infrastructure. Key projects include road widening, sewage system upgrades, and public space development. These projects are being implemented with an allocated budget of ₹125 crores and are expected to benefit over 500,000 residents...",
                'content_mr' => "जळगाव जिल्हा नियोजन समितीने २०२३ मध्ये शहराच्या पायाभूत सुविधांमध्ये सुधारणा करण्यासाठी अनेक शहरी विकास उपक्रम सुरू केले आहेत. मुख्य प्रकल्पांमध्ये रस्त्याची रुंदीकरण, सांडपाणी व्यवस्थापन प्रणाली सुधारणे आणि सार्वजनिक जागा विकास यांचा समावेश आहे. हे प्रकल्प १२५ कोटी रुपयांच्या वाटपासह अंमलात आणले जात आहेत आणि ५ लाखाहून अधिक रहिवाशांना याचा लाभ मिळणार आहे...",
                'date' => "2023-08-15",
                'category_en' => "Urban Development",
                'category_mr' => "शहरी विकास",
                'tags' => json_encode(["infrastructure", "jalgaon", "development"]),
                'author' => "DPC Jalgaon",
                'image' => "blog1.jpg",
                'is_published' => true,
                'views' => 1250
            ],
            [
                'title_en' => "Rural Water Supply Projects in Jalgaon District",
                'title_mr' => "जळगाव जिल्ह्यातील ग्रामीण पाणीपुरवठा प्रकल्प",
                'slug' => "rural-water-supply-projects-jalgaon",
                'excerpt_en' => "DPC Jalgaon's efforts to provide clean drinking water to 150 villages in the district.",
                'excerpt_mr' => "जिल्ह्यातील १५० गावांना स्वच्छ पिण्याचे पाणी पुरवण्यासाठी जिल्हा नियोजन समिती जळगावचे प्रयत्न.",
                'content_en' => "The District Planning Committee has approved ₹85 crores for rural water supply projects covering 150 villages in Jalgaon district. These projects include new borewells, water purification systems, and pipeline networks. The initiative aims to provide 24/7 clean drinking water to rural households and reduce waterborne diseases...",
                'content_mr' => "जळगाव जिल्ह्यातील १५० गावांना समाविष्ट करणाऱ्या ग्रामीण पाणीपुरवठा प्रकल्पांसाठी जिल्हा नियोजन समितीने ८५ कोटी रुपयांची मंजुरी दिली आहे. या प्रकल्पांमध्ये नवीन बोअरवेल, पाणी शुद्धीकरण प्रणाली आणि पाईपलाइन नेटवर्कचा समावेश आहे. या उपक्रमाचा उद्देश ग्रामीण घरांना २४/७ स्वच्छ पिण्याचे पाणी पुरवणे आणि पाणीजन्य रोग कमी करणे आहे...",
                'date' => "2023-09-20",
                'category_en' => "Rural Development",
                'category_mr' => "ग्रामीण विकास",
                'tags' => json_encode(["water", "villages", "health"]),
                'author' => "DPC Jalgaon",
                'image' => "blog2.jpg",
                'is_published' => true,
                'views' => 980
            ],
            [
                'title_en' => "Digital Transformation in DPC Jalgaon",
                'title_mr' => "जिल्हा नियोजन समिती जळगावमध्ये डिजिटल परिवर्तन",
                'slug' => "digital-transformation-dpc-jalgaon",
                'excerpt_en' => "How DPC Jalgaon is implementing e-governance solutions for better public service delivery.",
                'excerpt_mr' => "जिल्हा नियोजन समिती जळगाव चांगल्या सार्वजनिक सेवा वितरणासाठी ई-गव्हर्नन्स उपाय कसे लागू करत आहे.",
                'content_en' => "DPC Jalgaon has launched a comprehensive digital transformation initiative to improve governance and public service delivery. The ₹12 crore project includes online application systems, citizen portals, and mobile apps for various services. This initiative has reduced processing times by 60% and increased transparency in planning processes...",
                'content_mr' => "शासन आणि सार्वजनिक सेवा वितरण सुधारण्यासाठी जिल्हा नियोजन समिती जळगावने एक व्यापक डिजिटल परिवर्तन उपक्रम सुरू केला आहे. १२ कोटी रुपयांच्या या प्रकल्पामध्ये विविध सेवांसाठी ऑनलाइन अर्ज प्रणाली, नागरिक पोर्टल आणि मोबाइल ॲप्सचा समावेश आहे. या उपक्रमामुळे प्रक्रिया वेळ ६०% ने कमी झाली आहे आणि नियोजन प्रक्रियांमध्ये पारदर्शकता वाढली आहे...",
                'date' => "2023-10-05",
                'category_en' => "E-Governance",
                'category_mr' => "ई-गव्हर्नन्स",
                'tags' => json_encode(["digital", "technology", "transparency"]),
                'author' => "DPC Jalgaon",
                'image' => "blog3.jpg",
                'is_published' => true,
                'views' => 1560
            ],
            [
                'title_en' => "Women Empowerment Programs in Jalgaon",
                'title_mr' => "जळगावमधील महिला सक्षमीकरण कार्यक्रम",
                'slug' => "women-empowerment-programs-jalgaon",
                'excerpt_en' => "DPC's initiatives to promote women's education, employment and entrepreneurship in Jalgaon district.",
                'excerpt_mr' => "जळगाव जिल्ह्यात महिलांचे शिक्षण, रोजगार आणि उद्योजकता प्रोत्साहन देण्यासाठी जिल्हा नियोजन समितीचे उपक्रम.",
                'content_en' => "The District Planning Committee has allocated ₹32 crores for women empowerment programs in Jalgaon. These include skill development centers, micro-finance schemes, and educational scholarships. Over 15,000 women have benefited from these programs in the last year, with many starting their own small businesses...",
                'content_mr' => "जळगावमधील महिला सक्षमीकरण कार्यक्रमांसाठी जिल्हा नियोजन समितीने ३२ कोटी रुपयांचे वाटप केले आहे. यामध्ये कौशल्य विकास केंद्रे, सूक्ष्म-वित्त योजना आणि शैक्षणिक शिष्यवृत्तीचा समावेश आहे. गेल्या वर्षी १५,०००हून अधिक महिलांना या कार्यक्रमांचा लाभ मिळाला आहे, ज्यामध्ये अनेकांनी स्वतःचे लहान व्यवसाय सुरू केले आहेत...",
                'date' => "2023-11-12",
                'category_en' => "Social Welfare",
                'category_mr' => "सामाजिक कल्याण",
                'tags' => json_encode(["women", "education", "employment"]),
                'author' => "DPC Jalgaon",
                'image' => "blog4.jpg",
                'is_published' => true,
                'views' => 2100
            ]
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}