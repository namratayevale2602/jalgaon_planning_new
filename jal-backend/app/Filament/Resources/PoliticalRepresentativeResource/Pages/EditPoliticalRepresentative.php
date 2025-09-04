<?php

namespace App\Filament\Resources\PoliticalRepresentativeResource\Pages;

use App\Filament\Resources\PoliticalRepresentativeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPoliticalRepresentative extends EditRecord
{
    protected static string $resource = PoliticalRepresentativeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
