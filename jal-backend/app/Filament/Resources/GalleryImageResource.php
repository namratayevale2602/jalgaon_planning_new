<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryImageResource\Pages;
use App\Filament\Resources\GalleryImageResource\RelationManagers;
use App\Models\GalleryImage;
use App\Models\GalleryCategory;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GalleryImageResource extends Resource
{
    protected static ?string $model = GalleryImage::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    protected static ?string $navigationGroup = 'Gallery';

    public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Select::make('category_id')
                ->label('Category')
                ->options(GalleryCategory::all()->pluck('title_en', 'id'))
                ->required()
                ->searchable(),
            Forms\Components\FileUpload::make('image')
                ->image()
                ->required()
                ->directory('gallery')
                ->visibility('public')
                ->maxSize(2048)
                ->imageResizeMode('cover')
                ->imageResizeTargetWidth('800')
                ->imageResizeTargetHeight('600')
                ->imagePreviewHeight('200')
                ->helperText('Recommended aspect ratio: 4:3 (800×600)'),
            Forms\Components\TextInput::make('title_en')
                ->label('Title (English)')
                ->maxLength(255)
                ->nullable(), // Made nullable
            Forms\Components\TextInput::make('title_mr')
                ->label('Title (Marathi)')
                ->maxLength(255)
                ->nullable(), // Made nullable
            Forms\Components\Textarea::make('description_en')
                ->label('Description (English)')
                ->rows(3)
                ->nullable(),
            Forms\Components\Textarea::make('description_mr')
                ->label('Description (Marathi)')
                ->rows(3)
                ->nullable(),
            Forms\Components\TextInput::make('order')
                ->numeric()
                ->default(0),
            Forms\Components\Toggle::make('is_active')
                ->required()
                ->default(true),
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
                Tables\Columns\TextColumn::make('category.title_en')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('title_en')
                    ->label('Title (EN)')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('title_mr')
                    ->label('Title (MR)')
                    ->searchable()
                    ->wrap(),
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
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'title_en')
                    ->searchable()
                    ->preload(),
                Tables\Filters\Filter::make('active')
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
            'index' => Pages\ListGalleryImages::route('/'),
            'create' => Pages\CreateGalleryImage::route('/create'),
            'edit' => Pages\EditGalleryImage::route('/{record}/edit'),
        ];
    }
}