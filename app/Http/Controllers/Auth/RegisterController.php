<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\EmailValidation;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
    protected function validator(array $data)
    {
        $valided =
            Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:3'],
            ]);
        return $valided;
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        function getStudentId($data)
        {
            if (array_key_exists('studentId', $data)) {
                return $data['studentId'];
            } else {
                return NULL;
            }
        }
        function getTeacherId($data)
        {
            if (array_key_exists('teacherId', $data)) {
                return $data['teacherId'];
            } else {
                return NULL;
            }
        }
        $imageName = time() . '.' . $data['photo']->extension();
        $photo_path = "images/" . $imageName;
        //dd($photo_path);
        $test = $data['photo']->move(public_path('images'), $imageName);
        //dd($test);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'role' => $data['role'],
            'studentId' => getStudentId($data),
            'teacherId' => getTeacherId($data),
            'photo_path' => $photo_path,
            'status' => null
        ]);
        $userEmail = $data['email'];
        $test = Mail::to($userEmail)->send(new EmailValidation($userEmail, $data['name']));
        // dd($test);
        return $user;
    }
    public function showSignUpForm()
    {
        return Inertia::render('Auth/Signup');
    }

    public function verifyEmail($email)
    {
        $pending = User::where('email', $email)->update(['status' => 0]);
        return Inertia::render('Auth/Login');
    }
}
