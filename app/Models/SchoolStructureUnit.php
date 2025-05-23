<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\School;
use App\Models\StructureUnit;
use App\Models\Module;

class SchoolStructureUnit extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolStructureUnitsFactory> */
    use HasFactory;
    protected $fillable = [
      'order', 'school_id','unit_id','parent_id'
    ];

    public function school (){
        return $this->belongsTo(School::class,'school_id');
    }

    public function unit (){
        return $this->belongsTo(StructureUnit::class,'unit_id');
    }

    public function parent_structure_unit (){
        return $this->belongsTo($this::class, 'parent_id');
    }
    public function children_structure_units()
    {
        return $this->hasMany($this::class, 'parent_id');
    }

    public function modules (){
        return $this->hasMany(Module::class,'option_id');
    }

 
}

