<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OfficeFacilityResource\Pages;
use App\Filament\Resources\OfficeFacilityResource\RelationManagers;
use App\Models\OfficeFacility;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OfficeFacilityResource extends Resource
{
    protected static ?string $model = OfficeFacility::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office';
    
    protected static ?string $navigationGroup = 'RTI Management';
    
    protected static ?string $navigationLabel = 'Office Facilities';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('facility_en')
                    ->label('Facility (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('facility_mr')
                    ->label('Facility (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('time_en')
                    ->label('Time (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('time_mr')
                    ->label('Time (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('process_en')
                    ->label('Process (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('process_mr')
                    ->label('Process (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('location_en')
                    ->label('Location (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('location_mr')
                    ->label('Location (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('responsible_en')
                    ->label('Responsible (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('responsible_mr')
                    ->label('Responsible (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('grievance_en')
                    ->label('Grievance (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('grievance_mr')
                    ->label('Grievance (Marathi)')
                    ->required()
                    ->maxLength(255),
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
                Tables\Columns\TextColumn::make('facility_en')
                    ->label('English Facility')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('facility_mr')
                    ->label('Marathi Facility')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('time_en')
                    ->label('English Time')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
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
                    ->label('Active Facilities')
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
            'index' => Pages\ListOfficeFacilities::route('/'),
            'create' => Pages\CreateOfficeFacility::route('/create'),
            'edit' => Pages\EditOfficeFacility::route('/{record}/edit'),
        ];
    }
}