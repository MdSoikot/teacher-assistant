<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('department')->nullable()->default(null);
            $table->string('batch')->nullable()->default(null);
            $table->string('section')->nullable()->default(null);
            $table->string('student_name')->nullable()->default(null);
            $table->string('student_id')->nullable()->default(null);
            $table->string('student_email')->nullable()->default(null);
            $table->string('student_phone')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
