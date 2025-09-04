<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('key_responsibilities', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_mr');
            $table->text('description_en');
            $table->text('description_mr');
            $table->json('details_en'); // Store as JSON array
            $table->json('details_mr'); // Store as JSON array
            $table->string('icon')->default('FaFileAlt'); // Icon name
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('key_responsibilities');
    }
};