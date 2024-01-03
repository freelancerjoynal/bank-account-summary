<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountInformationsTable extends Migration
{
    public function up()
    {
        Schema::create('account_informations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('account_holder');
            $table->decimal('credits', 20, 2);
            $table->decimal('debits', 20, 2);
            $table->timestamps();

            // Define the foreign key relationship with cascade on update and delete
            $table->foreign('account_holder')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade') // cascade on delete
                  ->onUpdate('cascade'); // cascade on update
        });
    }

    public function down()
    {
        Schema::dropIfExists('account_informations');
    }
}
