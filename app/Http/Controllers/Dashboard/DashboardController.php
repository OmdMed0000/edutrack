<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function adminDashboard (){
        $school = School::where('school_key',Auth::user()->school_key)->get()->first();
        $absenceManagersNumber = $school->getUsersByRole(2)->count();
        $teachersNumber = $school->getUsersByRole(3)->count();
        $studentsNumber = $school->getUsersByRole(4)->count();
       
        $cardsInfo = [
                ["label" =>'Absence Managers', "type"=>'absenceManagers', "total"=> $absenceManagersNumber,  ],
                ["label" => 'Teachers', "type"=> 'teachers', "total"=> $teachersNumber,  ],
                ["label" => 'Students', "type"=> 'students', "total"=> $studentsNumber,  ],
                ["label" => 'Absence', "type"=> 'absence', "total"=> 0,  ],
                ["label" => 'Filieres', "type"=> 'filieres', "total"=> 0,  ],
                ["label" => 'Groups', "type"=> 'groups', "total"=> 0,  ],
                ["label" => 'Rooms', "type"=> 'rooms', "total"=> 0,  ],
                ["label" => 'Schedules', "type"=> 'schedules', "total"=> 0  ],  
        ];

        return Inertia::render('admin/Dashboard',[
            'cardsInfo'=>$cardsInfo
        ]);
    }

    public function absenceManagerDashboard () { 
        $school = School::where('school_key',Auth::user()->school_key)->get()->first();
     
        $studentsNumber = $school->getUsersByRole(4)->count();
        
        $cardsInfo = [
            ["label" => 'Students', "type"=> 'students', "total"=> $studentsNumber],
            ["label" => 'Groups', "type"=> 'groups', "total"=> 0] ,
            ["label" => 'Absence', "type"=> 'absence', "total"=> 0],
            ["label" => 'Late', "type"=> 'late', "total"=> 0],
            ["label" => 'Liste Absence', "type"=> 'listeAbsence', "total"=> 0],
            ["label" => 'Yesterdays Absence', "type"=> 'yesterdaysAbsence', "total"=> 0] ,
            ["label" => 'Schedules', "type"=> 'schedules', "total"=> 0 ],
            ["label" => 'Pending Requests', "type"=> 'pendingRequests', "total"=> 0],  
        ];
        
        return Inertia::render('AbsenceManager/Dashboard',[
            'cardsInfo' => $cardsInfo
        ]);
    }


    public function teacherDashboard () { 
        return Inertia::render('Teacher/Dashboard');
    }

    public function studentDashboard () { 
        return Inertia::render('Student/Dashboard');
    }
}
