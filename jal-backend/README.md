Fillament
Username : jalgaon@gmail.com
Password : Jalgaon@123

Step 1: Database Setup
Create a migration for multilingual content:

bash
php artisan make:migration create_multilingual_contents_table
Update the migration file (database/migrations/xxxx_xx_xx_xxxxxx_create_multilingual_contents_table.php):

php
Schema::create('multilingual_contents', function (Blueprint $table) {
$table->id();
$table->string('section_name');
$table->string('field_name');
$table->text('english_content');
$table->text('marathi_content');
$table->timestamps();
});
Run the migration:

bash
php artisan migrate
Step 2: Backend Setup (Laravel)
Create a model:

bash
php artisan make:model MultilingualContent
Create a Filament resource:

bash
php artisan make:filament-resource MultilingualContent
Update the Filament resource (app/Filament/Resources/MultilingualContentResource.php):

php
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

public static function form(Form $form): Form
{
return $form
->schema([
TextInput::make('section_name')->required(),
TextInput::make('field_name')->required(),
Textarea::make('english_content')->required(),
Textarea::make('marathi_content')->required(),
]);
}

public static function table(Table $table): Table
{
return $table
->columns([
TextColumn::make('section_name'),
TextColumn::make('field_name'),
]);
}
Create an API controller:

bash
php artisan make:controller Api/LanguageController
Update the controller (app/Http/Controllers/Api/LanguageController.php):

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MultilingualContent;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function getSectionContent($section)
{
    $contents = MultilingualContent::where('section_name', $section)->get();
    
    if ($contents->isEmpty()) {
        return response()->json(['error' => 'Section not found'], 404);
    }
    
    return response()->json($contents);
}
}

Add API route in routes/api.php:

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LanguageController;

Route::prefix('api')->group(function() {
    Route::get('/content/{section}', [LanguageController::class, 'getSectionContent']);
});
























<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BannerResource\Pages;
use App\Filament\Resources\BannerResource\RelationManagers;
use App\Models\Banner;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BannerResource extends Resource
{
    protected static ?string $model = Banner::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    protected static ?string $navigationGroup = 'Home';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required()
                    ->directory('banners')
                    ->visibility('public')
                    ->maxSize(2048) // 2MB max
                    ->imageResizeMode('cover')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1080')
                    ->imagePreviewHeight('200')
                    ->helperText('Recommended aspect ratio: 16:9 (1920×1080)'),
                Forms\Components\TextInput::make('alt_text')
                    ->label('Alt Text')
                    ->required()
                    ->maxLength(255),
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
                Tables\Columns\TextColumn::make('alt_text')
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
            'index' => Pages\ListBanners::route('/'),
            'create' => Pages\CreateBanner::route('/create'),
            'edit' => Pages\EditBanner::route('/{record}/edit'),
        ];
    }
}



<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::active()->ordered()->get()->map(function($banner) {
            return [
                'id' => $banner->id,
                'image' => $banner->image_url, // Use the accessor to get full URL
                'alt_text' => $banner->alt_text,
                'order' => $banner->order,
                'is_active' => $banner->is_active,
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $banners
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // This method is not needed for the carousel frontend
        abort(404);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Banner extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'alt_text',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Get the full URL for the image.
     */
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            // Check if the image path is already a URL
            if (filter_var($this->image, FILTER_VALIDATE_URL)) {
                return $this->image;
            }
            
            // Return the uploads URL for uploaded images
            return asset('uploads/' . $this->image);
        }
        
        return null;
    }


    /**
     * Scope a query to only include active banners.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to order banners.
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
}


<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('alt_text');
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};



using above code reference make backend for DSPReports component.





import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../assets";

const DSPReports = () => {
  const { language } = useLanguage();

  // Image gallery data
  const galleryImages = [
    {
      src: image1,
      alt: {
        en: "District planning meeting",
        mr: "जिल्हा नियोजन बैठक",
      },
    },
    {
      src: image2,
      alt: {
        en: "Development project site visit",
        mr: "विकास प्रकल्पाची साइट भेट",
      },
    },
    {
      src: image3,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image4,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image5,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image6,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image7,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
    {
      src: image8,
      alt: {
        en: "Community consultation",
        mr: "समुदाय सल्लामसलत",
      },
    },
  ];

  const reports = [
    {
      title: {
        en: "District Development Plan (Kavayitri Bahinabai Chaudhari North Maharashtra University,Jalgaon Report)",
        mr: "जिल्हा विकास आराखडा (कवयित्री बहिणाबाई चौधरी उत्तर महाराष्ट्र विद्यापीठ,जळगाव अहवाल)",
      },
      url: "https://drive.google.com/file/d/1oZQ5-40jRxgDSl6hElpHVBTrtxpW2FeM/view?usp=sharing",
    },
    {
      title: {
        en: "District Development Plan (Symbiosis University Pune Report)",
        mr: "जिल्हा विकास आराखडा (सिम्बॉयसिस विद्यापीठ पुणे अहवाल)",
      },
      url: "https://drive.google.com/file/d/1QUr2l6rTw25abSYGG3ZcPHh-M8zEo9EN/view?usp=sharing",
    },
    {
      title: {
        en: "District Development Plan Action Plan",
        mr: "जिल्हा विकास आराखडा Action Plan",
      },
      url: "https://docs.google.com/presentation/d/1fZ-NmrFer3NcoBizM61J07zo7wB9KTNL/edit?usp=sharing&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 1",
        mr: "जिल्हा विकास आराखडा सादरीकरण 1",
      },
      url: "https://docs.google.com/presentation/d/1-FVyZt0yMKA-SoGvMoDAzMO14RzRPEwI/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 2",
        mr: "जिल्हा विकास आराखडा सादरीकरण 2",
      },
      url: "https://docs.google.com/presentation/d/1ocoL-UMbJJ7OSPuSb8vIJ12CHTG3r2Fl/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "District Development Plan Presentation 3",
        mr: "जिल्हा विकास आराखडा सादरीकरण 3",
      },
      url: "https://docs.google.com/presentation/d/1aIn_iE00xME4V_S2Lqa_pWRqWDJajPPa/edit?usp=drive_link&ouid=108173865144049668925&rtpof=true&sd=true",
    },
    {
      title: {
        en: "Jalgaon District MahaSTRIDE Presentation",
        mr: "जळगाव जिल्हा MahaSTRIDE सादरीकरण",
      },
      url: "https://docs.google.com/presentation/d/1B0TgauLWPwMm2Wk2xpiqEDTdih2ZcQ8J/edit?usp=sharing&ouid=108173865144049668925&rtpof=true&sd=true",
    },
  ];

  const content = {
    en: {
      heading: "District Development Plan Reports",
      subheading: "Available Reports and Presentations",

      viewPdf: "View PDF",
    },
    mr: {
      heading: "जिल्हा विकास आराखडा अहवाल",
      subheading: "उपलब्ध अहवाल आणि सादरीकरणे",

      viewPdf: "PDF पहा",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Image Gallery Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {content[language].galleryTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt[language]}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {content[language].subheading}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Report Title" : "अहवालाचे शीर्षक"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {language === "en" ? "Action" : "कृती"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                      {report.title[language]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {content[language].viewPdf}
                        <svg
                          className="w-4 h-4 ml-1 inline-block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSPReports;
