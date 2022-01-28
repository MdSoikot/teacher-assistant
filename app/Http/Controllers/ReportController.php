<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Mark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function marksReportGerneration(Request $request)
    {
        $data = $request->all();
        $finalData = [];
        $basicInfo = $data;
        $marksInfo = Mark::select('student_id', 'ass_mark', 'att_mark', 'ct_mark', 'written_mark')->where($data)->get()->toArray();
        // $sumInv = Mark::select('ass_mark', '(ass_mark + att_mark) as total')->where($data)->get();
        //dd($marksInfo);
        if (is_array($marksInfo)) {
            foreach ($marksInfo as $key => $value) {
                $tmpValue = $value;
                $marks = array_shift($tmpValue);
                $totalSum = array_sum($tmpValue);
                $value['total_mark'] = $totalSum;
                $finalData[] = (object)$value;
            }
        }
        // dd($basicInfo);
        return [
            'basicInfo' => $basicInfo,
            'marksInfo' => $finalData,
        ];
    }
}
