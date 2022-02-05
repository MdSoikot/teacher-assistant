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


    public function edit($id)
    {
        $res = Student::where('id', $id)->get()->toArray();
        return Inertia::render('Student/EditStudent', ['studentInfo' => $res[0]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request->all(), $id);
        $data = $request->all();
        $res = Student::where('id', $id)->update($data);

        if ($res) {
            return ['status' => 'success'];
        } else {
            return ['status' => 'error'];
        }
        // return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = Student::where('id', $id)->delete();
        if ($res) {
            return [
                'status' => 'success'
            ];
        } else {
            return ['status' => 'error'];
        }
    }
}
