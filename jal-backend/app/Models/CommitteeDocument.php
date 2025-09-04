<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class CommitteeDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'type',
        'file_path',
        'updated_date',
        'description'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
        'updated_date' => 'date',
    ];

    // Add this accessor to get the full URL
    protected $appends = ['url'];

    /**
     * Get the full URL for the file
     */
    public function getUrlAttribute()
    {
        if ($this->file_path) {
            return asset('uploads/' . $this->file_path);
        }
        
        return null;
    }
}