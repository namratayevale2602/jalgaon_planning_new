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
        Schema::create('rolewise_working', function (Blueprint $table) {
            $table->id();
            $table->json('title'); // Stores multilingual titles {en: '', mr: ''}
            $table->string('file_path'); // Path to the stored PDF file
            $table->json('description'); // Stores multilingual descriptions
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rolewise_working');
    }
};
