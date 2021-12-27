<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = Auth::user()->id;
        $user = User::where('id', $userId)->first();
        return Inertia::render('Users/Profile', [
            'userInfo' => $user
        ]);
    }
    public function getPendingUser()
    {
        $pendingUsers = User::where('status', 0)->get();
        //dd($pendingUsers);
        return Inertia::render('Users/PendingUsers', [
            'pendingUsers' => $pendingUsers
        ]);
    }
    public function getApprovedUser()
    {
        $approvedUsers = User::where('status', 1)->get();
        return Inertia::render('Users/ApprovedUsers', [
            'approvedUsers' => $approvedUsers
        ]);
    }

    public function approvedUser(Request $request)
    {
        dd($request->all());
    }
    public function declineUser(Request $request)
    {
        dd($request->all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //dd($request['role']);
        $photo_path = $request['photo'];
        //dd($photo_path);
        if (!is_null($photo_path) && !str_contains($photo_path, "images/")) {
            $imageName = time() . '.' . $request['photo']->extension();
            $photo_path = "images/" . $imageName;
            $test = $request['photo']->move(public_path('images'), $imageName);
        }
        $data = [
            'name' => $request['name'],
            'role' => $request['role'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'studentId' => $request['studentId'],
            'teacherId' => $request['teacherId'],
            'batch' => $request['batch'],
            'department' => $request['department'],
            'photo_path' => $photo_path,
        ];
        User::where('id', $id)->update($data);
        return Redirect::back()->with('success', 'User updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
