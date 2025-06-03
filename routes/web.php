<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\HumanResources\HumanResourcesController;
use App\Http\Controllers\HumanResources\AbsenceManagerController;
use App\Http\Middleware\Authenticate;
use App\Http\Middleware\CheckRole;
use App\Http\Middleware\RedirectTo;
use Illuminate\Support\Facades\Route;

// Public routes - no middleware
Route::middleware([RedirectTo::class])->group(function (){
    Route::get('/', [AuthController::class, 'showLogin'])->name('home');
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});

// Protected routes by role
Route::middleware([Authenticate::class, CheckRole::class.':Admin'])->group(function() {
    Route::get('/admin', [DashboardController::class , 'adminDashboard'])->name('admin.dashboard');
    Route::inertia('/profile', 'admin/Profile')->name('admin.profile');
    
    // Human Resources Routes
    Route::get('/humanResources', [HumanResourcesController::class, 'index'])->name('admin.humanResources');
    Route::get('/humanResources/absenceManagers', [HumanResourcesController::class, 'absenceManager'])->name('admin.humanResources.absenceManager');
    Route::get('/humanResources/teachers', [HumanResourcesController::class, 'teacher'])->name('admin.humanResources.teacher');

    Route::get('/humanResources/create/{role?}', [HumanResourcesController::class, 'create'])->name('admin.humanResources.create');
    Route::post('/humanResources', [HumanResourcesController::class, 'store'])->name('admin.humanResources.store');
    Route::get('/humanResources/{user_key}/edit', [HumanResourcesController::class, 'edit'])->name('admin.humanResources.edit');
    Route::put('/humanResources/{user_key}', [HumanResourcesController::class, 'update'])->name('admin.humanResources.update');
    Route::delete('/humanResources/{user_key}/destroy', [HumanResourcesController::class, 'destroy'])->name('admin.humanResources.destroy');
    
    Route::inertia('/configuration', 'admin/Indexes/Configuration')->name('configuration');
    Route::inertia('/schoolResources', 'admin/Indexes/SchoolRessources')->name('schoolResources');
    Route::inertia('/archive', 'admin/Indexes/History')->name('archive');
});

Route::middleware([Authenticate::class, CheckRole::class . ':Absence Manager'])->group(function () {

    Route::get('/absenceManager', [DashboardController::class, 'absenceManagerDashBoard'])->name('absenceManager.dashboard');

    Route::get('/students', [AbsenceManagerController::class, 'student'])->name('students');
    Route::get('/students/addStudent', [AbsenceManagerController::class, 'create'])->name('students.create');
    Route::get('/students/addStudent/more', [AbsenceManagerController::class, 'createMore'])->name('students.create');
    Route::post('/students', [AbsenceManagerController::class, 'store'])->name('students.store');

    Route::prefix('students')->name('students.')->group(function () {
        Route::get('{user_key}/edit', [AbsenceManagerController::class, 'edit'])->name('editStudent');
        Route::put('{user_key}', [AbsenceManagerController::class, 'update'])->name('updateStudent');
        Route::get('{user_key}', [AbsenceManagerController::class, 'show'])->name('showStudent');
        Route::delete('{user_key}', [AbsenceManagerController::class, 'destroy'])->name('destroy');
    });

    Route::get('/justification', [DashboardController::class, 'absenceManagerDashBoard'])->name('justification');
    Route::get('/absence/lists', [DashboardController::class, 'absenceManagerDashBoard'])->name('absence.lists');
    Route::get('/schedules/lists', [DashboardController::class, 'absenceManagerDashBoard'])->name('schedules.lists');
});

Route::middleware([Authenticate::class, CheckRole::class.':Teacher'])->group(function() {
    Route::inertia('/teacher', 'Teacher/Dashboard')->name('teacher.dashboard');
    Route::inertia('/takeAbsence', 'Teacher/Dashboard')->name('teacher.dashboard');
    Route::inertia('/updateAbsence', 'Teacher/Dashboard')->name('teacher.dashboard');
    Route::inertia('/schedule/archive/teachers/{id}', 'Teacher/Dashboard')->name('schedule.archive');
    Route::inertia('/progress/teachers/{id}', 'Teacher/Dashboard')->name('progress');
});

Route::middleware([Authenticate::class, CheckRole::class.':Student'])->group(function() {
    Route::inertia('/student', 'Student/Dashboard')->name('student.dashboard');
    Route::inertia('/student/profile', 'Student/Dashboard')->name('student.profile');
    Route::inertia('/student/absence/history/{id}', 'Student/Dashboard')->name('student.absence.history');
    Route::inertia('/student/courses', 'Student/Dashboard')->name('student.courses');
});

// Shared authenticated routes (like logout)
Route::middleware([Authenticate::class])->group(function() {
    Route::get('/logout', [AuthController::class, 'logout']);
});

