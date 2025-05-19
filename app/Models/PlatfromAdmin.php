<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlatfromRole;
use App\Models\School;
class PlatfromAdmin extends Model
{
    /** @use HasFactory<\Database\Factories\PlatfromAdminFactory> */
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone_number',
      'birth_date',
        'password',
        'original_password',
      'gender',
        'is_active',
        'last_active_at',
    ];
    protected $hidden = ['password'];

    public function roles (){
        return $this->hasMany(PlatfromRole::class);
    }

    public function schools (){
        return $this->hasMany(School::class);
    }
}
