<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;

class Guardian extends Model
{
    /** @use HasFactory<\Database\Factories\GuardianFactory> */
    use HasFactory;
    protected $fillable = [
        'full_name','bith_date','gender','email','phone_number','type','school_id'
    ];
    
    public function students()
    {
        return $this->belongsToMany(Account::class, 'guardian_student', 'guardian_id', 'student_account_id');
    }
}
