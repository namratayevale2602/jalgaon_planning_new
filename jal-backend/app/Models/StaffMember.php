<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_en',
        'name_mr',
        'designation_en',
        'designation_mr',
        'phone',
        'email',
        'responsibilities_en',
        'responsibilities_mr',
        'photo',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'responsibilities_en' => 'array',
        'responsibilities_mr' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active staff members.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order staff members.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }

    /**
     * Get the full URL for the photo.
     */
    public function getPhotoUrlAttribute()
    {
        if ($this->photo) {
            // Check if the photo path is already a URL
            if (filter_var($this->photo, FILTER_VALIDATE_URL)) {
                return $this->photo;
            }
            
            // Return the uploads URL for uploaded photos
            return asset('uploads/' . $this->photo);
        }
        
        return null;
    }
}