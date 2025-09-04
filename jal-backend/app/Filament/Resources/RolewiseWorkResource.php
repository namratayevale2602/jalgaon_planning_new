<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RolewiseWorkResource\Pages;
use App\Filament\Resources\RolewiseWorkResource\RelationManagers;
use App\Models\RolewiseWork;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;


class RolewiseWorkResource extends Resource
{
    protected static ?string $model = RolewiseWork::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Functions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Document Details')
                    ->tabs([
                        Forms\Components\Tabs\Tab::make('English')
                            ->schema([
                                Forms\Components\TextInput::make('title.en')
                                    ->label('Title (English)')
                                    ->required(),
                                Forms\Components\Textarea::make('description.en')
                                    ->label('Description (English)')
                                    ->required(),
                            ]),
                        Forms\Components\Tabs\Tab::make('Marathi')
                            ->schema([
                                Forms\Components\TextInput::make('title.mr')
                                    ->label('शीर्षक (मराठी)')
                                    ->required(),
                                Forms\Components\Textarea::make('description.mr')
                                    ->label('वर्णन (मराठी)')
                                    ->required(),
                            ]),
                    ]),
                
                FileUpload::make('file_path')
                    ->label('PDF Document')
                    ->acceptedFileTypes(['application/pdf'])
                    ->directory('committee-documents')
                    ->required()
                    ->downloadable()
                    ->preserveFilenames(),
                
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title.en')
                    ->label('Title')
                    ->searchable()
                    ->sortable(),
                
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
            'index' => Pages\ListRolewiseWorks::route('/'),
            'create' => Pages\CreateRolewiseWork::route('/create'),
            'edit' => Pages\EditRolewiseWork::route('/{record}/edit'),
        ];
    }
}
