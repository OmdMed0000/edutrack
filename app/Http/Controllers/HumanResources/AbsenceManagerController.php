<?php

namespace App\Http\Controllers\HumanResources;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Account;
use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AbsenceManagerController extends Controller
{
    // Display the list of students belonging to the authenticated user's school
    public function student()
    {
        $school = School::where('school_key', Auth::user()->school_key)->first();
        $userKeys = Account::where('school_key', $school->school_key)->pluck('user_key');

        $users = User::whereIn('user_key', $userKeys)
            ->where('role_id', 4)  // assuming role_id 4 means 'student'
            ->select('id', 'full_name', 'birth_date', 'gender', 'email', 'user_key', 'phone_number')
            ->get();

        return Inertia::render('AbsenceManager/Students', [
            'users' => $users,
        ]);
    }

    // Show form to create a new student
    public function create()
    {
        return Inertia::render('Forms/AddForms/AddStudents/AddOneStudent');
    }
    public function createMore()
    {
        return Inertia::render('Forms/AddForms/AddStudents/ImportStudents');
    }
    // Store a new student in the database
    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'gender' => 'required|in:Male,Female',
            'user_key' => 'required|string|unique:users,user_key',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'phone_number' => 'nullable|string|max:20',
        ]);

        // Create a new User record
        User::create([
            'full_name' => $request->input('full_name'),
            'birth_date' => $request->input('birth_date'),
            'gender' => $request->input('gender'),
            'user_key' => $request->input('user_key'),
            'email' => $request->input('email'),
            'role_id' => 4,  // Student role
            'phone_number' => $request->input('phone_number'),
        ]);

        // Create a corresponding Account record with hashed password
        Account::create([
            'school_key' => Auth::user()->school_key,
            'user_key' => $request->input('user_key'),
            'password' => Hash::make($request->input('password')),
            'original_password' => $request->input('password'), // Store original (maybe for admin use)
        ]);

        return redirect('/students')->with('success', 'User created successfully.');
    }

    // Show details/profile of a specific student
    public function show($user_key)
    {
        $user = User::with('role')->where('user_key', $user_key)->firstOrFail();
        return Inertia::render('AbsenceManager/StudentProfile', [
            'user' => $user,
        ]);
    }

    // Show form to edit a student's information
    public function edit($user_key)
    {
        $user = User::with('role')->where('user_key', $user_key)->firstOrFail();
        $account = Account::where('user_key', $user_key)->firstOrFail();

        return Inertia::render('Forms/EditForms/EditStudent', [
            'user' => $user,
            'account' => $account,
        ]);
    }

    // Update student information
    public function update(Request $request, $user_key)
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'birth_date' => ['required', 'date'],
            'gender' => ['required', Rule::in(['Male', 'Female'])],
            'email' => ['required', 'email', 'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'],
            'password' => ['required', 'string', 'min:8'],
            'phone_number' => ['nullable', 'regex:/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/'],
        ]);

        $user = User::where('user_key', $user_key)->firstOrFail();
        $account = Account::where('user_key', $user_key)->firstOrFail();

        $user->full_name = $validated['full_name'];
        $user->birth_date = $validated['birth_date'];
        $user->gender = $validated['gender'];
        $user->email = $validated['email'];
        $user->phone_number = $validated['phone_number'] ?? null;
        $user->save();

        $account->password = Hash::make($validated['password']);
        $account->original_password = $validated['password'];
        $account->save();

        return redirect('/students')->with('success', 'User updated successfully.');
    }

    // Delete a student and their associated account
    public function destroy($user_key)
    {
        $user = User::where('user_key', $user_key)->first();

        if (!$user) {
            return back()->with('error', 'User not found.');
        }

        Account::where('user_key', $user->user_key)->delete();
        $user->delete();

        return back()->with('success', 'User and associated accounts deleted successfully.');
    }
}
