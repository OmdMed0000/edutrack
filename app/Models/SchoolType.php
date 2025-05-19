<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;

class SchoolType extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolTypeFactory> */
    use HasFactory;
    protected $fillable = ['school_type'];

    public function schools(){
        return $this->hasMany(School::class);
    }
}
