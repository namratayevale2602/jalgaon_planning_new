<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DecisionProcess extends Model
{
    protected $table = 'decision_processes';
    
    protected $fillable = [
        'work_type',
        'timeline',
        'responsible',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'work_type' => 'json',
        'timeline' => 'json',
        'responsible' => 'json',
        'is_active' => 'boolean',
    ];
}