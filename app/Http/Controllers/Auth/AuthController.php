<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use function Symfony\Component\Clock\now;

class AuthController extends Controller
{
    public function showLogin (){
       
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request){
        $request->validate([
            'user_name' => ['required'],
            'password' => ['required']
        ]);

        // Check if the username contains @ (email format)
        if (str_contains($request->user_name, '@')) {
            [$user_key, $school_key] = explode('@', $request->user_name);
        } else {
            // For absence manager format (username.school)
            if (str_contains($request->user_name, '.')) {
                [$user_key, $school_key] = explode('.', $request->user_name);
            } else {
                return back()->withErrors(['credentials' => 'Invalid username format']);
            }
        }

        $account = Account::where('user_key', $user_key)
                    ->where('school_key', $school_key)
                    ->first();

        if(!$account || !Hash::check($request->password, $account->password)) {
            return back()->withErrors(['credentials' => 'Invalid credentials']);
        }

        $account->update([
            'is_active' => true,
            'last_login_at' => now()
        ]);

        Auth::login($account);
        $request->session()->regenerate();

        switch($account->user->role_id){
            case '1': return to_route('admin.dashboard');
            case '2': return to_route('absenceManager.dashboard');
            case '3': return to_route('teacher.dashboard');
            case '4': return to_route('student.dashboard');
            default: return back()->withErrors(['credentials' => 'Invalid role']);
        }
    }

    public function logout(Request $request){
       
          Account::find(Auth::user()->id)->update([
            'is_active'=>false,
            'last_login_at'=>now()
          ]);
          Auth::logout();
          $request->session()->invalidate();
          $request->session()->regenerate();
          return to_route('login');

    }


}
