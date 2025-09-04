<?php

namespace App\Filament\Resources\RTIOfficerResource\Pages;

use App\Filament\Resources\RTIOfficerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRTIOfficers extends ListRecords
{
    protected static string $resource = RTIOfficerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
