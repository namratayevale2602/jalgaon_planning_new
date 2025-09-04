<?php

namespace App\Filament\Resources\PoliticalRepresentativeResource\Pages;

use App\Filament\Resources\PoliticalRepresentativeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPoliticalRepresentatives extends ListRecords
{
    protected static string $resource = PoliticalRepresentativeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
