<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'file_path',
        'file_url',
        'file_type',
        'is_external'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'is_external' => 'boolean'
    ];

    /**
     * Get the URL for the file
     */
    public function getFileUrlAttribute()
    {
        if ($this->is_external) {
            return $this->attributes['file_url'];
        }
        
        return $this->file_path ? asset('storage/' . $this->file_path) : null;
    }

    /**
     * Get the localized title based on current locale
     */
    public function getLocalizedTitleAttribute()
    {
        $locale = app()->getLocale();
        return $this->title[$locale] ?? $this->title['en'] ?? '';
    }

    /**
     * Get the localized description based on current locale
     */
    public function getLocalizedDescriptionAttribute()
    {
        $locale = app()->getLocale();
        return $this->description[$locale] ?? $this->description['en'] ?? '';
    }
}