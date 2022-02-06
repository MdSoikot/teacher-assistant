<?php

use App\Models\Notice;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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
    $user = Auth::user();
    $notice = Notice::get()->toArray();
    return inertia::render('Dashboard/Dashboard', ['user' => $user, 'notices' => $notice]);
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
Route::delete('users/decline/{id}')
    ->name('decline_user')
    ->uses('App\Http\Controllers\UserController@declineUser')
    ->middleware('auth');

// Manage Courses
Route::get('course')
    ->name('course')
    ->uses('App\Http\Controllers\CourseController@index')
    ->middleware('auth');
Route::post('course/add')
    ->name('add_course')
    ->uses('App\Http\Controllers\CourseController@create')
    ->middleware('auth');
Route::get('course/view')
    ->name('view_course')
    ->uses('App\Http\Controllers\CourseController@show')
    ->middleware('auth');
Route::delete('course/delete/{id}')
    ->name('delete_course')
    ->uses('App\Http\Controllers\CourseController@destroy')
    ->middleware('auth');
Route::get('course/edit/{id}')
    ->name('edit_course_form')
    ->uses('App\Http\Controllers\CourseController@edit')
    ->middleware('auth');
Route::put('course/edit/{id}')
    ->name('edit_course')
    ->uses('App\Http\Controllers\CourseController@update')
    ->middleware('auth');

// Manage Routine
Route::get('routine')
    ->name('routine')
    ->uses('App\Http\Controllers\RoutineController@index')
    ->middleware('auth');
Route::post('routine/add')
    ->name('add_routine')
    ->uses('App\Http\Controllers\RoutineController@create')
    ->middleware('auth');
Route::get('routine/view')
    ->name('view_routine')
    ->uses('App\Http\Controllers\RoutineController@show')
    ->middleware('auth');

Route::delete('routine/delete/{id}')
    ->name('delete_routine')
    ->uses('App\Http\Controllers\RoutineController@destroy')
    ->middleware('auth');
Route::get('routine/edit/{id}')
    ->name('edit_routine_form')
    ->uses('App\Http\Controllers\RoutineController@edit')
    ->middleware('auth');
Route::put('routine/edit/{id}')
    ->name('edit_routine')
    ->uses('App\Http\Controllers\RoutineController@update')
    ->middleware('auth');

// Manage Marks
Route::get('marks')
    ->name('marks')
    ->uses('App\Http\Controllers\MarkController@index')
    ->middleware('auth');
Route::post('marks/add')
    ->name('add_marks')
    ->uses('App\Http\Controllers\MarkController@create')
    ->middleware('auth');
Route::get('marks/view')
    ->name('view_marks')
    ->uses('App\Http\Controllers\MarkController@show')
    ->middleware('auth');

Route::delete('marks/delete/{id}')
    ->name('delete_marks')
    ->uses('App\Http\Controllers\MarkController@destroy')
    ->middleware('auth');
Route::get('marks/edit/{id}')
    ->name('edit_marks_form')
    ->uses('App\Http\Controllers\MarkController@edit')
    ->middleware('auth');
Route::put('marks/edit/{id}')
    ->name('edit_marks')
    ->uses('App\Http\Controllers\MarkController@update')
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

Route::delete('substitute_teacher/delete/{id}')
    ->name('delete_teacher')
    ->uses('App\Http\Controllers\SubstituteTeacherController@destroy')
    ->middleware('auth');
Route::get('substitute_teacher/edit/{id}')
    ->name('edit_teacher_form')
    ->uses('App\Http\Controllers\SubstituteTeacherController@edit')
    ->middleware('auth');
Route::put('substitute_teacher/edit/{id}')
    ->name('edit_teacher')
    ->uses('App\Http\Controllers\SubstituteTeacherController@update')
    ->middleware('auth');

//Manage Report

