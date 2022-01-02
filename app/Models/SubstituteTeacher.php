<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubstituteTeacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'department',
        'phone',
        'teacher_id',
        'office_room_no',
        'designation',
    ];
}
