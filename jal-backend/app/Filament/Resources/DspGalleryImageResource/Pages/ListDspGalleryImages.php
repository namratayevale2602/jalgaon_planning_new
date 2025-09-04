<?php

namespace App\Filament\Resources\DspGalleryImageResource\Pages;

use App\Filament\Resources\DspGalleryImageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDspGalleryImages extends ListRecords
{
    protected static string $resource = DspGalleryImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
