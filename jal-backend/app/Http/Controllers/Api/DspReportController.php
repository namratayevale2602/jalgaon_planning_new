<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DspReport;
use Illuminate\Http\Request;

class DspReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $reports = DspReport::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($report) use ($language) {
                return [
                    'title' => [
                        'en' => $report->title_en,
                        'mr' => $report->title_mr
                    ],
                    'url' => $report->report_url // Use the accessor to get the correct URL
                ];
            });
            
        return response()->json([
            'success' => true,
            'data' => $reports
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