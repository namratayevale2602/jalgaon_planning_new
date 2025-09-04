<?php

namespace App\Filament\Resources\RoleDutyResource\Pages;

use App\Filament\Resources\RoleDutyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRoleDuty extends EditRecord
{
    protected static string $resource = RoleDutyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
