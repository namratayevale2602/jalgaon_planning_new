<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DspGalleryImage;
use Illuminate\Http\Request;

class DspGalleryImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $images = DspGalleryImage::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($image) use ($language) {
                return [
                    'src' => $image->image_url,
                    'alt' => [
                        'en' => $image->alt_text_en,
                        'mr' => $image->alt_text_mr
                    ]
                ];
            });
            
        return response()->json([
            'success' => true,
            'data' => $images
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