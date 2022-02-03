<?php

namespace App\Http\Controllers;

use App\Mail\SendAssignment;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
    public function showSubmitAssignment()
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
        return Inertia::render('Assignment/SubmitAssignment', ['courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $desc = $data['assignment_desc'];
        $date = $data['submit_date'];
        $student_id = $data['student_id'];
        $email = Student::select('student_email')->where('student_id', $student_id)->get()->toArray()[0]['student_email'];
        // dd($desc, $date, $email);
        $user = Assignment::create($data);
        $test = Mail::to($email)->send(new SendAssignment($email, $desc, $date));
        // dd($test);
        return Redirect::back();
    }
    public function show()
    {
        $assignments = Assignment::all();
        return Inertia::render('Assignment/ViewAssignment', ['assignments' => $assignments]);
    }
}
