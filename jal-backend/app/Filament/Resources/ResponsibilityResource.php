<?php
// app/Filament/Resources/ResponsibilityResource.php

namespace App\Filament\Resources;

use App\Filament\Resources\ResponsibilityResource\Pages;
use App\Filament\Resources\ResponsibilityResource\RelationManagers;
use App\Models\Responsibility;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ResponsibilityResource extends Resource
{
    protected static ?string $model = Responsibility::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Organizational Structure';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('type')
                    ->options([
                        'composition' => 'Key Responsibilities',
                        'committees' => 'Governing References',
                    ])
                    ->required()
                    ->native(false),
                
                Forms\Components\Repeater::make('items')
                    ->schema([
                        Forms\Components\Tabs::make('Item Content')
                            ->tabs([
                                Forms\Components\Tabs\Tab::make('English')
                                    ->schema([
                                        Forms\Components\Textarea::make('en')
                                            ->required()
                                            ->label('English Content')
                                            ->rows(2),
                                    ]),
                                Forms\Components\Tabs\Tab::make('Marathi')
                                    ->schema([
                                        Forms\Components\Textarea::make('mr')
                                            ->required()
                                            ->label('Marathi Content')
                                            ->rows(2),
                                    ]),
                            ]),
                    ])
                    ->defaultItems(1)
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
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'composition' => 'success',
                        'committees' => 'primary',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'composition' => 'Key Responsibilities',
                        'committees' => 'Governing References',
                        default => $state,
                    }),
                Tables\Columns\TextColumn::make('items_count')
                    ->label('Items Count')
                    ->getStateUsing(function ($record) {
                        $items = $record->items;
                        
                        if (is_string($items)) {
                            return count(json_decode($items, true));
                        }
                        
                        if (is_array($items)) {
                            return count($items);
                        }
                        
                        return 0;
                    }),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_active')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'composition' => 'Key Responsibilities',
                        'committees' => 'Governing References',
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
            'index' => Pages\ListResponsibilities::route('/'),
            'create' => Pages\CreateResponsibility::route('/create'),
            'edit' => Pages\EditResponsibility::route('/{record}/edit'),
        ];
    }
}