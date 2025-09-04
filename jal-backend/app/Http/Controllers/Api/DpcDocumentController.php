<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DpcDocument;
use Illuminate\Http\Request;

class DpcDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $documents = DpcDocument::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($document) use ($language) {
                return [
                    'name' => $language === 'mr' ? $document->name_mr : $document->name_en,
                    'url' => $document->document_url // Use the accessor to get the correct URL
                ];
            });
            
        return response()->json([
            'documents' => [
                'title' => $language === 'mr' ? 'महत्त्वाची दस्तऐवजे' : 'Planning Committee Rules & Act',
                'items' => $documents
            ]
        ]);
    }
}