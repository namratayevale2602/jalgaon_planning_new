<?php

namespace App\Filament\Resources\RolewiseWorkResource\Pages;

use App\Filament\Resources\RolewiseWorkResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRolewiseWork extends EditRecord
{
    protected static string $resource = RolewiseWorkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
