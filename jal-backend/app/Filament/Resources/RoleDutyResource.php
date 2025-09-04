<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RoleDutyResource\Pages;
use App\Filament\Resources\RoleDutyResource\RelationManagers;
use App\Models\RoleDuty;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RoleDutyResource extends Resource
{
    protected static ?string $model = RoleDuty::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    
    protected static ?string $navigationGroup = 'Functions';
    
    protected static ?string $navigationLabel = 'Role Duties';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('position_en')
                    ->label('Position (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('position_mr')
                    ->label('Position (Marathi)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Repeater::make('duties_en')
                    ->label('Duties (English)')
                    ->schema([
                        Forms\Components\TextInput::make('duty')
                            ->required()
                    ])
                    ->defaultItems(1)
                    ->required(),
                Forms\Components\Repeater::make('duties_mr')
                    ->label('Duties (Marathi)')
                    ->schema([
                        Forms\Components\TextInput::make('duty')
                            ->required()
                    ])
                    ->defaultItems(1)
                    ->required(),
                Forms\Components\Repeater::make('authority_en')
                    ->label('Authority Basis (English)')
                    ->schema([
                        Forms\Components\TextInput::make('authority')
                            ->required()
                    ])
                    ->defaultItems(1),
                Forms\Components\Repeater::make('authority_mr')
                    ->label('Authority Basis (Marathi)')
                    ->schema([
                        Forms\Components\TextInput::make('authority')
                            ->required()
                    ])
                    ->defaultItems(1),
                Forms\Components\Select::make('icon')
                    ->label('Icon')
                    ->options([
                        'FaUserTie' => 'User Tie',
                        'FaFileAlt' => 'File Alt',
                        'FaUserShield' => 'User Shield',
                        'FaChartLine' => 'Chart Line',
                        'FaMoneyBillWave' => 'Money Bill',
                        'FaUserCog' => 'User Cog',
                        'FaCar' => 'Car',
                        'FaUser' => 'User',
                    ])
                    ->default('FaUserTie'),
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
                Tables\Columns\TextColumn::make('position_en')
                    ->label('English Position')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('position_mr')
                    ->label('Marathi Position')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('icon')
                    ->label('Icon')
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
                    ->label('Active Roles')
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
            'index' => Pages\ListRoleDuties::route('/'),
            'create' => Pages\CreateRoleDuty::route('/create'),
            'edit' => Pages\EditRoleDuty::route('/{record}/edit'),
        ];
    }
}