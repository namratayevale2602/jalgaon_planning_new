<?php

namespace App\Filament\Resources\TourismGalleryImageResource\Pages;

use App\Filament\Resources\TourismGalleryImageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTourismGalleryImages extends ListRecords
{
    protected static string $resource = TourismGalleryImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
