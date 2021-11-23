<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('signup')
    ->name('signup')
    ->uses('App\Http\Controllers\Auth\RegisterController@showSignUpForm');


Route::post('signup')
    ->name('signup.submit')
    ->uses('App\Http\Controllers\Auth\RegisterController@register')
    ->middleware('guest');

Route::get('login')
    ->name('login')
    ->uses('App\Http\Controllers\Auth\LoginController@showLoginForm')
    ->middleware('guest');

Route::post('/login')
    ->name('login.attempt')
    ->uses('App\Http\Controllers\Auth\LoginController@login')
    ->middleware('guest');

Route::post('/logout')
    ->name('logout')
    ->uses('App\Http\Controllers\Auth\LoginController@logout');

Route::get('/', function () {
    return inertia::render('Auth/Login');
});
Route::get('/dashboard', function () {
    return inertia::render('Dashboard/Dashboard');
});
