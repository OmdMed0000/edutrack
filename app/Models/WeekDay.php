<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SchoolWorkingDay;
use App\Models\SessionInstance;
class WeekDay extends Model
{
    /** @use HasFactory<\Database\Factories\WeekDayFactory> */
    use HasFactory;
    protected $fillable = [
        'day_name',
        'short_name',
        'is_weekend'
    ];

    public function schoolWorkingDays()
    {
        return $this->hasMany(SchoolWorkingDay::class, 'day_id');
    }

    public function sessionInstances()
{
    return $this->HasMany(SessionInstance::class,'day_id');
}

}
