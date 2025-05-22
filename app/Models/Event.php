<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\AppliedEvent;
class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'event_name','applied_on','is_blocking','school_id','description'
    ];

    public function school(){
        return $this->belongsTo(School::class);
    }
    public function appliedEvents (){
        return $this->hasMany(AppliedEvent::class,'event_id');
    }
}
