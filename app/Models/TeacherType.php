<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherType extends Model
{
    /** @use HasFactory<\Database\Factories\TeacherTypeFactory> */
    use HasFactory;
    protected $fillable = ['teacher_type'];

    public function accounts(){
        return $this->HasMany(Account::class);
    }
}
