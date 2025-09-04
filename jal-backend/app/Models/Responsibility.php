<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Responsibility extends Model
{
    protected $table = 'responsibilities';
    
    protected $fillable = [
        'items',
        'type',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'items' => 'json',
        'is_active' => 'boolean',
    ];
}