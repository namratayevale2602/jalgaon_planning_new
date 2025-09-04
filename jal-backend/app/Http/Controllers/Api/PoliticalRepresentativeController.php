<?php
// app/Http/Controllers/Api/PoliticalRepresentativeController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PoliticalRepresentative;
use Illuminate\Http\Request;

class PoliticalRepresentativeController extends Controller
{
    public function index(Request $request)
    {
        $representatives = PoliticalRepresentative::where('is_active', true)
            ->orderBy('category')
            ->orderBy('sort_order', 'asc')
            ->get();

        $language = $request->get('lang', 'en');
        
        // Group by category
        $groupedData = [
            'title' => $language === 'mr' ? 'राजकीय प्रतिनिधी' : 'Political Representatives',
            'categories' => []
        ];

        foreach ($representatives as $rep) {
            $categoryKey = $rep->category;
            
            if (!isset($groupedData['categories'][$categoryKey])) {
                $groupedData['categories'][$categoryKey] = [
                    'title' => $this->getCategoryTitle($rep->category, $language),
                    'people' => []
                ];
            }

            $groupedData['categories'][$categoryKey]['people'][] = [
                'name' => $language === 'mr' ? $rep->name_mr : $rep->name_en,
                'designation' => $language === 'mr' ? $rep->designation_mr : $rep->designation_en,
                'matdarsangh' => $language === 'mr' ? $rep->matdarsangh_mr : $rep->matdarsangh_en,
                'image' => $rep->image_url,
            ];
        }

        // Convert to indexed array
        $result = [
            'title' => $groupedData['title'],
            'categories' => array_values($groupedData['categories'])
        ];

        return response()->json($result);
    }

    private function getCategoryTitle($category, $language)
    {
        $mapping = [
            'minister' => '',
            'administrative' => '',
            'lok_sabha' => $language === 'mr' ? 'लोकसभा सदस्य' : 'Lok Sabha Members',
            'vidhan_sabha' => $language === 'mr' ? 'विधानसभा सदस्य' : 'Vidhan Sabha Members',
            'vidhan_parishad' => $language === 'mr' ? 'विधानपरिषद सदस्य' : 'Vidhan Parishad Members',
        ];

        return $mapping[$category] ?? $category;
    }
}