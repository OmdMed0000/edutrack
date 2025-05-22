<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\SchoolStructureInstance;
use App\Models\Teach;
class Module extends Model
{
    /** @use HasFactory<\Database\Factories\ModuleFactory> */
    use HasFactory;
    protected $fillable = [
        'module_name',
        'MH',
        'module_file',
        'option_id',
        'school_id'
    ];

    public function school()
    {
        return $this->belongsTo(School::class,'school_id');
    }

    public function option()
    {
        return $this->belongsTo(SchoolStructureInstance::class,'option_id');
    }

    public function teaches()
{
    return $this->hasMany(Teach::class);
}

}
