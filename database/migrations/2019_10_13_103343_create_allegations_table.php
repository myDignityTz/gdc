<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllegationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('allegations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('environment');
            $table->nullableMorphs("environment");
            $table->unsignedInteger('type_id')->nullable()->default(null);
            $table->unsignedInteger('category_id')->nullable()->default(null);
            $table->unsignedInteger('reporter_id')->nullable()->default(null);
            $table->unsignedInteger('user_id')->nullable()->default(null);
            $table->unsignedInteger('suspect_id')->nullable()->default(null);
            $table->unsignedInteger('victim_id')->nullable()->default(null);
            $table->text('description')->nullable()->default(null);
            $table->enum('status', ["pending", "closed"])->default("pending");
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
        Schema::dropIfExists('allegations');
    }
}
