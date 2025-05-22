<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Term;
use App\Models\School;
use App\Models\SessionInstance;
class ScheduleVersion extends Model
{
    /** @use HasFactory<\Database\Factories\ScheduleVersionFactory> */
    use HasFactory;
    protected $fillable = [
        'term_id',
        'school_id',
        'name',
        'start_date',
        'end_time',
        'is_current'
    ];

    public function term()
    {
        return $this->belongsTo(Term::class);
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }
    public function sessionInstances()
{
    return $this->HasMany(SessionInstance::class,'version_id');
}

}
