<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class RolewiseWork extends Model
{
    use HasFactory;

    protected $table = 'rolewise_working';

    protected $fillable = [
        'title',
        'file_path',
        'description'
    ];

    protected $casts = [
        'title' => 'array',
        'description' => 'array',
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
