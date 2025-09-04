<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RTIOfficerResource\Pages;
use App\Filament\Resources\RTIOfficerResource\RelationManagers;
use App\Models\RTIOfficer;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RTIOfficerResource extends Resource
{
    protected static ?string $model = RTIOfficer::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-circle';
    
    protected static ?string $navigationGroup = 'RTI Management';
    
    protected static ?string $navigationLabel = 'RTI Officers';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('officer_type')
                    ->label('Officer Type')
                    ->options([
                        'public_information' => 'Public Information Officer',
                        'assistant_public_information' => 'Assistant Public Information Officer',
                        'appellate_authority' => 'Appellate Authority',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('name_en')
                    ->label('Name (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('name_mr')
                    ->label('Name (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('designation_en')
                    ->label('Designation (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('designation_mr')
                    ->label('Designation (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('jurisdiction_en')
                    ->label('Jurisdiction (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('jurisdiction_mr')
                    ->label('Jurisdiction (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('address_en')
                    ->label('Address (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('address_mr')
                    ->label('Address (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('phone')
                    ->label('Phone Number')
                    ->required()
                    ->tel()
                    ->maxLength(20),
                Forms\Components\TextInput::make('email')
                    ->label('Email')
                    ->required()
                    ->email()
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
                Tables\Columns\TextColumn::make('officer_type')
                    ->label('Type')
                    ->formatStateUsing(fn ($state) => match($state) {
                        'public_information' => 'Public Information',
                        'assistant_public_information' => 'Asst. Public Information',
                        'appellate_authority' => 'Appellate Authority',
                        default => $state
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('name_en')
                    ->label('English Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name_mr')
                    ->label('Marathi Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('designation_en')
                    ->label('English Designation')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('phone')
                    ->label('Phone')
                    ->searchable(),
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
                    ->label('Active Officers')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
                Tables\Filters\SelectFilter::make('officer_type')
                    ->label('Officer Type')
                    ->options([
                        'public_information' => 'Public Information Officer',
                        'assistant_public_information' => 'Assistant Public Information Officer',
                        'appellate_authority' => 'Appellate Authority',
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
            'index' => Pages\ListRTIOfficers::route('/'),
            'create' => Pages\CreateRTIOfficer::route('/create'),
            'edit' => Pages\EditRTIOfficer::route('/{record}/edit'),
        ];
    }
}