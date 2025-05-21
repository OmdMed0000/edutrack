<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RedirectTo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
      
        
        
        if (Auth::check()) {
            $account =  $user = Auth::user();
            $user = $account->user;

            if ($user->hasRole('Admin')) {
                return to_route('admin.dashboard');
            }

            if ($user->hasRole('Teacher')) {
                return to_route('teacher.dashboard');
            }

            if ($user->hasRole('Student')) {
                return to_route('student.dashboard');
            }
            if ($user->hasRole('Absence Manager')) {
                return to_route('absenceManager.dashboard');
            }

            // fallback
     
        }
        return $next($request);
    }
}
   
