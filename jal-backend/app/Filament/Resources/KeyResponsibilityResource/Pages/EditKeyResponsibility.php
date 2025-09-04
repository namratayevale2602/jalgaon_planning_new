<?php

namespace App\Filament\Resources\KeyResponsibilityResource\Pages;

use App\Filament\Resources\KeyResponsibilityResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKeyResponsibility extends EditRecord
{
    protected static string $resource = KeyResponsibilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
