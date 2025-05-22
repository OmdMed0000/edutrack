<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Absence;
use App\Models\School;
use App\Models\Term;
use App\Models\SchoolJustificationReason;

class AbsenceJustification extends Model
{
    /** @use HasFactory<\Database\Factories\AbsenceJustificationFactory> */
    use HasFactory;
    protected $fillable = [
        'school_id','term_id','justification_reason_id','justification_date'
    ];

    public function school(){
        return $this->belongsTo(School::class,'school_id');
    }
    public function term(){
        return $this->belongsTo(Term::class,'term_id');
    }
    public function justificationReason(){
        return $this->belongsTo(SchoolJustificationReason::class,'justification_reason_id');
    }
    public function absences (){
        return $this->hasMany(Absence::class,'justification_id');
    }
}

