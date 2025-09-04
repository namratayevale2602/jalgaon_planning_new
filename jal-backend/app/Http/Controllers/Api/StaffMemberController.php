<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StaffMember;
use Illuminate\Http\Request;

class StaffMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $staffMembers = StaffMember::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($staff) use ($language) {
                // Convert responsibilities from array of objects to simple array
                $responsibilitiesEn = array_map(function($item) {
                    return is_array($item) && isset($item['responsibility']) ? $item['responsibility'] : $item;
                }, $staff->responsibilities_en);
                
                $responsibilitiesMr = array_map(function($item) {
                    return is_array($item) && isset($item['responsibility']) ? $item['responsibility'] : $item;
                }, $staff->responsibilities_mr);
                
                return [
                    'name' => [
                        'en' => $staff->name_en,
                        'mr' => $staff->name_mr
                    ],
                    'designation' => [
                        'en' => $staff->designation_en,
                        'mr' => $staff->designation_mr
                    ],
                    'contact' => [
                        'phone' => $staff->phone,
                        'email' => $staff->email
                    ],
                    'responsibilities' => [
                        'en' => $responsibilitiesEn,
                        'mr' => $responsibilitiesMr
                    ],
                    'photo' => $staff->photo_url
                ];
            });
            
        return response()->json([
            'success' => true,
            'data' => [
                'title' => [
                    'en' => 'Duties and responsibilities of officers',
                    'mr' => 'अधिकारी यांचे कर्तव्य व जबाबदा-या'
                ],
                'staffMembers' => $staffMembers,
                'contactTitle' => [
                    'en' => 'Contact',
                    'mr' => 'संपर्क'
                ],
                'responsibilitiesTitle' => [
                    'en' => 'Responsibilities',
                    'mr' => 'जबाबदाऱ्या'
                ]
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