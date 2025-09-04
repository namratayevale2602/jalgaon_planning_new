<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommitteeDocumentResource\Pages;
use App\Filament\Resources\CommitteeDocumentResource\RelationManagers;
use App\Models\CommitteeDocument;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DatePicker;

class CommitteeDocumentResource extends Resource
{
    protected static ?string $model = CommitteeDocument::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Committee Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Document Details')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('title.en')
                                    ->label('Title (English)')
                                    ->required(),
                                Forms\Components\Textarea::make('description.en')
                                    ->label('Description (English)')
                                    ->required(),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('title.mr')
                                    ->label('शीर्षक (मराठी)')
                                    ->required(),
                                Forms\Components\Textarea::make('description.mr')
                                    ->label('वर्णन (मराठी)')
                                    ->required(),
                            ]),
                    ]),
                Forms\Components\Select::make('type')
                    ->options([
                        'act' => 'Act',
                        'structure' => 'Structure Chart',
                        'rules' => 'Rules',
                        'other' => 'Other',
                    ])
                    ->required(),
                FileUpload::make('file_path')
                    ->label('PDF Document')
                    ->acceptedFileTypes(['application/pdf'])
                    ->directory('committee-documents')
                    ->required()
                    ->downloadable()
                    ->preserveFilenames(),
                DatePicker::make('updated_date')
                    ->label('Updated Date')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title.en')
                    ->label('Title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'act' => 'success',
                        'structure' => 'info',
                        'rules' => 'warning',
                        default => 'gray',
                    }),
                Tables\Columns\TextColumn::make('updated_date')
                    ->date()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'act' => 'Act',
                        'structure' => 'Structure Chart',
                        'rules' => 'Rules',
                        'other' => 'Other',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCommitteeDocuments::route('/'),
            'create' => Pages\CreateCommitteeDocument::route('/create'),
            'edit' => Pages\EditCommitteeDocument::route('/{record}/edit'),
        ];
    }
}