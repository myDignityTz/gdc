<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllegationStakeholderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('allegation_stakeholder', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("allegation_id")->nullable();
            $table->unsignedBigInteger("stakeholder_id")->nullable();
            $table->enum("status", ["pending", "current", "closed", "spam"])->nullable()->default("pending");
            $table->timestamp("forwarded_at")->nullable()->default(null);
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
        Schema::dropIfExists('allegation_stakeholder');
    }
}
