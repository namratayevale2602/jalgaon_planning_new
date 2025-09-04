<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DpcDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_en',
        'name_mr',
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
     * Get the document URL - returns either the external URL or the stored file URL
     */
    public function getDocumentUrlAttribute()
    {
        if ($this->is_url) {
            return $this->url;
        }
        
        return $this->file_path ? asset('storage/' . $this->file_path) : null;
    }
}