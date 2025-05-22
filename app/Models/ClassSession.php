<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\SessionInstance;
use App\Models\Absence;
class ClassSession extends Model
{
    /** @use HasFactory<\Database\Factories\ClassSessionFactory> */
    use HasFactory;
    protected $fillable =[
        'school_id','session_instance_id','session_date'
    ];
    public function school(){
        return $this->belongsTo(School::class);
    }
    public function sessionInstance(){
        return $this->belongsTo(SessionInstance::class,'session_instance_id');
    }
    public function absences(){
        return $this->hasMany(Absence::class,'session_id');
    }

}
