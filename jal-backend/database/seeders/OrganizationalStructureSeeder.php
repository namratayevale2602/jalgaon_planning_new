<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrganizationalStructureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $structure = [
            [
                'level' => json_encode(['en' => "District Collector", 'mr' => "जिल्हाधिकारी"]),
                'name' => json_encode(['en' => "Hon.Ayush Prasad", 'mr' => "मा.ना.श्री. आयुष प्रसाद"]),
                'sort_order' => 1,
            ],
            [
                'level' => json_encode(['en' => "District Planning Officer", 'mr' => "जिल्हा नियोजन अधिकारी"]),
                'name' => json_encode(['en' => "Hon.Vijay Shinde", 'mr' => "मा.ना.श्री. विजय शिंदे"]),
                'sort_order' => 2,
            ],
            [
                'level' => json_encode(['en' => "Chairperson And Guardian Minister", 'mr' => "अध्यक्ष तथा पालकमंत्री"]),
                'name' => json_encode(['en' => "Hon. Gulabrao Patil", 'mr' => "मा.ना.श्री. गुलाबराव पाटील"]),
                'sort_order' => 3,
            ],
            [
                'level' => json_encode(['en' => "Assistant District Planning Officer", 'mr' => "सहायक जिल्हा नियोजन अधिकारी"]),
                'name' => json_encode(['en' => "B.P.Salunkhe", 'mr' => "बी.पी. साळुंखे"]),
                'sort_order' => 4,
            ],
            [
                'level' => json_encode(['en' => "Assistant District Planning Officer", 'mr' => "सहायक जिल्हा नियोजन अधिकारी"]),
                'name' => json_encode(['en' => "R.A.Idhe", 'mr' => "रा.आ.इधे"]),
                'sort_order' => 5,
            ],
            [
                'level' => json_encode(['en' => "Accountant Officer", 'mr' => "लेखा अधिकारी"]),
                'name' => json_encode(['en' => "N.S. Umbarkar", 'mr' => "नि.श्री. उंबरकर"]),
                'sort_order' => 6,
            ],
            [
                'level' => json_encode(['en' => "Assistant Research Officer", 'mr' => "सहायक संशोधन अधिकारी"]),
                'name' => json_encode(['en' => "V.V. Jadhav", 'mr' => "वि.वि.जाधव"]),
                'sort_order' => 7,
            ],
            [
                'level' => json_encode(['en' => "Assistant Research Officer", 'mr' => "सहायक संशोधन अधिकारी"]),
                'name' => json_encode(['en' => "B.B.Patil", 'mr' => "बी.बी. पाटील"]),
                'sort_order' => 8,
            ],
            [
                'level' => json_encode(['en' => "Assistant Research Officer", 'mr' => "सहायक संशोधन अधिकारी"]),
                'name' => json_encode(['en' => "Smt.V.A Patil", 'mr' => "श्रीमती व्ही.ए. पाटील"]),
                'sort_order' => 9,
            ],
            [
                'level' => json_encode(['en' => "Assistant Research Officer", 'mr' => "सहायक संशोधन अधिकारी"]),
                'name' => json_encode(['en' => "C.L. Deshpande", 'mr' => "चे. ल. देशपांडे"]),
                'sort_order' => 10,
            ],
            [
                'level' => json_encode(['en' => "Assistant Research Officer", 'mr' => "सहायक संशोधन अधिकारी"]),
                'name' => json_encode(['en' => "Smt. A.P. Bawane", 'mr' => "श्रीमती अ.प्र. बावणे"]),
                'sort_order' => 11,
            ],
            [
                'level' => json_encode(['en' => "Dy.Accountant", 'mr' => "उप लेखा अधिकारी"]),
                'name' => json_encode(['en' => "H.P. Dandekar", 'mr' => "ह.प्र.दांडेकर"]),
                'sort_order' => 12,
            ],
            [
                'level' => json_encode(['en' => "Statistical Assistant", 'mr' => "सांख्यिकी सहायक"]),
                'name' => json_encode(['en' => "H. S. Raut", 'mr' => "ह.सु.राऊत"]),
                'sort_order' => 13,
            ],
            [
                'level' => json_encode(['en' => "Statistical Assistant", 'mr' => "सांख्यिकी सहायक"]),
                'name' => json_encode(['en' => "Vacant", 'mr' => "रिक्त"]),
                'sort_order' => 14,
            ],
            [
                'level' => json_encode(['en' => "Revenue Assistant", 'mr' => "महसुल सहायक"]),
                'name' => json_encode(['en' => "Smt. P.V.Vandrin", 'mr' => "पि. व्ही. वॅन्ड्रीन"]),
                'sort_order' => 15,
            ],
            [
                'level' => json_encode(['en' => "Driver", 'mr' => "वाहनचालक"]),
                'name' => json_encode(['en' => "Majhar Khan", 'mr' => "मजहर खान"]),
                'sort_order' => 16,
            ],
            [
                'level' => json_encode(['en' => "Peon", 'mr' => "शिपाई"]),
                'name' => json_encode(['en' => "Vacant", 'mr' => "रिक्त"]),
                'sort_order' => 17,
            ],
        ];

        foreach ($structure as $item) {
            DB::table('organizational_structures')->insert(array_merge($item, [
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]));
        }
    }
}