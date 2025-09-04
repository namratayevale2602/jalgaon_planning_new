<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SchemeResource\Pages;
use App\Models\Scheme;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\HtmlString;

class SchemeResource extends Resource
{
    protected static ?string $model = Scheme::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Schemes';

    public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Section::make('Basic Information')
                ->schema([
                    Forms\Components\TextInput::make('slug')
                        ->required()
                        ->unique(ignoreRecord: true)
                        ->maxLength(255),
                    
                    Forms\Components\Select::make('category_id')
                        ->required()
                        ->options([
                            1 => 'Annual Plan',
                            2 => 'MLA Funds',
                            3 => 'MP Funds',
                            4 => 'Hilly Area',
                            5 => 'Human Development',
                            6 => 'Minority Schemes',
                            7 => 'Other Schemes',
                        ]),
                    
                    Forms\Components\TextInput::make('order')
                        ->numeric()
                        ->default(0),
                    
                    Forms\Components\Toggle::make('is_active')
                        ->default(true),
                ])->columns(2),
            
            Forms\Components\Section::make('Multilingual Content')
                ->schema([
                    Forms\Components\Tabs::make('Languages')
                        ->tabs([
                            Forms\Components\Tabs\Tab::make('English')
                                ->schema([
                                    Forms\Components\TextInput::make('name.en')
                                        ->label('Name (English)')
                                        ->required()
                                        ->default(fn ($get) => $get('name.en') ?? ''),
                                    
                                    Forms\Components\Textarea::make('description.en')
                                        ->label('Description (English)')
                                        ->required()
                                        ->default(fn ($get) => $get('description.en') ?? ''),
                                    
                                    Forms\Components\Repeater::make('details.en')
                                        ->label('Details (English)')
                                        ->schema([
                                            Forms\Components\TextInput::make('detail')
                                                ->label('Detail')
                                                ->required(),
                                        ])
                                        ->defaultItems(3)
                                        ->default(fn ($get) => $get('details.en') ?? []),
                                ]),
                            
                            Forms\Components\Tabs\Tab::make('Marathi')
                                ->schema([
                                    Forms\Components\TextInput::make('name.mr')
                                        ->label('Name (Marathi)')
                                        ->required()
                                        ->default(fn ($get) => $get('name.mr') ?? ''),
                                    
                                    Forms\Components\Textarea::make('description.mr')
                                        ->label('Description (Marathi)')
                                        ->required()
                                        ->default(fn ($get) => $get('description.mr') ?? ''),
                                    
                                    Forms\Components\Repeater::make('details.mr')
                                        ->label('Details (Marathi)')
                                        ->schema([
                                            Forms\Components\TextInput::make('detail')
                                                ->label('Detail')
                                                ->required(),
                                        ])
                                        ->defaultItems(3)
                                        ->default(fn ($get) => $get('details.mr') ?? []),
                                ]),
                        ]),
                ]),
            
            Forms\Components\Section::make('Documents')
                ->description('Upload PDF files or provide external URLs (Optional)')
                ->schema([
                    Forms\Components\Tabs::make('Document Languages')
                        ->tabs([
                            Forms\Components\Tabs\Tab::make('English Documents')
                                ->schema([
                                    Forms\Components\TextInput::make('documents.en.title')
                                        ->label('Section Title (English)')
                                        ->default(fn ($get) => $get('documents.en.title') ?? 'Documents'),
                                    
                                    Forms\Components\Repeater::make('documents.en.items')
                                        ->label('Documents (English)')
                                        ->schema([
                                            Forms\Components\TextInput::make('name')
                                                ->label('Document Name')
                                                ->required(),
                                            
                                            Forms\Components\Select::make('type')
                                                ->label('Document Source')
                                                ->options([
                                                    'file' => 'Upload PDF File',
                                                    'url' => 'External URL',
                                                ])
                                                ->default('file')
                                                ->reactive()
                                                ->required(),
                                            
                                            Forms\Components\FileUpload::make('file_path')
                                                ->label('PDF File')
                                                ->acceptedFileTypes(['application/pdf'])
                                                ->directory('schemes/documents')
                                                ->preserveFilenames()
                                                ->downloadable()
                                                ->openable()
                                                ->visible(fn ($get) => $get('type') === 'file')
                                                ->required(fn ($get) => $get('type') === 'file'),
                                            
                                            Forms\Components\TextInput::make('external_url')
                                                ->label('External URL')
                                                ->url()
                                                ->placeholder('https://example.com/document.pdf')
                                                ->visible(fn ($get) => $get('type') === 'url')
                                                ->required(fn ($get) => $get('type') === 'url'),
                                        ])
                                        ->collapsible()
                                        ->itemLabel(fn (array $state): ?string => $state['name'] ?? null)
                                        ->createItemButtonLabel('Add Document')
                                        ->defaultItems(0)
                                        ->default(fn ($get) => $get('documents.en.items') ?? []),
                                ]),
                            
                            Forms\Components\Tabs\Tab::make('Marathi Documents')
                                ->schema([
                                    Forms\Components\TextInput::make('documents.mr.title')
                                        ->label('Section Title (Marathi)')
                                        ->default(fn ($get) => $get('documents.mr.title') ?? 'दस्तऐवज'),
                                    
                                    Forms\Components\Repeater::make('documents.mr.items')
                                        ->label('Documents (Marathi)')
                                        ->schema([
                                            Forms\Components\TextInput::make('name')
                                                ->label('Document Name')
                                                ->required(),
                                            
                                            Forms\Components\Select::make('type')
                                                ->label('Document Source')
                                                ->options([
                                                    'file' => 'Upload PDF File',
                                                    'url' => 'External URL',
                                                ])
                                                ->default('file')
                                                ->reactive()
                                                ->required(),
                                            
                                            Forms\Components\FileUpload::make('file_path')
                                                ->label('PDF File')
                                                ->acceptedFileTypes(['application/pdf'])
                                                ->directory('schemes/documents')
                                                ->preserveFilenames()
                                                ->downloadable()
                                                ->openable()
                                                ->visible(fn ($get) => $get('type') === 'file')
                                                ->required(fn ($get) => $get('type') === 'file'),
                                            
                                            Forms\Components\TextInput::make('external_url')
                                                ->label('External URL')
                                                ->url()
                                                ->placeholder('https://example.com/document.pdf')
                                                ->visible(fn ($get) => $get('type') === 'url')
                                                ->required(fn ($get) => $get('type') === 'url'),
                                        ])
                                        ->collapsible()
                                        ->itemLabel(fn (array $state): ?string => $state['name'] ?? null)
                                        ->createItemButtonLabel('Add Document')
                                        ->defaultItems(0)
                                        ->default(fn ($get) => $get('documents.mr.items') ?? []),
                                ]),
                        ]),
                ])
                ->collapsible()
                ->collapsed(fn ($get) => empty($get('documents.en.items')) && empty($get('documents.mr.items'))),
            
