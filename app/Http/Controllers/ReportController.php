<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
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
        return Inertia::render('Report/MarksReport', ['courseInfo' => $courseInfo, 'courseTitles' => $courseTitles]);
    }
}
