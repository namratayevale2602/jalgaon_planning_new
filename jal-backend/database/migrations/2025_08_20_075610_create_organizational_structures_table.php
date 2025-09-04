<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('organizational_structures', function (Blueprint $table) {
            $table->id();
            $table->json('level');
            $table->json('name');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('decision_processes', function (Blueprint $table) {
            $table->id();
            $table->json('work_type');
            $table->json('timeline');
            $table->json('responsible');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('responsibilities', function (Blueprint $table) {
            $table->id();
            $table->json('items');
            $table->string('type'); // 'composition' or 'committees'
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('organizational_structures');
        Schema::dropIfExists('decision_processes');
        Schema::dropIfExists('responsibilities');
    }
};