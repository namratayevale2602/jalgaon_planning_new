<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::active()->ordered()->get()->map(function($banner) {
            return [
                'id' => $banner->id,
                'image' => $banner->image_url, // Use the accessor to get full URL
                'alt_text' => $banner->alt_text,
                'order' => $banner->order,
                'is_active' => $banner->is_active,
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $banners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }
}