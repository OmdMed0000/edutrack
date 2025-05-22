<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionInstance extends Model
{
    /** @use HasFactory<\Database\Factories\SessionInstanceFactory> */
    use HasFactory;

    protected $fillable = [
        'term_id',
        'version_id',
        'replaced_session_id',
        'school_id',
        'session_template_id',
        'start_date',
        'end_time',
        'day_id',
        'status',
        'is_temporary',
        'time_slot_id'
    ];

    public function term()
    {
        return $this->belongsTo(Term::class);
    }

    public function replacedSession()
    {
        return $this->belongsTo(SessionInstance::class, 'replaced_session_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function sessionTemplate()
    {
        return $this->belongsTo(SessionTemplate::class);
    }

    public function day()
    {
        return $this->belongsTo(WeekDay::class, 'day_id');
    }

    public function timeSlot()
    {
        return $this->belongsTo(TimeSlot::class);
    }
    public function version()
    {
        return $this->belongsTo(ScheduleVersion::class,'version_id');
    }

    public function classSessions(){
        return $this->hasMany(ClassSession::class,'session_instance_id');
    }

}
