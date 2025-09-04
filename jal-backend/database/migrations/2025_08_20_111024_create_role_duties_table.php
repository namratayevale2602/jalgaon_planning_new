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
        Schema::create('role_duties', function (Blueprint $table) {
            $table->id();
            $table->string('position_en');
            $table->string('position_mr');
            $table->json('duties_en'); // Store as JSON array
            $table->json('duties_mr'); // Store as JSON array
            $table->json('authority_en'); // Store as JSON array
            $table->json('authority_mr'); // Store as JSON array
            $table->string('icon')->default('FaUserTie');
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
        Schema::dropIfExists('role_duties');
    }
};
