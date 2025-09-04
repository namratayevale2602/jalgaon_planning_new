<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourismSpot extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'description',
        'content',
        'image',
        'type',
        'stats',
        'development',
        'order',
        'is_active'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'content' => 'array',
        'stats' => 'array',
        'development' => 'array',
        'is_active' => 'boolean',
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
     * Scope a query to only include active spots.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order spots.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
}