<?php

namespace App\Http\Controllers\Auth;
use Inertia\Inertia;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }
}
