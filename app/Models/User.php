<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlatfromRole;
use App\Models\Account;

class User extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'birth_date',
        'gender',
        'user_key',
        'phone_number',
        'role_id'
    ];

    public function role()
    {
        return $this->belongsTo(PlatformRole::class, 'role_id');
    }

    public function accounts()
    {
        return $this->HasMany(Account::class);
    }

    public function hasRole($roleName)
    {
        return $this->role && $this->role->name === $roleName;
    }
}
