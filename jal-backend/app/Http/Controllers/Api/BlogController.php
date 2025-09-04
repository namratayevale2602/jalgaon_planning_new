<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::published()
            ->latest()
            ->get()
            ->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'title' => [
                        'en' => $blog->title_en,
                        'mr' => $blog->title_mr,
                    ],
                    'slug' => $blog->slug,
                    'excerpt' => [
                        'en' => $blog->excerpt_en,
                        'mr' => $blog->excerpt_mr,
                    ],
                    'content' => [
                        'en' => $blog->content_en,
                        'mr' => $blog->content_mr,
                    ],
                    'date' => $blog->date->format('Y-m-d'),
                    'category' => [
                        'en' => $blog->category_en,
                        'mr' => $blog->category_mr,
                    ],
                    'tags' => $blog->tags,
                    'author' => $blog->author,
                    'image' => $blog->image_url,
                    'views' => $blog->views,
                ];
            });
        
        return response()->json([
            'success' => true,
            'data' => $blogs
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $blog = Blog::published()->where('slug', $slug)->first();

        if (!$blog) {
            return response()->json([
                'success' => false,
                'message' => 'Blog post not found'
            ], 404);
        }

        // Increment view count
        $blog->incrementViews();

        $blogData = [
            'id' => $blog->id,
            'title' => [
                'en' => $blog->title_en,
                'mr' => $blog->title_mr,
            ],
            'slug' => $blog->slug,
            'excerpt' => [
                'en' => $blog->excerpt_en,
                'mr' => $blog->excerpt_mr,
            ],
            'content' => [
                'en' => $blog->content_en,
                'mr' => $blog->content_mr,
            ],
            'date' => $blog->date->format('Y-m-d'),
            'category' => [
                'en' => $blog->category_en,
                'mr' => $blog->category_mr,
            ],
            'tags' => $blog->tags,
            'author' => $blog->author,
            'image' => $blog->image_url,
            'views' => $blog->views,
        ];

        return response()->json([
            'success' => true,
            'data' => $blogData
        ]);
    }

    /**
     * Get blog posts by category.
     */
    public function byCategory($category)
    {
        $blogs = Blog::published()
            ->where('category_en', $category)
            ->orWhere('category_mr', $category)
            ->latest()
            ->get()
            ->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'title' => [
                        'en' => $blog->title_en,
                        'mr' => $blog->title_mr,
                    ],
                    'slug' => $blog->slug,
                    'excerpt' => [
                        'en' => $blog->excerpt_en,
                        'mr' => $blog->excerpt_mr,
                    ],
                    'date' => $blog->date->format('Y-m-d'),
                    'category' => [
                        'en' => $blog->category_en,
                        'mr' => $blog->category_mr,
                    ],
                    'image' => $blog->image_url,
                ];
            });
        
        return response()->json([
            'success' => true,
            'data' => $blogs
        ]);
    }

    /**
     * Get blog posts by tag.
     */
    public function byTag($tag)
    {
        $blogs = Blog::published()
            ->whereJsonContains('tags', $tag)
            ->latest()
            ->get()
            ->map(function($blog) {
                return [
                    'id' => $blog->id,
                    'title' => [
                        'en' => $blog->title_en,
                        'mr' => $blog->title_mr,
                    ],
                    'slug' => $blog->slug,
                    'excerpt' => [
                        'en' => $blog->excerpt_en,
                        'mr' => $blog->excerpt_mr,
                    ],
                    'date' => $blog->date->format('Y-m-d'),
                    'category' => [
                        'en' => $blog->category_en,
                        'mr' => $blog->category_mr,
                    ],
                    'image' => $blog->image_url,
                ];
            });
        
        return response()->json([
            'success' => true,
            'data' => $blogs
        ]);
    }

    /**
     * Get all categories.
     */
    public function categories()
    {
        $categories = Blog::published()
            ->select('category_en', 'category_mr')
            ->distinct()
            ->get()
            ->map(function($blog) {
                return [
                    'en' => $blog->category_en,
                    'mr' => $blog->category_mr,
                ];
            });
        
        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }

    /**
     * Get all tags.
     */
    public function tags()
    {
        $tags = Blog::published()
            ->pluck('tags')
            ->flatten()
            ->unique()
            ->values();
        
        return response()->json([
            'success' => true,
            'data' => $tags
        ]);
    }
}