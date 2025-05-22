<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PathStatusType extends Model
{
    /** @use HasFactory<\Database\Factories\PathStatusTypeFactory> */
    use HasFactory;

    protected $fillable = ['status_type'];

    public function studentPaths()
{
    return $this->hasMany(StudentPath::class, 'path_status_id');
}
}
