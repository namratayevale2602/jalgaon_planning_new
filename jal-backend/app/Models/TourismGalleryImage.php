<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TourismGalleryImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'title',
        'order',
        'is_active'
    ];

    protected $casts = [
        'title' => 'array',
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
     * Scope a query to only include active images.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order images.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
}