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
        Schema::create('tourism_spots', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->json('title'); // Stores titles in multiple languages {en: '', mr: ''}
            $table->json('description'); // Stores descriptions in multiple languages
            $table->json('content'); // Stores content arrays in multiple languages
            $table->string('image');
            $table->enum('type', ['religious', 'nature', 'educational', 'commercial']);
            $table->json('stats'); // JSON field for stats {visitors: '', established: '', location: '', area: ''}
            $table->json('development'); // JSON field for development info
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tourism_spots');
    }
};
