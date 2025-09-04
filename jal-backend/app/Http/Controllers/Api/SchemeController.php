<?php
// app/Http/Controllers/Api/SchemeController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Scheme;
use Illuminate\Http\Request;

class SchemeController extends Controller
{
    public function index(Request $request)
    {
        $schemes = Scheme::active()
            ->ordered()
            ->get()
            ->map(function ($scheme) use ($request) {
                $language = $request->header('Accept-Language', 'en');
                
                return [
                    'id' => $scheme->id,
                    'title' => $scheme->name[$language] ?? $scheme->name['en'],
                    'description' => $scheme->description[$language] ?? $scheme->description['en'],
                    'image' => asset('uploads/' . $scheme->image_path),
                    'category_id' => $scheme->category_id,
                    'slug' => $scheme->slug,
                ];
            });

        return response()->json($schemes);
    }

    public function show(Request $request, $slug)
    {
        $scheme = Scheme::where('slug', $slug)->active()->firstOrFail();
        $language = $request->header('Accept-Language', 'en');

        $response = [
            'id' => $scheme->id,
            'name' => $scheme->name[$language] ?? $scheme->name['en'],
            'description' => $scheme->description[$language] ?? $scheme->description['en'],
            'details' => $scheme->details[$language] ?? $scheme->details['en'],
            'image' => asset('uploads/' . $scheme->image_path),
            'documents' => [
                'title' => $scheme->documents[$language]['title'] ?? $scheme->documents['en']['title'] ?? 'Documents',
                'items' => $scheme->getDocumentUrls($language)
            ],
            'slug' => $scheme->slug,
        ];

        return response()->json($response);
    }

    public function byCategory(Request $request, $categoryId)
    {
        $schemes = Scheme::where('category_id', $categoryId)
            ->active()
            ->ordered()
            ->get()
            ->map(function ($scheme) use ($request) {
                $language = $request->header('Accept-Language', 'en');
                
                return [
                    'id' => $scheme->id,
                    'title' => $scheme->name[$language] ?? $scheme->name['en'],
                    'description' => $scheme->description[$language] ?? $scheme->description['en'],
                    'image' => asset('uploads/' . $scheme->image_path),
                    'category_id' => $scheme->category_id,
                    'slug' => $scheme->slug,
                ];
            });

        return response()->json($schemes);
    }

    public function downloadDocument($schemeSlug, $documentIndex, Request $request)
    {
        $scheme = Scheme::where('slug', $schemeSlug)->active()->firstOrFail();
        $language = $request->header('Accept-Language', 'en');
        
        $documents = $scheme->documents[$language]['items'] ?? $scheme->documents['en']['items'] ?? [];
        
        if (isset($documents[$documentIndex])) {
            $document = $documents[$documentIndex];
            
            // Handle file download
            if (isset($document['file_path']) && $document['file_path']) {
                $filePath = storage_path('app/public/' . $document['file_path']);
                
                if (file_exists($filePath)) {
                    return response()->download($filePath, $document['name'] . '.pdf');
                }
            }
            // Handle external URL redirect
            elseif (isset($document['external_url']) && $document['external_url']) {
                return redirect()->away($document['external_url']);
            }
        }
        
        return response()->json(['error' => 'Document not found'], 404);
    }
}