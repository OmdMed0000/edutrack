<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlatfromAdmin;
use App\Models\SchoolType;
use App\Models\PlatfromRole;
use App\Models\Account;
use Illuminate\Support\Facades\DB;
use App\Models\SchoolStructureUnit;
use App\Models\Module;
use App\Models\SchoolYear;
use App\Models\StudentPath;
use App\Models\Term;
use App\Models\TimeSlotsMode;
use App\Models\TimeSlotType;
use App\Models\TimeSlot;
use App\Models\SchoolWorkingDay;
use App\Models\Room;
use App\Models\SessionTemplate;
use App\Models\ScheduleVersion;
use App\Models\SessionInstance;
use App\Models\Event;
use App\Models\AppliedEvent;
use App\Models\ClassSession;
use App\Models\SchoolJustificationReason;
use App\Models\Absence;
class School extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolFactory> */
    use HasFactory;

    protected $fillable = ['school_name','school_type_id','created_by','school_key'];

    public function platformAdmin(){
        return $this->belongsTo(PlatfromAdmin::class,'id','id');
    }
    public function schoolType(){
        return $this->belongsTo(SchoolType::class);
    }
    public function roles(){
        return $this->belongsToMany(PlatfromRole::class);
    }
    public function accounts(){
        return $this->HasMany(Account::class,'school_key','school_key');
    }

    public function getUsersAttribute (){
       return DB::table('users')
            ->join('accounts', 'users.user_key', '=', 'accounts.user_key')
            ->where('accounts.school_key', $this->school_key)
            ->select('users.*')
            ->get();
    }

    public function getUsersByRole($roleId){
        return $this->users->where('role_id',$roleId);
    }

    public function school_structure(){
        return $this->hasMany(SchoolStructureUnit::class);
    }
    

    public function groups(){
        return $this->hasMany(Group::class,'school_id');
    }

    public function modules (){
        return $this->hasMany(Module::class,'school_id');
    }

    public function school_years (){
        return $this->hasMany(SchoolYear::class,'school_id');
    }



    public function studentPaths()
    {
        return $this->hasMany(StudentPath::class);
    }

    // Optionally, get all current students in this school
    public function activeStudentPaths()
    {
        return $this->studentPaths()->where('is_active', true);
    }

    public function terms()
    {
        return $this->hasMany(Term::class,'school_id');
    }
    public function workingDays()
    {
        return $this->hasMany(SchoolWorkingDay::class,'school_id');
    }

    public function timeSlotsMoes()
    {
        return $this->hasMany(TimeSlotsMode::class,'school_id');
    }

    public function timeSlotTypes()
{
    return $this->belongsToMany(TimeSlotType::class, 'school_time_slots_types', 'school_id', 'type_id');
}


public function timeSlots()
{
    return $this->hasMany(TimeSlot::class,);
}

public function rooms()
{
    return $this->HasMany(Room::class,);
}

public function sessionTemplates()
{
    return $this->HasMany(SessionTemplate::class,);
}

public function scheduleVersions()
{
    return $this->HasMany(ScheduleVersion::class,);
}

public function sessionInstances()
{
    return $this->HasMany(SessionInstance::class);
}

public function events()
{
    return $this->HasMany(Event::class);
}

public function appliedEvents (){
    return $this->hasMany(AppliedEvent::class,'school_id');
}
public function classSessions (){
    return $this->hasMany(ClassSession::class,'school_id');
}
public function justificationReasons (){
    return $this->hasMany(SchoolJustificationReason::class,'school_id');
}

public function absences (){
    return $this->hasMany(Absence::class,'school_id');
}


}
