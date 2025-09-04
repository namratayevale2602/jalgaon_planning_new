<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DspGalleryImageResource\Pages;
use App\Filament\Resources\DspGalleryImageResource\RelationManagers;
use App\Models\DspGalleryImage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DspGalleryImageResource extends Resource
{
    protected static ?string $model = DspGalleryImage::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';
    
    protected static ?string $navigationGroup = 'District Development Plan';
    
    protected static ?string $navigationLabel = 'Gallery Images';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required()
                    ->directory('dsp-gallery')
                    ->visibility('public')
                    ->maxSize(2048) // 2MB max
                    ->imageResizeMode('cover')
                    ->imageResizeTargetWidth('800')
                    ->imageResizeTargetHeight('600')
                    ->imagePreviewHeight('200')
                    ->helperText('Recommended aspect ratio: 4:3 (800×600)'),
                Forms\Components\TextInput::make('alt_text_en')
                    ->label('Alt Text (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('alt_text_mr')
                    ->label('Alt Text (Marathi)')
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
                Tables\Columns\ImageColumn::make('image')
                    ->size(100)
                    ->height(75)
                    ->extraImgAttributes(['class' => 'object-cover']),
                Tables\Columns\TextColumn::make('alt_text_en')
                    ->label('English Alt Text')
                    ->searchable()
                    ->wrap(),
                Tables\Columns\TextColumn::make('alt_text_mr')
                    ->label('Marathi Alt Text')
                    ->searchable()
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
                    ->label('Active Images')
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
            'index' => Pages\ListDspGalleryImages::route('/'),
            'create' => Pages\CreateDspGalleryImage::route('/create'),
            'edit' => Pages\EditDspGalleryImage::route('/{record}/edit'),
        ];
    }
}