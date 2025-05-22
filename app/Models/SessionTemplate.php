<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;
use App\Models\School;
use App\Models\Room;
use App\Models\Group;
use App\Models\SessionInstance;
class SessionTemplate extends Model
{
    /** @use HasFactory<\Database\Factories\SessionTemplateFactory> */
    use HasFactory;

    protected $fillable = [
        'teacher_id',
        'school_id',
        'group_id',
        'is_current',
        'room_id'
    ];

    public function teacher()
    {
        return $this->belongsTo(Account::class, 'teacher_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
    public function sessionInstances()
{
    return $this->HasMany(SessionInstance::class);
}
}
