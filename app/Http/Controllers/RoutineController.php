<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RoutineController extends Controller
{
    public function index()
    {
        return Inertia::render('Routine/AddRoutine');
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $routine = Routine::create($data);
        return Redirect::back();
    }
    public function show()
    {
        // $data = Routine::distinct('day')->pluck('day');
        // uksort($data, 'strnatcasecmp');
        $days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
        $batch = "cse-16";

        $data = [];
        $uniqueStartTime = [];
        foreach ($days as $key => $value) {
            $tmpData = Routine::where(['day' => $value, 'batch' => $batch])->get()->toArray();
            $unique_time = Routine::select('start_time')->distinct()->where(['day' => $value, 'batch' => $batch])->get()->toArray();
            $spreadArr = [];
            foreach ($unique_time as $key => $val) {
                $spreadArr[] = $val['start_time'];
            }
            $data[$value] = $tmpData;
            $uniqueStartTime[$value] = $spreadArr;
        }
        $lengths = array_map('count', $uniqueStartTime);
        $totalColumns = max($lengths);



        // dd($data, $uniqueStartTime, $totalColumns);
        // dd($data);
        // $mpdf = new \Mpdf\Mpdf([
        //     'default_font_size' => 12,

        // ]);
        // $table = $this->pdfHTML($data, $uniqueStartTime, $totalColumns);
        // // dd($table);
        // $mpdf->WriteHTML($table);
        // $mpdf->Output('routines/filename.pdf', "F");

        $routineInfo = Routine::all();
        // // dd($routineInfo);
        return Inertia::render('Routine/ViewRoutine', ['routineInfo' => $routineInfo]);
    }
    public function pdfHTML($data, $uniqueStartTime, $totalColumns)
    {
        $pdfcontent = '<h1>Welcome to etutorialspoint.com</h1>
		<h2>Employee Details</h2>
		<table autosize="1">
		<tr>
        
		<td style="width: 33%"><strong>NAME</strong></td>
		<td style="width: 36%"><strong>ADDRESS</strong></td>
		<td style="width: 30%"><strong>PHONE</strong></td>
		</tr>
		</table>';

        return $pdfcontent;
    }
}
