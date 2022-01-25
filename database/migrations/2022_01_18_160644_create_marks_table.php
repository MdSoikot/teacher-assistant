<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->string('course_title')->nullable()->default(null);
            $table->string('course_code')->nullable()->default(null);
            $table->string('department')->nullable()->default(null);
            $table->string('batch')->nullable()->default(null);
            $table->string('session')->nullable()->default(null);
            $table->string('student_id')->nullable()->default(null);
            $table->string('term')->nullable()->default(null);
            $table->float('ct_mark', 5, 2)->nullable()->default(null);
            $table->float('att_mark', 5, 2)->nullable()->default(null);
            $table->float('ass_mark', 5, 2)->nullable()->default(null);
            $table->float('written_mark', 5, 2)->nullable()->default(null);
            // $table->longText('marks')->nullable()->default(null);
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
        Schema::dropIfExists('marks_controllers');
    }
}