Route::get('static_report_form')
    ->name('show_static_report_form')
    ->uses('App\Http\Controllers\reportController@showStaticReportForm')
    ->middleware('auth');
Route::get('dynamic_report_form')
    ->name('show_dynamic_report_form')
    ->uses('App\Http\Controllers\reportController@showDynamicReportForm')
    ->middleware('auth');

Route::get('verify_email/{email}')
    ->name('verify_email')
    ->uses('App\Http\Controllers\Auth\RegisterController@verifyEmail');


// Manage Student
Route::get('student')
    ->name('student')
    ->uses('App\Http\Controllers\StudentController@index')
    ->middleware('auth');
Route::post('student/add')
    ->name('add_student')
    ->uses('App\Http\Controllers\StudentController@create')
    ->middleware('auth');
Route::get('student/view')
    ->name('view_student')
    ->uses('App\Http\Controllers\StudentController@show')
    ->middleware('auth');

Route::delete('student/delete/{id}')
    ->name('delete_student')
    ->uses('App\Http\Controllers\StudentController@destroy')
    ->middleware('auth');
Route::get('student/edit/{id}')
    ->name('edit_student_form')
    ->uses('App\Http\Controllers\StudentController@edit')
    ->middleware('auth');
Route::put('student/edit/{id}')
    ->name('edit_student')
    ->uses('App\Http\Controllers\StudentController@update')
    ->middleware('auth');
//Manage Assignment
Route::get('assignment')
    ->name('assignment')
    ->uses('App\Http\Controllers\AssignmentController@index')
    ->middleware('auth');
Route::get('assignment/submit')
    ->name('sub_assignment')
    ->uses('App\Http\Controllers\AssignmentController@showSubmitAssignment')
    ->middleware('auth');
Route::post('assignment/add')
    ->name('add_assignment')
    ->uses('App\Http\Controllers\AssignmentController@create')
    ->middleware('auth');
Route::get('assignment/view')
    ->name('view_assignment')
    ->uses('App\Http\Controllers\AssignmentController@show')
    ->middleware('auth');

Route::delete('assignment/delete/{id}')
    ->name('delete_assignment')
    ->uses('App\Http\Controllers\AssignmentController@destroy')
    ->middleware('auth');
Route::get('assignment/edit/{id}')
    ->name('edit_assignment_form')
    ->uses('App\Http\Controllers\AssignmentController@edit')
    ->middleware('auth');
Route::put('assignment/edit/{id}')
    ->name('edit_assignment')
    ->uses('App\Http\Controllers\AssignmentController@update')
    ->middleware('auth');

//Manage Report
Route::get('report/marks')
    ->name('marks_report')
    ->uses('App\Http\Controllers\ReportController@viewMarksReportForm')
    ->middleware('auth');
Route::get('report/studentsList')
    ->name('studentlist_report')
    ->uses('App\Http\Controllers\ReportController@viewStudentReportForm')
    ->middleware('auth');
Route::get('report/routine')
    ->name('routine_report')
    ->uses('App\Http\Controllers\ReportController@viewRoutineReportForm')
    ->middleware('auth');
Route::post('report/marks/generation')
    ->name('marks_report_generator')
    ->uses('App\Http\Controllers\ReportController@marksReportGerneration')
    ->middleware('auth');
Route::post('report/studentlist/generation')
    ->name('studentlist_report_generator')
    ->uses('App\Http\Controllers\ReportController@studentsReportGerneration')
    ->middleware('auth');
Route::get('report/routine/generation')
    ->name('routine_report_generator')
    ->uses('App\Http\Controllers\ReportController@routineReportGerneration')
    ->middleware('auth');

//Manage Notice
Route::get('notice')
    ->name('notice')
    ->uses('App\Http\Controllers\NoticeController@index')
    ->middleware('auth');
Route::post('notice/add')
    ->name('add_notice')
    ->uses('App\Http\Controllers\NoticeController@create')
    ->middleware('auth');
