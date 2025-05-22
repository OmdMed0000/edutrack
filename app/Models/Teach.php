<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Account;
use App\Models\Module;
use App\Models\Group;
class Teach extends Model
{
    protected $table = 'teaches';
    protected $fillable = [
       'teacher_id','module_id','group_id'
    ];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    public function account()
    {
        return $this->belongsTo(Account::class,'teacher_id');
    }

    public function teacher() // convenience
    {
        return $this->account->user;
    }
}
