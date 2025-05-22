<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\School;
use App\Models\JustificationReason;
class SchoolJustificationReason extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolJustificationReasonFactory> */
    use HasFactory;
    protected $fillable = ['school_id', 'global_reason_id', 'name', 'custom_note', 'is_active'];

    public function globalReason()
    {
        return $this->belongsTo(JustificationReason::class, 'global_reason_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }
}
