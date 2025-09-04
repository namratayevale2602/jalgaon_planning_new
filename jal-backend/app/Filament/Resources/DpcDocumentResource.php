<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DpcDocumentResource\Pages;
use App\Filament\Resources\DpcDocumentResource\RelationManagers;
use App\Models\DpcDocument;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Storage;

class DpcDocumentResource extends Resource
{
    protected static ?string $model = DpcDocument::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Organizational Structure';

    protected static ?string $navigationLabel = 'DPC Document';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name_en')
                    ->label('Name (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('name_mr')
                    ->label('Name (Marathi)')
                    ->required()
                    ->maxLength(255),
                    
                Forms\Components\Toggle::make('is_url')
                    ->label('Use URL instead of file upload')
                    ->reactive()
                    ->default(true),
                    
                Forms\Components\TextInput::make('url')
                    ->label('Document URL')
                    ->maxLength(500)
                    ->url()
                    ->hidden(fn (Forms\Get $get) => !$get('is_url'))
                    ->required(fn (Forms\Get $get) => $get('is_url')),
                    
                Forms\Components\FileUpload::make('file_path')
                    ->label('Document File')
                    ->acceptedFileTypes(['application/pdf'])
                    ->directory('dpc-documents')
                    ->visibility('public')
                    ->maxSize(5120) // 5MB
                    ->hidden(fn (Forms\Get $get) => $get('is_url'))
                    ->required(fn (Forms\Get $get) => !$get('is_url'))
                    ->helperText('Upload PDF file (max: 5MB)'),
                    
                Forms\Components\TextInput::make('sort_order')
                    ->label('Sort Order')
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name_en')
                    ->label('English Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name_mr')
                    ->label('Marathi Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('url')
                    ->label('URL/File')
                    ->formatStateUsing(function ($record) {
                        if ($record->file_path) {
                            return 'Uploaded File: ' . basename($record->file_path);
                        }
                        return $record->url;
                    })
                    ->searchable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_active')
                    ->label('Active Documents')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make()
                    ->before(function ($record, Tables\Actions\DeleteAction $action) {
                        // Delete the associated file when the record is deleted
                        if ($record->file_path && Storage::exists($record->file_path)) {
                            Storage::delete($record->file_path);
                        }
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make()
                        ->before(function ($records, Tables\Actions\DeleteBulkAction $action) {
                            // Delete all associated files before bulk deletion
                            foreach ($records as $record) {
                                if ($record->file_path && Storage::exists($record->file_path)) {
                                    Storage::delete($record->file_path);
                                }
                            }
                        }),
                ]),
            ])
            ->defaultSort('sort_order', 'asc');
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
            'index' => Pages\ListDpcDocuments::route('/'),
            'create' => Pages\CreateDpcDocument::route('/create'),
            'edit' => Pages\EditDpcDocument::route('/{record}/edit'),
        ];
    }
}