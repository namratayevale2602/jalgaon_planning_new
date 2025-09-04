<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DspReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_en',
        'title_mr',
        'url',
        'file_path',
        'is_url',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_url' => 'boolean',
    ];

     /**
     * Get the report URL - returns either the external URL or the stored file URL
     */
    public function getReportUrlAttribute()
    {
        if ($this->is_url) {
            return $this->url;
        }
        
        return $this->file_path ? asset('storage/' . $this->file_path) : null;
    }

    /**
     * Scope a query to only include active reports.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order reports.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order', 'asc');
    }
}
