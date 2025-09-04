<?php

namespace App\Filament\Resources\DspGalleryImageResource\Pages;

use App\Filament\Resources\DspGalleryImageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDspGalleryImage extends EditRecord
{
    protected static string $resource = DspGalleryImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
