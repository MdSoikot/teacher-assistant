<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubmitAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submit_assignments', function (Blueprint $table) {
            $table->id();
            $table->string('course_title')->nullable()->default(null);
            $table->string('course_code')->nullable()->default(null);
            $table->string('assignment_file')->nullable()->default(null);
            $table->string('assignment_topic')->nullable()->default(null);
            $table->string('student_id')->nullable()->default(null);
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
        Schema::dropIfExists('submit_assignments');
    }
}
