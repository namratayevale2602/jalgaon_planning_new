<?php

namespace App\Filament\Resources\DecisionProcessResource\Pages;

use App\Filament\Resources\DecisionProcessResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDecisionProcesses extends ListRecords
{
    protected static string $resource = DecisionProcessResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
