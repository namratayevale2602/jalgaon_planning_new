<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RoleDuty;
use App\Models\TimeBoundActivity;
use Illuminate\Http\Request;

class RoleDutyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $roles = RoleDuty::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($role) use ($language) {
                // Convert details from array of objects to simple array
                $dutiesEn = array_map(function($item) {
                    return is_array($item) && isset($item['duty']) ? $item['duty'] : $item;
                }, $role->duties_en);
                
                $dutiesMr = array_map(function($item) {
                    return is_array($item) && isset($item['duty']) ? $item['duty'] : $item;
                }, $role->duties_mr);
                
                $authorityEn = array_map(function($item) {
                    return is_array($item) && isset($item['authority']) ? $item['authority'] : $item;
                }, $role->authority_en);
                
                $authorityMr = array_map(function($item) {
                    return is_array($item) && isset($item['authority']) ? $item['authority'] : $item;
                }, $role->authority_mr);
                
                return [
                    'position' => [
                        'en' => $role->position_en,
                        'mr' => $role->position_mr
                    ],
                    'duties' => [
                        'en' => $dutiesEn,
                        'mr' => $dutiesMr
                    ],
                    'authority' => [
                        'en' => $authorityEn,
                        'mr' => $authorityMr
                    ],
                    'icon' => $role->icon
                ];
            });
            
        $activities = TimeBoundActivity::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($activity) use ($language) {
                return [
                    'activity' => [
                        'en' => $activity->activity_en,
                        'mr' => $activity->activity_mr
                    ],
                    'timeframe' => [
                        'en' => $activity->timeframe_en,
                        'mr' => $activity->timeframe_mr
                    ],
                    'responsible' => [
                        'en' => $activity->responsible_en,
                        'mr' => $activity->responsible_mr
                    ]
                ];
            });
            
        return response()->json([
            'success' => true,
            'data' => [
                'title' => [
                    'en' => 'Role-wise Duties and Responsibilities',
                    'mr' => 'पदनिहाय कर्तव्ये आणि जबाबदाऱ्या'
                ],
                'roles' => $roles,
                'timeBoundActivities' => [
                    'title' => [
                        'en' => 'Time-bound Activities',
                        'mr' => 'कालबद्ध क्रियाकलाप'
                    ],
                    'items' => $activities
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