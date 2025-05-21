<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlatfromAdmin;
use App\Models\SchoolType;
use App\Models\PlatfromRole;
use App\Models\Account;
use Illuminate\Support\Facades\DB;

class School extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolFactory> */
    use HasFactory;

    protected $fillable = ['school_name','school_type_id','created_by','school_key'];

    public function platformAdmin(){
        return $this->belongsTo(PlatfromAdmin::class,'id','id');
    }
    public function schoolType(){
        return $this->belongsTo(SchoolType::class);
    }
    public function roles(){
        return $this->belongsToMany(PlatfromRole::class);
    }
    public function accounts(){
        return $this->HasMany(Account::class,'school_key','school_key');
    }

    public function getUsersAttribute (){
       return DB::table('users')
            ->join('accounts', 'users.user_key', '=', 'accounts.user_key')
            ->where('accounts.school_key', $this->school_key)
            ->select('users.*')
            ->get();
    }

    public function getUsersByRole($roleId){
        return $this->users->where('role_id',$roleId);
    }
}
