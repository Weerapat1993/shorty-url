<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use HasFactory;

    protected $table = 'links';
    protected $fillable = [
        'destination',
        'title',
        'slug',
        'status',
        'published_at',
        'user_id',
    ];

    protected $dates = ['created_at', 'updated_at', 'published_at'];
}
