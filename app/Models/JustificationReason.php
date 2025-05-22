<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JustificationReason extends Model
{
    /** @use HasFactory<\Database\Factories\JustificationReasonFactory> */
    use HasFactory;
    protected $fillable = ['name', 'reason_type', 'description', 'is_active'];

    public function schoolReasons()
    {
        return $this->hasMany(SchoolJustificationReason::class, 'global_reason_id');
    }
}
