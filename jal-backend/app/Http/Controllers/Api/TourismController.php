<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TourismSpot;
use App\Models\TourismGalleryImage;
use Illuminate\Http\Request;

class TourismController extends Controller
{
    /**
     * Display a listing of tourism spots.
     */
    public function index()
    {
        $spots = TourismSpot::active()->ordered()->get()->map(function($spot) {
            return [
                'id' => $spot->id,
                'slug' => $spot->slug,
                'title' => $spot->title,
                'excerpt' => $spot->description, // Using description as excerpt
                'image' => $spot->image_url,
                'type' => $spot->type,
                'stats' => $spot->stats,
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $spots
        ]);
    }

    /**
     * Display the specified tourism spot.
     */
    public function show($slug)
    {
        $spot = TourismSpot::where('slug', $slug)->active()->first();
        
        if (!$spot) {
            return response()->json([
                'success' => false,
                'message' => 'Tourism spot not found'
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'data' => [
                'id' => $spot->id,
                'slug' => $spot->slug,
                'title' => $spot->title,
                'description' => $spot->description,
                'content' => $spot->content,
                'image' => $spot->image_url,
                'type' => $spot->type,
                'stats' => $spot->stats,
                'development' => $spot->development,
            ]
        ]);
    }

    /**
     * Get tourism gallery images.
     */
    public function gallery()
    {
        $images = TourismGalleryImage::active()->ordered()->get()->map(function($image) {
            return [
                'id' => $image->id,
                'src' => $image->image_url,
                'title' => $image->title,
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $images
        ]);
    }
}