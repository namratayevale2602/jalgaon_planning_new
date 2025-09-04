<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_en',
        'title_mr',
        'slug',
        'excerpt_en',
        'excerpt_mr',
        'content_en',
        'content_mr',
        'date',
        'category_en',
        'category_mr',
        'tags',
        'author',
        'image',
        'is_published',
        'views'
    ];

    protected $casts = [
        'tags' => 'array',
        'date' => 'date',
        'is_published' => 'boolean',
        'views' => 'integer'
    ];

    /**
     * Get the full URL for the image.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            if (filter_var($this->image, FILTER_VALIDATE_URL)) {
                return $this->image;
            }
            return asset('uploads/' . $this->image);
        }
        return null;
    }

    /**
     * Scope a query to only include published blogs.
     */
    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    /**
     * Scope a query to order by date.
     */
    public function scopeLatest($query)
    {
        return $query->orderBy('date', 'desc');
    }

    /**
     * Generate slug from title.
     */
    public static function createSlug($title)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (static::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count++;
        }

        return $slug;
    }

    /**
     * Increment view count.
     */
    public function incrementViews()
    {
        $this->increment('views');
        $this->save();
    }
}