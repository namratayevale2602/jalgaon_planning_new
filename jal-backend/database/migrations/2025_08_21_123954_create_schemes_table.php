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
        Schema::create('schemes', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->json('name'); // {en: 'English name', mr: 'Marathi name'}
            $table->json('description'); // {en: '...', mr: '...'}
            $table->json('details'); // {en: ['detail1', 'detail2'], mr: ['...']}
            $table->string('image_path');
            $table->json('documents')->nullable(); // {en: {title: '...', items: [{name: '...', url: '...'}]}, mr: {...}}
            $table->integer('category_id');
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schemes');
    }
};
