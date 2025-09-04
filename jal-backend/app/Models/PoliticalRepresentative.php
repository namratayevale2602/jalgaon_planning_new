<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PoliticalRepresentative extends Model
{
    protected $table = 'political_representatives';
    
    protected $fillable = [
        'name_en',
        'name_mr',
        'designation_en',
        'designation_mr',
        'matdarsangh_en',
        'matdarsangh_mr',
        'image_path',
        'category',
        'subcategory',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
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
