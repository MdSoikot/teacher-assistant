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
        $subsTeacher = SubstituteTeacher::all();
        //dd($subsTeacher);
        return Inertia::render('SubsTeacher/ViewSubTeacher', ['subsTeacher' => $subsTeacher]);
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $user = SubstituteTeacher::create($data);
        return Redirect::back();
    }
    public function edit($id)
    {
        $res = SubstituteTeacher::where('id', $id)->get()->toArray();
        return Inertia::render('SubsTeacher/EditSubstituteTeacher', ['teacherInfo' => $res[0]]);
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
        $res = SubstituteTeacher::where('id', $id)->update($data);

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
        $res = SubstituteTeacher::where('id', $id)->delete();
        if ($res) {
            return [
                'status' => 'success'
            ];
        } else {
            return ['status' => 'error'];
        }
    }
}
