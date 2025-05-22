<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SchoolStructureUnits;

class StructureUnit extends Model
{
    /** @use HasFactory<\Database\Factories\StructureUnitFactory> */
    use HasFactory;
    protected $fillable = [
        'unit_name'
    ];

    public function school_structure_units () {
        return $this->hasMany(SchoolStructureUnit::class);
    }
    
}
