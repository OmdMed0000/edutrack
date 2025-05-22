<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\WeekDay;
use App\Models\TimeSlotsMode;
class SchoolWorkingDay extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolWorkingDayFactory> */
    use HasFactory;
    protected $fillable = [
        'school_id',
        'day_id',
        'mode_id',
        'note'
    ];

    public function school()
    {
        return $this->belongsTo(School::class,'school_id');
    }

    public function day()
    {
        return $this->belongsTo(WeekDay::class, 'day_id');
    }

    public function mode()
    {
        return $this->belongsTo(TimeSlotsMode::class, 'mode_id');
    }
}
