<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeSlot extends Model
{
    /** @use HasFactory<\Database\Factories\TimeSlotFactory> */
    use HasFactory;
    protected $fillable = [
        'school_id',
        'mode_id',
        'type_id',
        'is_active',
        'start_date',
       'end_date'
    ];

    public function mode()
    {
        return $this->belongsTo(TimeSlotsMode::class, 'mode_id');
    }

  
    public function type()
    {
        return $this->belongsTo(TimeSlotType::class, 'type_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function sessionInstances()
{
    return $this->HasMany(SessionInstance::class);
}
}
