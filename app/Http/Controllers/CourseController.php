<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Course/AddCourse');
    }
    public function showEditCourseForm($id)
    {
        $res = Course::where('id', $id)->get()->toArray();
        return Inertia::render('Course/EditCourse', ['courseInfo' => $res[0]]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // dd($request->all());
        $data = $request->all();
        $fileName = "outline_" . $data['course_title'] . "." . $data['course_outline']->extension();
        $file_path = "outline/" . $fileName;
        $test = $data['course_outline']->move(public_path('outline'), $fileName);
        $data['course_outline'] = $file_path;
        //dd($data);

        $user = Course::create($data);
        return Redirect::back();

        //create course after submit 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //view course table
        $courses = Course::all();
        return Inertia::render('Course/ViewCourse', ['courses' => $courses]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course, $id)
    {
        $res = Course::where('id', $id)->get()->toArray();
        return Inertia::render('Course/EditCourse', ['courseInfo' => $res[0]]);
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
        $res = Course::where('id', $id)->update($data);

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
    public function destroy(Course $course, $id)
    {
        $res = Course::where('id', $id)->delete();
        if ($res) {
            return [
                'status' => 'success'
            ];
        } else {
            return ['status' => 'error'];
        }
    }
    public function getPath()
    {
        $path = public_path() . '/sample.pdf';
        dd($path);
        return $path;
    }
}
