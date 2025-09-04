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
       Schema::create('rti_officers', function (Blueprint $table) {
            $table->id();
            $table->string('name_en');
            $table->string('name_mr');
            $table->string('designation_en');
            $table->string('designation_mr');
            $table->string('jurisdiction_en');
            $table->string('jurisdiction_mr');
            $table->string('address_en');
            $table->string('address_mr');
            $table->string('phone');
            $table->string('email');
            $table->enum('officer_type', [
                'public_information',
                'assistant_public_information', 
                'appellate_authority'
            ]);
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
        Schema::dropIfExists('rti_officers');
    }
};
