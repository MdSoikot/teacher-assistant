<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Mark;
use App\Models\Routine;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function viewMarksReportForm()
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
    public function viewStudentReportForm()
    {
        return Inertia::render('Report/StudentListReport');
    }
    public function viewRoutineReportForm()
    {
        // $path = public_path() . '/sample.pdf';
        // dd($path);
        return Inertia::render('Report/RoutineReport');
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
    public function studentsReportGerneration(Request $request)
    {
        $data = $request->all();
        $finalData = [];
        $basicInfo = $data;
        $studentsInfo = Student::select('student_id', 'student_name', 'student_email', 'student_phone', 'section')->where($data)->get()->toArray();
        if (is_array($studentsInfo)) {
            foreach ($studentsInfo as $key => $value) {
                $finalData[] = (object)$value;
            }
        }
        return [
            'basicInfo' => $basicInfo,
            'studentsInfo' => $finalData,
        ];
    }
    public function routineReportGerneration()
    {
        $days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

        $data = [];
        $schedule = [];
        $uniqueStartTime = [];
        $finalUniqueTime = [];
        foreach ($days as $key => $value) {
            $tmpData = Routine::where(['day' => $value])->get()->toArray();
            $unique_time = Routine::select('start_time')->distinct()->where(['day' => $value])->get()->toArray();
            $spreadArr = [];
            foreach ($unique_time as $key => $val) {
                $spreadArr[] = $val['start_time'];
            }
            $data[$value] = $tmpData;
            $uniqueStartTime[$value] = $spreadArr;
            $finalUniqueTime = array_unique(array_merge($finalUniqueTime, $spreadArr));
        }
        foreach ($days as $key => $value) {
            foreach ($finalUniqueTime as $keyTmp => $valTmp) {
                $test = Routine::select('course_title', 'start_time', 'end_time', 'batch', 'room_no', 'building')->where(['day' => $value, 'start_time' => $valTmp])->get()->toArray();
                if (is_array($test)) {
                    $schedule[$value][$valTmp] = $test;
                }
            }
        }
        $lengths = array_map('count', $uniqueStartTime);
        $totalColumns = max($lengths);
        // dd($schedule);
        $routInfo = Routine::select('day', 'course_title', 'start_time', 'end_time', 'batch', 'room_no', 'building')->get()->toArray();
        return [
            'routineInfo' => $routInfo,
        ];
    }
}
