<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = GalleryCategory::with(['images' => function($query) {
            $query->active()->ordered();
        }])
        ->active()
        ->ordered()
        ->get()
        ->map(function($category) {
            return [
                'id' => $category->id,
                'title' => [
                    'en' => $category->title_en,
                    'mr' => $category->title_mr,
                ],
                'description' => [
                    'en' => $category->description_en,
                    'mr' => $category->description_mr,
                ],
                'images' => $category->images->map(function($image) {
                    return [
                        'id' => $image->id,
                        'url' => $image->image_url,
                        'title' => [
                            'en' => $image->title_en,
                            'mr' => $image->title_mr,
                        ],
                        'description' => [
                            'en' => $image->description_en,
                            'mr' => $image->description_mr,
                        ],
                    ];
                })
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        abort(404);
    }
}