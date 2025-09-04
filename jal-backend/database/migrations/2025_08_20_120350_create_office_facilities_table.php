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
        Schema::create('office_facilities', function (Blueprint $table) {
            $table->id();
            $table->string('facility_en');
            $table->string('facility_mr');
            $table->string('time_en');
            $table->string('time_mr');
            $table->string('process_en');
            $table->string('process_mr');
            $table->string('location_en');
            $table->string('location_mr');
            $table->string('responsible_en');
            $table->string('responsible_mr');
            $table->string('grievance_en');
            $table->string('grievance_mr');
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
        Schema::dropIfExists('office_facilities');
    }
};
