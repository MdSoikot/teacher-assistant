<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        return Inertia::render('Student/AddStudent');
    }
    public function show()
    {
        $students = [];
        //dd($subsTeacher);
        return Inertia::render('Student/ViewStudent', ['students' => $students]);
    }
}
