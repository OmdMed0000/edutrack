<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Term;
class TermType extends Model
{
    /** @use HasFactory<\Database\Factories\TermTypeFactory> */
    use HasFactory;
    protected $fillable = ['term_type'];

    public function terms()
    {
        return $this->hasMany(Term::class,'term_type_id');
    }

 
}
