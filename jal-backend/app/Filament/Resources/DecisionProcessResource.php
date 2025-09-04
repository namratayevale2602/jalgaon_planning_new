<?php
// app/Filament/Resources/DecisionProcessResource.php

namespace App\Filament\Resources;

use App\Filament\Resources\DecisionProcessResource\Pages;
use App\Filament\Resources\DecisionProcessResource\RelationManagers;
use App\Models\DecisionProcess;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DecisionProcessResource extends Resource
{
    protected static ?string $model = DecisionProcess::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';
    protected static ?string $navigationGroup = 'Organizational Structure';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Process Information')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\Textarea::make('work_type.en')
                                    ->required()
                                    ->label('Work Type (English)')
                                    ->rows(3),
                                Forms\Components\TextInput::make('timeline.en')
                                    ->required()
                                    ->label('Timeline (English)')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('responsible.en')
                                    ->required()
                                    ->label('Responsible (English)')
                                    ->maxLength(255),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\Textarea::make('work_type.mr')
                                    ->required()
                                    ->label('Work Type (Marathi)')
                                    ->rows(3),
                                Forms\Components\TextInput::make('timeline.mr')
                                    ->required()
                                    ->label('Timeline (Marathi)')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('responsible.mr')
                                    ->required()
                                    ->label('Responsible (Marathi)')
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
                Tables\Columns\TextColumn::make('work_type.en')
                    ->label('Work Type (EN)')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('timeline.en')
                    ->label('Timeline')
                    ->searchable(),
                Tables\Columns\TextColumn::make('responsible.en')
                    ->label('Responsible')
                    ->searchable(),
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
            'index' => Pages\ListDecisionProcesses::route('/'),
            'create' => Pages\CreateDecisionProcess::route('/create'),
            'edit' => Pages\EditDecisionProcess::route('/{record}/edit'),
        ];
    }
}