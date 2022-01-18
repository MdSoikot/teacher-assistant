<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
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
                'course_title' => $val['course_title'],
            ];
        }
        dd($courseInfo);
        return Inertia::render('Marks/AddMarks', ['courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
    }
}
