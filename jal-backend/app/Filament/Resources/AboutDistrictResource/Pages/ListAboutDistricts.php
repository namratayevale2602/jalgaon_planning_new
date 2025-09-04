<?php

namespace App\Filament\Resources\AboutDistrictResource\Pages;

use App\Filament\Resources\AboutDistrictResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAboutDistricts extends ListRecords
{
    protected static string $resource = AboutDistrictResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
