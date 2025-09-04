<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PoliticalRepresentativeResource\Pages;
use App\Filament\Resources\PoliticalRepresentativeResource\RelationManagers;
use App\Models\PoliticalRepresentative;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PoliticalRepresentativeResource extends Resource
{
    protected static ?string $model = PoliticalRepresentative::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = 'Home';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Representative Information')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('name_en')
                                    ->required()
                                    ->label('Name (English)')
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('designation_en')
                                    ->label('Designation (English)')
                                    ->columnSpanFull()
                                    ->rows(3),
                                Forms\Components\TextInput::make('matdarsangh_en')
                                    ->required()
                                    ->label('Matdarsangh (English)')
                                    ->maxLength(255),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('name_mr')
                                    ->required()
                                    ->label('Name (Marathi)')
                                    ->maxLength(255),
                                Forms\Components\Textarea::make('designation_mr')
                                    ->label('Designation (Marathi)')
                                    ->columnSpanFull()
                                    ->rows(3),
                                Forms\Components\TextInput::make('matdarsangh_mr')
                                    ->required()
                                    ->label('Matdarsangh (Marathi)')
                                    ->maxLength(255),
                            ]),
                    ])
                    ->columnSpanFull(),
                
                Forms\Components\Select::make('category')
                    ->options([
                        'minister' => 'Minister',
                        'administrative' => 'Administrative',
                        'lok_sabha' => 'Lok Sabha Members',
                        'vidhan_sabha' => 'Vidhan Sabha Members',
                        'vidhan_parishad' => 'Vidhan Parishad Members',
                    ])
                    ->required()
                    ->native(false),
                
                Forms\Components\TextInput::make('subcategory')
                    ->label('Subcategory (Optional)')
                    ->maxLength(255),
                
                Forms\Components\FileUpload::make('image_path')
                    ->label('Representative Image')
                    ->image()
                    ->directory('political-representatives')
                    ->visibility('public')
                    ->maxSize(2048)
                    ->imageResizeMode('cover')
                    ->imageResizeTargetWidth('400')
                    ->imageResizeTargetHeight('400')
                    ->imagePreviewHeight('200')
                    ->helperText('Recommended size: 400×400 pixels (square aspect ratio)')
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
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('Image')
                    ->size(80)
                    ->height(80)
                    ->extraImgAttributes(['class' => 'object-cover rounded-full']),
                
                Tables\Columns\TextColumn::make('name_en')
                    ->label('Name (English)')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('category')
                    ->searchable()
                    ->sortable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'minister' => 'primary',
                        'administrative' => 'success',
                        'lok_sabha' => 'warning',
                        'vidhan_sabha' => 'info',
                        'vidhan_parishad' => 'danger',
                        default => 'gray',
                    }),
                
                Tables\Columns\TextColumn::make('matdarsangh_en')
                    ->label('Matdarsangh')
                    ->searchable(),
                
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('sort_order')
                    ->sortable(),
                
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
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
                
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'minister' => 'Minister',
                        'administrative' => 'Administrative',
                        'lok_sabha' => 'Lok Sabha Members',
                        'vidhan_sabha' => 'Vidhan Sabha Members',
                        'vidhan_parishad' => 'Vidhan Parishad Members',
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
            'index' => Pages\ListPoliticalRepresentatives::route('/'),
            'create' => Pages\CreatePoliticalRepresentative::route('/create'),
            'edit' => Pages\EditPoliticalRepresentative::route('/{record}/edit'),
        ];
    }
}