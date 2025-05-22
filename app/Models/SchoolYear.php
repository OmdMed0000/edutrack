<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\StudentPath;
use App\Models\Term;
class SchoolYear extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolYearFactory> */
    use HasFactory;
    protected $fillable = [
       'school_id',
        'name',
        'start_date',
        'end_date',
        'is_active'
    ];

    public function school (){
        return $this->belongsTo(School::class,'school_id');
    }

    public function studentPaths()
{
    return $this->hasMany(StudentPath::class);
}
public function activeStudentPaths()
{
    return $this->hasMany(StudentPath::class)->where('is_active', true);
}

public function terms()
{
    return $this->hasMany(Term::class,'school_year_id');
}
}
