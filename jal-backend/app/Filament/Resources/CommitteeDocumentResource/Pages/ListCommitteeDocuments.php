<?php

namespace App\Filament\Resources\CommitteeDocumentResource\Pages;

use App\Filament\Resources\CommitteeDocumentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCommitteeDocuments extends ListRecords
{
    protected static string $resource = CommitteeDocumentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
