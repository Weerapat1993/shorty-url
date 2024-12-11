<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ledger extends Model
{
    use HasFactory;

    protected $table = 'ledgers';
    protected $fillable = [
        'title',
        'firstname',
        'lastname',
        'birthdate',
        'avatar_url',
    ];
}
