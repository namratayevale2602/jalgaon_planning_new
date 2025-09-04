<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RolewiseWork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RolewiseWorkController extends Controller
{
    public function index(Request $request)
    {
        $documents = RolewiseWork::all()->map(function ($document) {
            return [
                'id' => $document->id,
                'title' => $document->title,
                'link' => $document->file_path,
                'description' => $document->description,
            ];
        });

        return response()->json([
            'committeeInfo' => [
                'title' => [
                    'en' => 'Jalgaon District Planning Committee',
                    'mr' => 'जळगाव जिल्हा नियोजन समिती',
                ],
                
            ],
            'documents' => $documents
        ]);
    }

    public function download($id)
    {
        $document = RolewiseWork::findOrFail($id);
        
        if (!Storage::exists($document->file_path)) {
            return response()->json(['error' => 'File not found'], 404);
        }

        return Storage::download($document->file_path);
    }
}







