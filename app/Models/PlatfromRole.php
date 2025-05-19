<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlatfromAdmin;
use App\Models\School;
use App\Models\User;
class PlatfromRole extends Model
{
    /** @use HasFactory<\Database\Factories\PlatfromRoleFactory> */
    use HasFactory;

    protected $fillable = [
        'role_name','created_by'
    ];

    public function platfromAdmin(){
        return $this->belongsTo(PlatfromAdmin::class);
    }
    public function schools(){
        return $this->belongsToMany(School::class);
    }

    public function users(){
        return $this->hasMany(User::class);
    }
}
