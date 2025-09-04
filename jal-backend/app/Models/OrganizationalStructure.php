<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizationalStructure extends Model
{
    protected $table = 'organizational_structures';
    
    protected $fillable = [
        'level',
        'name',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'level' => 'json',
        'name' => 'json',
        'is_active' => 'boolean',
    ];
}
