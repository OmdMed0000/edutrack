<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlatformRole extends Model
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'role_id');
    }
} 