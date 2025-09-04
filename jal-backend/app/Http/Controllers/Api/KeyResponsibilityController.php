<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\KeyResponsibility;
use Illuminate\Http\Request;

class KeyResponsibilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $responsibilities = KeyResponsibility::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($responsibility) use ($language) {
                // Convert details from array of objects to simple array
                $detailsEn = array_map(function($item) {
                    return is_array($item) && isset($item['detail']) ? $item['detail'] : $item;
                }, $responsibility->details_en);
                
                $detailsMr = array_map(function($item) {
                    return is_array($item) && isset($item['detail']) ? $item['detail'] : $item;
                }, $responsibility->details_mr);
                
                return [
                    'title' => [
                        'en' => $responsibility->title_en,
                        'mr' => $responsibility->title_mr
                    ],
                    'description' => [
                        'en' => $responsibility->description_en,
                        'mr' => $responsibility->description_mr
                    ],
                    'details' => [
                        'en' => $detailsEn,
                        'mr' => $detailsMr
                    ],
                    'icon' => $responsibility->icon
                ];
            });
            
        // Static legal basis content
        $legalBasis = [
            'title' => [
                'en' => 'Legal Basis',
                'mr' => 'कायदेशीर आधार'
            ],
            'text1' => [
                'en' => 'These responsibilities are assigned under Section 6 of the District Planning Committee Act, 1998.',
                'mr' => 'ही जबाबदारी जिल्हा नियोजन समिती कायदा, 1998 च्या कलम 6 अंतर्गत नियुक्त केली आहे.'
            ],
            'text2' => [
                'en' => 'The committee operates under the administrative control of the Planning Department, Government of Maharashtra.',
                'mr' => 'समिती महाराष्ट्र सरकारच्या नियोजन विभागाच्या प्रशासकीय नियंत्रणाखाली कार्य करते.'
            ]
        ];
            
        return response()->json([
            'success' => true,
            'data' => [
                'title' => [
                    'en' => 'Key Responsibilities',
                    'mr' => 'मुख्य जबाबदाऱ्या'
                ],
                'responsibilities' => $responsibilities,
                'dutiesTitle' => [
                    'en' => 'Specific Duties:',
                    'mr' => 'विशिष्ट कर्तव्ये:'
                ],
                'legalBasis' => $legalBasis
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }
}