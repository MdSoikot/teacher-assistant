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
})->middleware('auth');

//profile

Route::get('profile')
    ->name('profile')
    ->uses('App\Http\Controllers\UserController@index')
    ->middleware('auth');
Route::put('profile/update/{id}')
    ->name('profile_update')
    ->uses('App\Http\Controllers\UserController@update')
    ->middleware('auth');
//manageuser
Route::get('users/pending')
    ->name('pending_user')
    ->uses('App\Http\Controllers\UserController@getPendingUser')
    ->middleware('auth');
Route::get('users/approved')
    ->name('approved_user')
    ->uses('App\Http\Controllers\UserController@getApprovedUser')
    ->middleware('auth');
Route::put('users/approved_user/{id}')
    ->name('accept_user')
    ->uses('App\Http\Controllers\UserController@approvedUser')
    ->middleware('auth');
Route::put('users/decline/{id}')
    ->name('decline_user')
    ->uses('App\Http\Controllers\UserController@declineUser')
    ->middleware('auth');

// Manage Courses
Route::get('course')
    ->name('course')
    ->uses('App\Http\Controllers\CourseController@index')
    ->middleware('auth');
Route::get('course/add')
    ->name('add_course')
    ->uses('App\Http\Controllers\CourseController@create')
    ->middleware('auth');
Route::get('course/view')
    ->name('view_course')
    ->uses('App\Http\Controllers\CourseController@show')
    ->middleware('auth');
//Manage Substitue Teacher
Route::get('substitute_teacher')
    ->name('substitute_teacher')
    ->uses('App\Http\Controllers\SubstituteTeacherController@index')
    ->middleware('auth');
Route::post('substitute_teacher/add')
    ->name('add_substitute_teacher')
    ->uses('App\Http\Controllers\SubstituteTeacherController@create')
    ->middleware('auth');
Route::get('substitute_teacher/view')
    ->name('view_substitute_teacher')
    ->uses('App\Http\Controllers\SubstituteTeacherController@show')
    ->middleware('auth');
