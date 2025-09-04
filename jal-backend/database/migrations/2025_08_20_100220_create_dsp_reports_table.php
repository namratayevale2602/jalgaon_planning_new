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
        Schema::create('dsp_reports', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_mr');
            $table->string('url')->nullable(); // Make nullable for file uploads
            $table->string('file_path')->nullable(); // Add file path field
            $table->boolean('is_url')->default(true); // Add flag to distinguish URL vs file
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
        Schema::dropIfExists('dsp_reports');
    }
};
