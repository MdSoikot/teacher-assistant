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


    public function edit($id)
    {
        $res = Routine::where('id', $id)->get()->toArray();
        return Inertia::render('Routine/EditRoutine', ['routineInfo' => $res[0]]);
    }

    public function update(Request $request, $id)
    {
        // dd($request->all(), $id);
        $data = $request->all();
        $res = Routine::where('id', $id)->update($data);

        if ($res) {
            return ['status' => 'success'];
        } else {
            return ['status' => 'error'];
        }
        // return back();
    }


    public function destroy($id)
    {
        $res = Routine::where('id', $id)->delete();
        if ($res) {
            return [
                'status' => 'success'
            ];
        } else {
            return ['status' => 'error'];
        }
    }
}
