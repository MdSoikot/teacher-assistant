<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AssignmentController extends Controller
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
        // $studentInfo = Student::select('student_id', 'student_name')->get()->toArray();
        return Inertia::render('Assignment/AddAssignment', ['courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
    }
    public function create(Request $request)
    {
        $data = $request->all();
        // dd($data);
        // $data['marks'] = json_encode($data['marks']);
        // //dd($data);
        $user = Assignment::create($data);
        return Redirect::back();
    }
}
