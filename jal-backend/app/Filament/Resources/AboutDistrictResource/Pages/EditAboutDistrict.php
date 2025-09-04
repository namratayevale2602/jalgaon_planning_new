<?php

namespace App\Filament\Resources\AboutDistrictResource\Pages;

use App\Filament\Resources\AboutDistrictResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAboutDistrict extends EditRecord
{
    protected static string $resource = AboutDistrictResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
