<?php

namespace App\Filament\Resources\RoleDutyResource\Pages;

use App\Filament\Resources\RoleDutyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRoleDuties extends ListRecords
{
    protected static string $resource = RoleDutyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
