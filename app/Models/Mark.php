<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_title',
        'course_code',
        'department',
        'batch',
        'session',
        'student_id',
        'term',
        'ct_mark',
        'ass_mark',
        'att_mark',
        'written_mark'
    ];
}
