<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfficeFacility extends Model
{
    use HasFactory;

    protected $fillable = [
        'facility_en',
        'facility_mr',
        'time_en',
        'time_mr',
        'process_en',
        'process_mr',
        'location_en',
        'location_mr',
        'responsible_en',
        'responsible_mr',
        'grievance_en',
        'grievance_mr',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active facilities.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order facilities.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }
}