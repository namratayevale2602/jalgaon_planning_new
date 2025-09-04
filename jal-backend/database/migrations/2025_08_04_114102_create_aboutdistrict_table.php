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
        Schema::create('aboutdistricts', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_mr');
            $table->text('description_en');
            $table->text('description_mr');
            $table->string('image_path')->nullable();
            $table->json('stats_en')->nullable(); // Stores stats in English
            $table->json('stats_mr')->nullable(); // Stores stats in Marathi
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aboutdistrict');
    }
};
