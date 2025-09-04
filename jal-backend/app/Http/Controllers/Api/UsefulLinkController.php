<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UsefulLink;
use Illuminate\Http\Request;

class UsefulLinkController extends Controller
{
    public function index(Request $request)
    {
        $links = UsefulLink::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $language = $request->get('lang', 'en');
        
        $formattedLinks = $links->map(function ($link) use ($language) {
            return [
                'title' => [
                    'en' => $link->title_en,
                    'mr' => $link->title_mr,
                ],
                'icon' => $link->icon,
                'description' => [
                    'en' => $link->description_en,
                    'mr' => $link->description_mr,
                ],
                'link' => $link->link,
            ];
        });

        return response()->json([
            'title' => [
                'en' => 'Useful Links',
                'mr' => 'उपयुक्त दुवे',
            ],
            'quickLinksData' => $formattedLinks
        ]);
    }
}