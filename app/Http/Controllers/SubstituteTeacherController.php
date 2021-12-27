<?php

namespace App\Http\Controllers;

use App\Models\SubstituteTeacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SubstituteTeacherController extends Controller
{
    public function index()
    {
        return Inertia::render('SubsTeacher/SubstituteTeacher');
    }
    public function show()
    {
        return Inertia::render('SubsTeacher/ViewSubTeacher');
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $user = SubstituteTeacher::create($data);
        return Redirect::back();
    }
}
