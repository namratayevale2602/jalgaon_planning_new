<?php
// app/Filament/Resources/ReportResource.php

namespace App\Filament\Resources;

use App\Filament\Resources\ReportResource\Pages;
use App\Models\Report;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ReportResource extends Resource
{
    protected static ?string $model = Report::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Reports';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Document Information')
                    ->schema([
                        TextInput::make('title.en')
                            ->label('Title (English)')
                            ->required(),
                        TextInput::make('title.mr')
                            ->label('Title (Marathi)')
                            ->required(),
                        Textarea::make('description.en')
                            ->label('Description (English)')
                            ->rows(3),
                        Textarea::make('description.mr')
                            ->label('Description (Marathi)')
                            ->rows(3),
                        Select::make('file_type')
                            ->options([
                                'PDF' => 'PDF',
                                'DOC' => 'Word Document',
                                'XLS' => 'Excel Sheet',
                                'PPT' => 'PowerPoint',
                            ])
                            ->default('PDF')
                            ->required(),
                    ]),
                    
                Section::make('File Options')
                    ->schema([
                        Toggle::make('is_external')
                            ->label('Use External URL')
                            ->reactive()
                            ->helperText('Toggle if you want to use an external URL instead of uploading a file'),
                            
                        TextInput::make('file_url')
                            ->label('External File URL')
                            ->url()
                            ->visible(fn (callable $get) => $get('is_external'))
                            ->required(fn (callable $get) => $get('is_external'))
                            ->rules(['nullable', 'url']),
                            
                        FileUpload::make('file_path')
                            ->label('Upload File')
                            ->directory('reports')
                            ->preserveFilenames()
                            ->acceptedFileTypes([
                                'application/pdf', 
                                'application/msword', 
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                'application/vnd.ms-excel',
                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                'application/vnd.ms-powerpoint',
                                'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                            ])
                            ->maxSize(51200) // 50MB
                            ->visible(fn (callable $get) => !$get('is_external'))
                            ->required(fn (callable $get) => !$get('is_external'))
                            ->helperText('Maximum file size: 50MB'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable(),
                Tables\Columns\TextColumn::make('localized_title')
                    ->label('Title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('file_type')
                    ->badge(),
                Tables\Columns\IconColumn::make('is_external')
                    ->label('External')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_external')
                    ->label('External Documents')
                    ->query(fn (Builder $query): Builder => $query->where('is_external', true)),
                Tables\Filters\Filter::make('is_uploaded')
                    ->label('Uploaded Documents')
                    ->query(fn (Builder $query): Builder => $query->where('is_external', false)),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\Action::make('view_file')
                    ->label('View')
                    ->icon('heroicon-o-eye')
                    ->action(function (Report $record) {
                        if ($record->is_external) {
                            return redirect()->away($record->file_url);
                        } else {
                            return redirect()->to($record->file_url);
                        }
                    })
                    ->openUrlInNewTab(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListReports::route('/'),
            'create' => Pages\CreateReport::route('/create'),
            'edit' => Pages\EditReport::route('/{record}/edit'),
        ];
    }    
}