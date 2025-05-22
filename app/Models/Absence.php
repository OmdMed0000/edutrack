<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absence extends Model
{
    /** @use HasFactory<\Database\Factories\AbsenceFactory> */
    use HasFactory;
    protected $fillable = [
        'school_id',
        'student_id',
        'session_id',
        'term_id',
        'justification_id',
        'type',
        'is_justified',
    ];

    public function school (){
        return $this->belongsTo(School::class);
    }
    public function term (){
        return $this->belongsTo(Term::class,'term_id');
    }

    public function student (){
        return $this->belongsTo(Account::class,'student_id');
    }
    public function session (){
        return $this->belongsTo(ClassSession::class,'session_id');
    }
    public function justification (){
        return $this->belongsTo(AbsenceJustification::class,'justification_id');
    }


}
