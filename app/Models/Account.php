<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\School;
use App\Models\TeacherType;
class Account extends Model
{
    /** @use HasFactory<\Database\Factories\AccountFactory> */
    use HasFactory;

    protected $fillable = [
        'school_key',
        'user_key',
        'teacher_type_id',
        'password',
        'original_password',
       'is_active',
        'last_reset_password_at',
        'last_login_at',
    ];

    public function user (){
        return $this->belongsTo(User::class,'user_key','user_key');
    }
    public function school (){
        
        return $this->belongsTo(School::class,'school_key','school_key');
    }

    public function teacher_type (){
        return $this->belongsTo(TeacherType::class);
    }
}
