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
        Schema::create('time_bound_activities', function (Blueprint $table) {
            $table->id();
            $table->string('activity_en');
            $table->string('activity_mr');
            $table->string('timeframe_en');
            $table->string('timeframe_mr');
            $table->string('responsible_en');
            $table->string('responsible_mr');
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
        Schema::dropIfExists('time_bound_activities');
    }
};
