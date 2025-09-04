<?php

namespace App\Filament\Resources\AboutDpcResource\Pages;

use App\Filament\Resources\AboutDpcResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAboutDpc extends EditRecord
{
    protected static string $resource = AboutDpcResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
