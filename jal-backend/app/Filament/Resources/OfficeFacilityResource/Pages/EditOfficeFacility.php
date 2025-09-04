<?php

namespace App\Filament\Resources\OfficeFacilityResource\Pages;

use App\Filament\Resources\OfficeFacilityResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOfficeFacility extends EditRecord
{
    protected static string $resource = OfficeFacilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
