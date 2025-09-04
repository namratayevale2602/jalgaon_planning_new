<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Scheme extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'description',
        'details',
        'image_path',
        'documents',
        'category_id',
        'is_active',
        'order'
    ];

    protected $casts = [
        'name' => 'array',
        'description' => 'array',
        'details' => 'array',
        'documents' => 'array',
        'is_active' => 'boolean',
    ];

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true) ?? ['en' => '', 'mr' => ''],
            set: fn ($value) => json_encode($value)
        );
    }

    protected function description(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true) ?? ['en' => '', 'mr' => ''],
            set: fn ($value) => json_encode($value)
        );
    }

    protected function details(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true) ?? ['en' => [], 'mr' => []],
            set: fn ($value) => json_encode($value)
        );
    }

    protected function documents(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true) ?? [
                'en' => ['title' => 'Documents', 'items' => []],
                'mr' => ['title' => 'दस्तऐवज', 'items' => []]
            ],
            set: fn ($value) => json_encode($value)
        );
    }

    // Scope for active schemes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for ordering
    public function scopeOrdered($query)
    {
        return $query->orderBy('order')->orderBy('name');
    }

    // Helper method to get document URLs with storage path
    public function getDocumentUrls($language = 'en')
    {
        $documents = $this->documents[$language] ?? $this->documents['en'] ?? [];
        
        if (isset($documents['items'])) {
            return array_map(function ($item) {
                // If file_path exists, generate storage URL
                if (isset($item['file_path']) && $item['file_path']) {
                    $item['url'] = asset('uploads/' . $item['file_path']);
                    $item['type'] = 'file';
                } 
                // If external_url exists, use it directly
                elseif (isset($item['external_url']) && $item['external_url']) {
                    $item['url'] = $item['external_url'];
                    $item['type'] = 'url';
                }
                return $item;
            }, $documents['items']);
        }
        
        return [];
    }
}