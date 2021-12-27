<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable()->default(null);
            $table->string('password')->nullable();
            $table->string('department')->nullable()->default(null);
            $table->string('studentId')->nullable()->default(null);
            $table->string('teacherId')->nullable()->default(null);
            $table->string('photo_path', 100)->nullable()->default(null);
            $table->enum('role', ['admin', 'teacher', 'student'])->default(null);
            $table->string('remember_token', 100)->nullable()->default(null);
            $table->string('two_fa_login_secret', 100)->nullable()->default(null);
            $table->string('two_fa_status_secret', 100)->nullable()->default(null);
            $table->string('two_fa_status', 100)->nullable()->default(null);
            $table->timestamp('two_fa_secret_expired')->nullable()->default(null);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
