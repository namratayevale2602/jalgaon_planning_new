<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('political_representatives', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_mr');
            $table->text('designation_en')->nullable();
            $table->text('designation_mr')->nullable();
            $table->string('matdarsangh_en');
            $table->string('matdarsangh_mr');
            $table->string('image_path')->nullable();
            $table->string('category');
            $table->string('subcategory')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('political_representatives');
    }
};
