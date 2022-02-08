<?php

namespace App\Http\Controllers;

use App\Models\SubmitAssignment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SubmitAssignmentController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();
        $fileName = "assign_" . $data['student_id'] . "." . $data['assignment_file']->extension();
        $file_path = "submit/" . $fileName;
        $test = $data['assignment_file']->move(public_path('submit'), $fileName);
        $data['assignment_file'] = $file_path;
        $user = SubmitAssignment::create($data);
        return Redirect::back();
    }
}
