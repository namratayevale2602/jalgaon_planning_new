<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('committee_documents', function (Blueprint $table) {
            $table->id();
            $table->json('title'); // Stores multilingual titles {en: '', mr: ''}
            $table->string('type'); // act, structure, rules, etc.
            $table->string('file_path'); // Path to the stored PDF file
            $table->date('updated_date');
            $table->json('description'); // Stores multilingual descriptions
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('committee_documents');
    }
};