            Forms\Components\Section::make('Media')
                ->schema([
                    Forms\Components\FileUpload::make('image_path')
                        ->label('Scheme Image')
                        ->image()
                        ->directory('schemes/images')
                        ->required()
                        ->default(fn ($get) => $get('image_path') ?? ''),
                ]),
        ]);
}

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('Image')
                    ->disk('public'),
                
                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->formatStateUsing(fn ($state) => $state['en'] ?? 'N/A')
                    ->searchable(),
                
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                
                Tables\Columns\TextColumn::make('category_id')
                    ->formatStateUsing(fn ($state) => match($state) {
                        1 => 'Annual Plan',
                        2 => 'MLA Funds',
                        3 => 'MP Funds',
                        4 => 'Hilly Area',
                        5 => 'Human Development',
                        6 => 'Minority Schemes',
                        7 => 'Other Schemes',
                        default => 'Unknown'
                    })
                    ->sortable(),
                
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                
                Tables\Columns\TextColumn::make('order')
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('documents')
                    ->label('Documents')
                    ->formatStateUsing(function ($state) {
                        $count = 0;
                        if (isset($state['en']['items'])) {
                            $count += count($state['en']['items']);
                        }
                        if (isset($state['mr']['items'])) {
                            $count += count($state['mr']['items']);
                        }
                        
                        $fileCount = 0;
                        $urlCount = 0;
                        
                        foreach (['en', 'mr'] as $lang) {
                            if (isset($state[$lang]['items'])) {
                                foreach ($state[$lang]['items'] as $item) {
                                    if (isset($item['file_path']) && $item['file_path']) {
                                        $fileCount++;
                                    } elseif (isset($item['external_url']) && $item['external_url']) {
                                        $urlCount++;
                                    }
                                }
                            }
                        }
                        
                        return "{$count} total ({$fileCount} files, {$urlCount} URLs)";
                    }),
            ])
            ->filters([
                Tables\Filters\Filter::make('is_active')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true)),
                
                Tables\Filters\SelectFilter::make('category_id')
                    ->options([
                        1 => 'Annual Plan',
                        2 => 'MLA Funds',
                        3 => 'MP Funds',
                        4 => 'Hilly Area',
                        5 => 'Human Development',
                        6 => 'Minority Schemes',
                        7 => 'Other Schemes',
                    ])
                    ->label('Category'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('viewDocuments')
                    ->label('View Docs')
                    ->icon('heroicon-o-document')
                    ->modalContent(function (Scheme $record) {
                        $html = '<div class="space-y-4">';
                        
                        foreach (['en', 'mr'] as $lang) {
                            if (isset($record->documents[$lang]['items'])) {
                                $html .= '<div><strong>' . strtoupper($lang) . ' Documents:</strong><ul class="mt-2 space-y-2">';
                                foreach ($record->documents[$lang]['items'] as $index => $doc) {
                                    $url = '';
                                    $type = '';
                                    
                                    if (isset($doc['file_path']) && $doc['file_path']) {
                                        $url = asset('uploads/' . $doc['file_path']);
                                        $type = '<span class="text-green-600 text-xs">(File)</span>';
                                    } elseif (isset($doc['external_url']) && $doc['external_url']) {
                                        $url = $doc['external_url'];
                                        $type = '<span class="text-blue-600 text-xs">(URL)</span>';
                                    }
                                    
                                    if ($url) {
                                        $html .= '<li class="flex justify-between items-center">';
                                        $html .= '<a href="' . $url . '" target="_blank" class="text-blue-600 hover:underline flex-1">' . $doc['name'] . '</a>';
                                        $html .= '<span class="text-gray-500 text-sm">' . $type . '</span>';
                                        $html .= '</li>';
                                    }
                                }
                                $html .= '</ul></div>';
                            }
                        }
                        
                        $html .= '</div>';
                        return new HtmlString($html);
                    })
                    ->modalSubmitAction(false),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('order');
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
            'index' => Pages\ListSchemes::route('/'),
            'create' => Pages\CreateScheme::route('/create'),
            'edit' => Pages\EditScheme::route('/{record}/edit'),
        ];
    }
}