<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutDpcResource\Pages;
use App\Filament\Resources\AboutDpcResource\RelationManagers;
use App\Models\AboutDpc;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AboutDpcResource extends Resource
{
    protected static ?string $model = AboutDpc::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Home';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('District Information')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('name_en')
                                    ->required()
                                    ->label('Name (English)')
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('description_en')
                                    ->required()
                                    ->label('Description (English)')
                                    ->columnSpanFull()
                                    ->rows(5),
                                
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('name_mr')
                                    ->required()
                                    ->label('Name (Marathi)')
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('description_mr')
                                    ->required()
                                    ->label('Description (Marathi)')
                                    ->columnSpanFull()
                                    ->rows(5),
                                
                            ]),
                    ])
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('image_path')
                    ->label('District Image')
                    ->image()
                    ->directory('aboutdpc-img')
                    ->visibility('public')
                    ->maxSize(2048) // 2MB max
                    ->imageResizeMode('cover')
                    ->imageResizeTargetWidth('1200')
                    ->imageResizeTargetHeight('800')
                    ->imagePreviewHeight('200')
                    ->helperText('Recommended aspect ratio: 3:2 (1200×800)')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('Image')
                    ->size(100)
                    ->height(60)
                    ->extraImgAttributes(['class' => 'object-cover']),
                Tables\Columns\TextColumn::make('name_en')
                    ->label('Name (English)')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('name_mr')
                    ->label('Name (Marathi)')
                    ->searchable()
                    ->wrap(),
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
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListAboutDpcs::route('/'),
            'create' => Pages\CreateAboutDpc::route('/create'),
            'edit' => Pages\EditAboutDpc::route('/{record}/edit'),
        ];
    }
}
