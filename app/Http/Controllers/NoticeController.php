<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function index()
    {
        return Inertia::render('Notice/AddNotice');
    }
    public function create(Request $request)
    {
        $data = $request->all();
        $user = Notice::create($data);
        return Redirect::back();
    }
}
