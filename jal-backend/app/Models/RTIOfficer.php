<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RTIOfficer extends Model
{
    use HasFactory;

    protected $table = 'rti_officers';

    protected $fillable = [
        'name_en',
        'name_mr',
        'designation_en',
        'designation_mr',
        'jurisdiction_en',
        'jurisdiction_mr',
        'address_en',
        'address_mr',
        'phone',
        'email',
        'officer_type',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active officers.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order officers.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }

    /**
     * Scope a query by officer type.
     */
    public function scopeByType($query, $type)
    {
        return $query->where('officer_type', $type);
    }
}