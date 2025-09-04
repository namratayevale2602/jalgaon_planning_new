<?php

namespace App\Filament\Resources\DspReportResource\Pages;

use App\Filament\Resources\DspReportResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDspReports extends ListRecords
{
    protected static string $resource = DspReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
