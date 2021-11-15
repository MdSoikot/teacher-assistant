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
    ->uses('App\Http\Controllers\Auth\RegisterController@showSignUpForm')
    ->middleware('guest');

Route::post('signup')
    ->name('signup.submit')
    ->uses('App\Http\Controllers\Auth\RegisterController@register')
    ->middleware('guest');

Route::get('login')
    ->name('login')
    ->uses('App\Http\Controllers\Auth\LoginController@showLoginForm')
    ->middleware('guest');

Route::get('/', function () {
    return inertia::render('Home');
});
