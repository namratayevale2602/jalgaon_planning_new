<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutDpc;

class AboutDpcController extends Controller
{
    public function index()
    {
        $aboutdpcs = AboutDpc::all()->map(function($aboutdpc) {
            return [
                'id' => $aboutdpc->id,
                'name' => [
                    'en' => $aboutdpc->name_en,
                    'mr' => $aboutdpc->name_mr,
                ],
                'description' => [
                    'en' => $aboutdpc->description_en,
                    'mr' => $aboutdpc->description_mr,
                ],
                'image' => $aboutdpc->image_url, // Use the accessor to get full URL
            ];
        });

        return response()->json($aboutdpcs);
    }

    public function show($id)
    {
        $aboutdpc = AboutDpc::findOrFail($id);

        return response()->json([
            'id' => $aboutdpc->id,
            'name' => [
                'en' => $aboutdpc->name_en,
                'mr' => $aboutdpc->name_mr,
            ],
            'description' => [
                'en' => $aboutdpc->description_en,
                'mr' => $aboutdpc->description_mr,
            ],
            'image' => $aboutdpc->image_url, // Use the accessor to get full URL
        ]);
    }
}
