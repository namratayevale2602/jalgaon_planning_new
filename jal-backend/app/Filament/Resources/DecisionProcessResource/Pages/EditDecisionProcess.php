<?php

namespace App\Filament\Resources\DecisionProcessResource\Pages;

use App\Filament\Resources\DecisionProcessResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDecisionProcess extends EditRecord
{
    protected static string $resource = DecisionProcessResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
