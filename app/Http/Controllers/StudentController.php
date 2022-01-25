<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        return Inertia::render('Student/AddStudent');
    }
    public function show()
    {
        $students = Student::all();
        return Inertia::render('Student/ViewStudent', ['students' => $students]);
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $user = Student::create($data);
        return Redirect::back();
    }
}
