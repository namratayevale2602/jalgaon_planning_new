<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeyResponsibility extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_en',
        'title_mr',
        'description_en',
        'description_mr',
        'details_en',
        'details_mr',
        'icon',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'details_en' => 'array',
        'details_mr' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Scope a query to only include active responsibilities.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order responsibilities.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }
}