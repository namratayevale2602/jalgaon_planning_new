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
        Schema::create('staff_members', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_mr');
            $table->string('designation_en');
            $table->string('designation_mr');
            $table->string('phone');
            $table->string('email');
            $table->json('responsibilities_en'); // Store as JSON array
            $table->json('responsibilities_mr'); // Store as JSON array
            $table->string('photo')->nullable(); // For staff photo
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
        Schema::dropIfExists('staff_members');
    }
};
