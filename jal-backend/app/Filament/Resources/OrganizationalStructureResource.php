<?php
// app/Filament/Resources/OrganizationalStructureResource.php

namespace App\Filament\Resources;

use App\Filament\Resources\OrganizationalStructureResource\Pages;
use App\Filament\Resources\OrganizationalStructureResource\RelationManagers;
use App\Models\OrganizationalStructure;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrganizationalStructureResource extends Resource
{
    protected static ?string $model = OrganizationalStructure::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $navigationGroup = 'Organizational Structure';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Structure Information')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('level.en')
                                    ->required()
                                    ->label('Level (English)')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('name.en')
                                    ->required()
                                    ->label('Name (English)')
                                    ->maxLength(255),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('level.mr')
                                    ->required()
                                    ->label('Level (Marathi)')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('name.mr')
                                    ->required()
                                    ->label('Name (Marathi)')
                                    ->maxLength(255),
                            ]),
                    ])
                    ->columnSpanFull(),
                
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
                Tables\Columns\TextColumn::make('level.en')
                    ->label('Level (EN)')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name.en')
                    ->label('Name (EN)')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_active')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListOrganizationalStructures::route('/'),
            'create' => Pages\CreateOrganizationalStructure::route('/create'),
            'edit' => Pages\EditOrganizationalStructure::route('/{record}/edit'),
        ];
    }
}