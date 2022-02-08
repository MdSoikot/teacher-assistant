<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmitAssignment extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_title',
        'course_code',
        'assignment_file',
        'assignment_topic',
        'student_id'
    ];
}
