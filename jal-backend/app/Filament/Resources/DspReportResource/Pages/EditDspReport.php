<?php

namespace App\Filament\Resources\DspReportResource\Pages;

use App\Filament\Resources\DspReportResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDspReport extends EditRecord
{
    protected static string $resource = DspReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
