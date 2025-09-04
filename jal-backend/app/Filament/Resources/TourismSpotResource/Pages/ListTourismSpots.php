<?php

namespace App\Filament\Resources\TourismSpotResource\Pages;

use App\Filament\Resources\TourismSpotResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTourismSpots extends ListRecords
{
    protected static string $resource = TourismSpotResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
