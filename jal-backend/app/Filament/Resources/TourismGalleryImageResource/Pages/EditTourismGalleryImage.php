<?php

namespace App\Filament\Resources\TourismGalleryImageResource\Pages;

use App\Filament\Resources\TourismGalleryImageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTourismGalleryImage extends EditRecord
{
    protected static string $resource = TourismGalleryImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
