<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CommitteeDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CommitteeDocumentController extends Controller
{
    public function index(Request $request)
    {
        $documents = CommitteeDocument::all()->map(function ($document) {
            return [
                'id' => $document->id,
                'title' => $document->title,
                'type' => $document->type,
                'link' => $document->file_path,
                'updated' => $document->updated_date->format('Y-m-d'),
                'description' => $document->description,
            ];
        });

        return response()->json([
            'committeeInfo' => [
                'title' => [
                    'en' => 'Jalgaon District Planning Committee',
                    'mr' => 'जळगाव जिल्हा नियोजन समिती',
                ],
                'establishment' => [
                    'en' => 'Established under Maharashtra Act No. XXIV of 1998',
                    'mr' => 'महाराष्ट्र अधिनियम क्रमांक XXIV of 1998 अंतर्गत स्थापन',
                ],
            ],
            'documents' => $documents
        ]);
    }

    public function download($id)
    {
        $document = CommitteeDocument::findOrFail($id);
        
        if (!Storage::exists($document->file_path)) {
            return response()->json(['error' => 'File not found'], 404);
        }

        return Storage::download($document->file_path);
    }
}