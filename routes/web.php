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

Route::get('login')
    ->name('login')
    ->uses('Auth\LoginController@showLoginForm')
    ->middleware('guest');

    
Route::get('/', function () {
    return inertia::render('Home');
});
