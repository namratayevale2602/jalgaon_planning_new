<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Report::query();
        
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
        
        $reports = $query->get()->map(function($report) {
            return [
                'id' => $report->id,
                'title' => $report->title,
                'description' => $report->description,
                'fileUrl' => $report->file_url,
                'fileType' => $report->file_type,
            ];
        });
        
        return response()->json($reports);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), Report::rules());
        
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }
        
        $report = Report::create($request->all());
        
        return response()->json($report, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        return response()->json([
            'id' => $report->id,
            'title' => $report->title,
            'description' => $report->description,
            'fileUrl' => $report->file_url,
            'fileType' => $report->file_type,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Report $report)
    {
        $validator = Validator::make($request->all(), Report::rules());
        
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }
        
        $report->update($request->all());
        
        return response()->json($report);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        // Delete the file if it's not an external URL
        if (!$report->is_external && $report->file_path && Storage::exists('public/' . $report->file_path)) {
            Storage::delete('public/' . $report->file_path);
        }
        
        $report->delete();
        
        return response()->json(null, 204);
    }
}