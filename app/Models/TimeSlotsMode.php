<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\TimeSlot;
class TimeSlotsMode extends Model
{
    /** @use HasFactory<\Database\Factories\TimeSlotsModeFactory> */
    use HasFactory;
    protected $fillable = ['mode_name','school_id','is_active'];

    public function school(){
        return $this->belongsTo(School::class,'school_id');
    }

    public function workingDays()
    {
        return $this->hasMany(SchoolWorkingDay::class,'mode_id');
    }

    public function timeSlots()
{
    return $this->hasMany(TimeSlot::class,);
}

}
