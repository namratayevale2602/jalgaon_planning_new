<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutDpc extends Model
{
    protected $table = 'about_dpc';
    protected $fillable = [
        'name_en',
        'name_mr',
        'description_en',
        'description_mr',
        'image_path',
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
