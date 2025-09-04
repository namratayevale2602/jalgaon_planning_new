<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleDuty extends Model
{
    use HasFactory;

    protected $fillable = [
        'position_en',
        'position_mr',
        'duties_en',
        'duties_mr',
        'authority_en',
        'authority_mr',
        'icon',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'duties_en' => 'array',
        'duties_mr' => 'array',
        'authority_en' => 'array',
        'authority_mr' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active roles.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order roles.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }
}
