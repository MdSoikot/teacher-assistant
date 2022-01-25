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
        $marks = Mark::all();
        return Inertia::render('Marks/ViewMarks', ['marks' => $marks]);
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $data['marks'] = json_encode($data['marks']);
        // dd($data);
        $user = Mark::create($data);
        return Redirect::back();
    }
}
