<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourismSpotResource\Pages;
use App\Filament\Resources\TourismSpotResource\RelationManagers;
use App\Models\TourismSpot;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TourismSpotResource extends Resource
{
    protected static ?string $model = TourismSpot::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    protected static ?string $navigationGroup = 'Tourism';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required()
                    ->directory('tourism/spots')
                    ->visibility('public')
                    ->maxSize(2048)
                    ->imageResizeMode('cover')
                    ->imageResizeTargetWidth('800')
                    ->imageResizeTargetHeight('600')
                    ->imagePreviewHeight('200'),
                Forms\Components\Select::make('type')
                    ->options([
                        'religious' => 'Religious',
                        'nature' => 'Nature',
                        'educational' => 'Educational',
                        'commercial' => 'Commercial',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('order')
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_active')
                    ->required()
                    ->default(true),
                Forms\Components\Section::make('Title')
                    ->schema([
                        Forms\Components\TextInput::make('title.en')
                            ->label('English Title')
                            ->required(),
                        Forms\Components\TextInput::make('title.mr')
                            ->label('Marathi Title')
                            ->required(),
                    ]),
                Forms\Components\Section::make('Description')
                    ->schema([
                        Forms\Components\Textarea::make('description.en')
                            ->label('English Description')
                            ->required(),
                        Forms\Components\Textarea::make('description.mr')
                            ->label('Marathi Description')
                            ->required(),
                    ]),
                Forms\Components\Section::make('Content')
                    ->schema([
                        Forms\Components\Repeater::make('content.en')
                            ->label('English Content')
                            ->schema([
                                Forms\Components\TextInput::make('item')
                                    ->required(),
                            ]),
                        Forms\Components\Repeater::make('content.mr')
                            ->label('Marathi Content')
                            ->schema([
                                Forms\Components\TextInput::make('item')
                                    ->required(),
                            ]),
                    ]),
                Forms\Components\Section::make('Statistics')
                    ->schema([
                        Forms\Components\TextInput::make('stats.visitors')
                            ->label('Visitors')
                            ->required(),
                        Forms\Components\TextInput::make('stats.established')
                            ->label('Established')
                            ->required(),
                        Forms\Components\TextInput::make('stats.location')
                            ->label('Location')
                            ->required(),
                        Forms\Components\TextInput::make('stats.area')
                            ->label('Area'),
                    ]),
                Forms\Components\Section::make('Development Info')
                    ->schema([
                        Forms\Components\TextInput::make('development.budget')
                            ->label('Budget'),
                        Forms\Components\Repeater::make('development.projects.en')
                            ->label('English Projects')
                            ->schema([
                                Forms\Components\TextInput::make('item')
                                    ->required(),
                            ]),
                        Forms\Components\Repeater::make('development.projects.mr')
                            ->label('Marathi Projects')
                            ->schema([
                                Forms\Components\TextInput::make('item')
                                    ->required(),
                            ]),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->size(100)
                    ->height(60)
                    ->extraImgAttributes(['class' => 'object-cover']),
                Tables\Columns\TextColumn::make('title.en')
                    ->label('Title (EN)')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'religious' => 'success',
                        'nature' => 'primary',
                        'educational' => 'warning',
                        'commercial' => 'danger',
                    }),
                Tables\Columns\TextColumn::make('order')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->label('Active'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\Filter::make('active')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'religious' => 'Religious',
                        'nature' => 'Nature',
                        'educational' => 'Educational',
                        'commercial' => 'Commercial',
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
            ->reorderable('order');
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
            'index' => Pages\ListTourismSpots::route('/'),
            'create' => Pages\CreateTourismSpot::route('/create'),
            'edit' => Pages\EditTourismSpot::route('/{record}/edit'),
        ];
    }
}