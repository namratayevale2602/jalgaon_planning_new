<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutDistrict extends Model
{
    protected $table = 'aboutdistricts';
    protected $fillable = [
        'name_en',
        'name_mr',
        'description_en',
        'description_mr',
        'image_path',
        'stats_en',
        'stats_mr'
    ];

    protected $casts = [
        'stats_en' => 'array',
        'stats_mr' => 'array'
    ];

    /**
     * Get the full URL for the image.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image_path) {
            // Check if the image path is already a URL
            if (filter_var($this->image_path, FILTER_VALIDATE_URL)) {
                return $this->image_path;
            }
            
            // Return the uploads URL for uploaded images
            return asset('uploads/' . $this->image_path);
        }
        
        return null;
    }
}