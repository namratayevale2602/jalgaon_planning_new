<?php

namespace App\Filament\Resources\TimeBoundActivityResource\Pages;

use App\Filament\Resources\TimeBoundActivityResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTimeBoundActivities extends ListRecords
{
    protected static string $resource = TimeBoundActivityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
