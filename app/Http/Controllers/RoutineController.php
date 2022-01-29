<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RoutineController extends Controller
{
    public function index()
    {
        return Inertia::render('Routine/AddRoutine');
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $routine = Routine::create($data);
        return Redirect::back();
    }
    public function show()
    {
        $routineInfo = Routine::all();
        return Inertia::render('Routine/ViewRoutine', ['routineInfo' => $routineInfo]);
    }
}
