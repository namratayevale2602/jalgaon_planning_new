<?php
// app/Filament/Resources/UsefulLinkResource.php

namespace App\Filament\Resources;

use App\Filament\Resources\UsefulLinkResource\Pages;
use App\Filament\Resources\UsefulLinkResource\RelationManagers;
use App\Models\UsefulLink;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UsefulLinkResource extends Resource
{
    protected static ?string $model = UsefulLink::class;

    protected static ?string $navigationIcon = 'heroicon-o-link';

    protected static ?string $navigationGroup = 'Home';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title_en')
                    ->label('Title (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title_mr')
                    ->label('Title (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('icon')
                    ->options([
                        'FileText' => 'File Text',
                        'Users' => 'Users',
                        'Award' => 'Award',
                        'Landmark' => 'Landmark',
                        'FileSearch' => 'File Search',
                        'Home' => 'Home',
                        'Scale' => 'Scale',
                    ])
                    ->required(),
                Forms\Components\Textarea::make('description_en')
                    ->label('Description (English)')
                    ->required(),
                Forms\Components\Textarea::make('description_mr')
                    ->label('Description (Marathi)')
                    ->required(),
                Forms\Components\TextInput::make('link')
                    ->label('URL')
                    ->url()
                    ->required()
                    ->maxLength(500),
                Forms\Components\TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title_en')
                    ->label('Title (EN)')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('title_mr')
                    ->label('Title (MR)')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('icon'),
                Tables\Columns\TextColumn::make('link')
                    ->label('URL')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_active')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true))
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListUsefulLinks::route('/'),
            'create' => Pages\CreateUsefulLink::route('/create'),
            'edit' => Pages\EditUsefulLink::route('/{record}/edit'),
        ];
    }
}