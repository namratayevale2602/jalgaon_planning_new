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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->json('title'); // For multilingual titles
            $table->json('description'); // For multilingual descriptions
            $table->string('file_path')->nullable(); // Path to the stored file
            $table->string('file_url')->nullable(); // External URL if needed
            $table->string('file_type')->default('PDF');
            $table->boolean('is_external')->default(false); // Whether to use file_url instead of file_path
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
