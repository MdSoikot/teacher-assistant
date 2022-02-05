<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Mark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MarkController extends Controller
{
    public function index()
    {
        $courses = Course::all()->toArray();
        $courseInfo = [];
        $courseTitles = [];
        foreach ($courses as $key => $val) {
            $courseInfo[] = [
                'course_title' => $val['course_title'],
                'course_code' => $val['course_code']
            ];
            $courseTitles[] = [
                'label' => $val['course_title'],
                'value' => $val['course_title']
            ];
        }
        return Inertia::render('Marks/AddMarks', ['courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
    }
    public function show()
    {
        $marks = Mark::all()->toArray();
        // dd($marks);
        return Inertia::render('Marks/ViewMarks', ['marks' => $marks]);
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $data['marks'] = json_encode($data['marks']);
        //dd($data);
        $user = Mark::create($data);
        return Redirect::back();
    }


    public function edit($id)
    {
        $courses = Course::all()->toArray();
        $courseInfo = [];
        $courseTitles = [];
        foreach ($courses as $key => $val) {
            $courseInfo[] = [
                'course_title' => $val['course_title'],
                'course_code' => $val['course_code']
            ];
            $courseTitles[] = [
                'label' => $val['course_title'],
                'value' => $val['course_title']
            ];
        }
        $res = Mark::where('id', $id)->get()->toArray();
        return Inertia::render('Marks/EditMarks', ['marksInfo' => $res[0], 'courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
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
        $data = $request->all();
        $res = Mark::where('id', $id)->update($data);

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
        $res = Mark::where('id', $id)->delete();
        if ($res) {
            return [
                'status' => 'success'
            ];
        } else {
            return ['status' => 'error'];
        }
    }
}
