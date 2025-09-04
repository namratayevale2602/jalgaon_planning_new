<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_mr');
            $table->string('slug')->unique();
            $table->text('excerpt_en');
            $table->text('excerpt_mr');
            $table->text('content_en');
            $table->text('content_mr');
            $table->date('date');
            $table->string('category_en');
            $table->string('category_mr');
            $table->json('tags')->nullable();
            $table->string('author');
            $table->string('image');
            $table->boolean('is_published')->default(true);
            $table->integer('views')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};