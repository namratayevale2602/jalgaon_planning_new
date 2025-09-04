<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gallery_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('gallery_categories')->onDelete('cascade');
            $table->string('image');
            $table->string('title_en')->nullable();
            $table->string('title_mr')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_mr')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gallery_images');
    }
};