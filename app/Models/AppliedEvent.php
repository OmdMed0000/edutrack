<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\Event;
class AppliedEvent extends Model
{
    /** @use HasFactory<\Database\Factories\AppliedEventFactory> */
    use HasFactory;
    protected $fillable = [
        'applied_on_id',
        'school_id',
        'event_id',
       'start_date',
       'end_date',
       'start_time',
       'end_time',
       'is_recurring',
       'is_active',
    ];

    public function school(){
        return $this->belongsTo(School::class);
    }
    public function event(){
        return $this->belongsTo(Event::class);
    }
}
