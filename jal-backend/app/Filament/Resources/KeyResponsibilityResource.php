<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KeyResponsibilityResource\Pages;
use App\Filament\Resources\KeyResponsibilityResource\RelationManagers;
use App\Models\KeyResponsibility;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class KeyResponsibilityResource extends Resource
{
    protected static ?string $model = KeyResponsibility::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-list';
    
    protected static ?string $navigationGroup = 'Functions';
    
    protected static ?string $navigationLabel = 'Key Responsibilities';

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
                Forms\Components\Textarea::make('description_en')
                    ->label('Description (English)')
                    ->required()
                    ->rows(3),
                Forms\Components\Textarea::make('description_mr')
                    ->label('Description (Marathi)')
                    ->required()
                    ->rows(3),
                Forms\Components\Repeater::make('details_en')
                ->label('Details (English)')
                ->schema([
                    Forms\Components\TextInput::make('detail')
                        ->required()
                ])
                ->defaultItems(1)
                ->required()
                ->createItemButtonLabel('Add Detail')
                ->reorderable(true)
                ->collapsible(),
                
            Forms\Components\Repeater::make('details_mr')
                ->label('Details (Marathi)')
                ->schema([
                    Forms\Components\TextInput::make('detail')
                        ->required()
                ])
                ->defaultItems(1)
                ->required()
                ->createItemButtonLabel('Add Detail')
                ->reorderable(true)
                ->collapsible(),
                Forms\Components\Select::make('icon')
                    ->label('Icon')
                    ->options([
                        'FaFileAlt' => 'Document Icon',
                        'FaCheckCircle' => 'Check Circle',
                        'FaUsersCog' => 'Users Cog',
                        'FaCog' => 'Cog',
                        'FaTasks' => 'Tasks',
                        'FaClipboardList' => 'Clipboard List',
                    ])
                    ->default('FaFileAlt'),
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
                Tables\Columns\TextColumn::make('title_en')
                    ->label('English Title')
                    ->searchable()
                    ->sortable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('title_mr')
                    ->label('Marathi Title')
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
                    ->label('Active Responsibilities')
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
            'index' => Pages\ListKeyResponsibilities::route('/'),
            'create' => Pages\CreateKeyResponsibility::route('/create'),
            'edit' => Pages\EditKeyResponsibility::route('/{record}/edit'),
        ];
    }
}