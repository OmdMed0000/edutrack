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
        // If user is not authenticated, allow access to login page
        if (!Auth::check()) {
            return $next($request);
        }

        // If user is authenticated, redirect to appropriate dashboard
        $account = Auth::user();
        $user = $account->user;

        // If accessing login page while authenticated, redirect to dashboard
        if ($request->routeIs('login') || $request->routeIs('home')) {
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
        }

        return $next($request);
    }
}
   
