<?php

namespace App\Filament\Resources\DpcDocumentResource\Pages;

use App\Filament\Resources\DpcDocumentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDpcDocuments extends ListRecords
{
    protected static string $resource = DpcDocumentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
