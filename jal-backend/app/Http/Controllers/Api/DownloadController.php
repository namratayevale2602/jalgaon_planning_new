<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Download;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DownloadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Download::query();
        
        // Search functionality
        if ($request->has('search') && !empty($request->search)) {
            $searchTerm = $request->search;
            
            $query->where(function($q) use ($searchTerm) {
                $q->where('title->en', 'like', "%{$searchTerm}%")
                  ->orWhere('title->mr', 'like', "%{$searchTerm}%")
                  ->orWhere('description->en', 'like', "%{$searchTerm}%")
                  ->orWhere('description->mr', 'like', "%{$searchTerm}%");
            });
        }
        
        $Download = $query->get()->map(function($Download) {
            return [
                'id' => $Download->id,
                'title' => $Download->title,
                'description' => $Download->description,
                'fileUrl' => $Download->file_url,
                'fileType' => $Download->file_type,
            ];
        });
        
        return response()->json($Download);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), Download::rules());
        
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }
        
        $Download = Download::create($request->all());
        
        return response()->json($Download, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Download $Download)
    {
        return response()->json([
            'id' => $Download->id,
            'title' => $Download->title,
            'description' => $Download->description,
            'fileUrl' => $Download->file_url,
            'fileType' => $Download->file_type,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Download $Download)
    {
        $validator = Validator::make($request->all(), Download::rules());
        
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }
        
        $Download->update($request->all());
        
        return response()->json($Download);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Download $Download)
    {
        // Delete the file if it's not an external URL
        if (!$Download->is_external && $Download->file_path && Storage::exists('public/' . $Download->file_path)) {
            Storage::delete('public/' . $Download->file_path);
        }
        
        $Download->delete();
        
        return response()->json(null, 204);
    }
}