<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OfficeFacility;
use App\Models\RTIOfficer;
use Illuminate\Http\Request;

class RTIPortalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');
        
        $officeFacilities = OfficeFacility::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($facility) use ($language) {
                return [
                    'id' => $facility->id,
                    'facility' => [
                        'en' => $facility->facility_en,
                        'mr' => $facility->facility_mr
                    ],
                    'time' => [
                        'en' => $facility->time_en,
                        'mr' => $facility->time_mr
                    ],
                    'process' => [
                        'en' => $facility->process_en,
                        'mr' => $facility->process_mr
                    ],
                    'location' => [
                        'en' => $facility->location_en,
                        'mr' => $facility->location_mr
                    ],
                    'responsible' => [
                        'en' => $facility->responsible_en,
                        'mr' => $facility->responsible_mr
                    ],
                    'grievance' => [
                        'en' => $facility->grievance_en,
                        'mr' => $facility->grievance_mr
                    ]
                ];
            });
            
        $rtiOfficers = [
            'publicInformationOfficers' => RTIOfficer::where('is_active', true)
                ->where('officer_type', 'public_information')
                ->orderBy('sort_order', 'asc')
                ->get()
                ->map(function ($officer) use ($language) {
                    return [
                        'id' => $officer->id,
                        'name' => [
                            'en' => $officer->name_en,
                            'mr' => $officer->name_mr
                        ],
                        'designation' => [
                            'en' => $officer->designation_en,
                            'mr' => $officer->designation_mr
                        ],
                        'jurisdiction' => [
                            'en' => $officer->jurisdiction_en,
                            'mr' => $officer->jurisdiction_mr
                        ],
                        'address' => [
                            'en' => $officer->address_en,
                            'mr' => $officer->address_mr
                        ],
                        'phone' => $officer->phone,
                        'email' => $officer->email
                    ];
                }),
            'assistantPublicInformationOfficers' => RTIOfficer::where('is_active', true)
                ->where('officer_type', 'assistant_public_information')
                ->orderBy('sort_order', 'asc')
                ->get()
                ->map(function ($officer) use ($language) {
                    return [
                        'id' => $officer->id,
                        'name' => [
                            'en' => $officer->name_en,
                            'mr' => $officer->name_mr
                        ],
                        'designation' => [
                            'en' => $officer->designation_en,
                            'mr' => $officer->designation_mr
                        ],
                        'jurisdiction' => [
                            'en' => $officer->jurisdiction_en,
                            'mr' => $officer->jurisdiction_mr
                        ],
                        'address' => [
                            'en' => $officer->address_en,
                            'mr' => $officer->address_mr
                        ],
                        'phone' => $officer->phone,
                        'email' => $officer->email
                    ];
                }),
            'appellateAuthorities' => RTIOfficer::where('is_active', true)
                ->where('officer_type', 'appellate_authority')
                ->orderBy('sort_order', 'asc')
                ->get()
                ->map(function ($officer) use ($language) {
                    return [
                        'id' => $officer->id,
                        'name' => [
                            'en' => $officer->name_en,
                            'mr' => $officer->name_mr
                        ],
                        'designation' => [
                            'en' => $officer->designation_en,
                            'mr' => $officer->designation_mr
                        ],
                        'jurisdiction' => [
                            'en' => $officer->jurisdiction_en,
                            'mr' => $officer->jurisdiction_mr
                        ],
                        'address' => [
                            'en' => $officer->address_en,
                            'mr' => $officer->address_mr
                        ],
                        'phone' => $officer->phone,
                        'email' => $officer->email
                    ];
                })
        ];
            
        return response()->json([
            'success' => true,
            'data' => [
                'title' => [
                    'en' => 'Right to Information',
                    'mr' => 'माहितीचा अधिकार'
                ],
                'subtitle' => [
                    'en' => 'RTI - Jalgaon District Planning Committee',
                    'mr' => 'आरटीआय - जळगाव जिल्हा नियोजन समिती'
                ],
                'facilities' => [
                    'title' => [
                        'en' => 'Available Facilities at District Planning Committee Office',
                        'mr' => 'जळगांव येथील जिल्हा नियोजन समिती, कार्यालयात उपलब्ध सुविधांचा तक्ता'
                    ],
                    'columns' => [
                        'en' => [
                            'Sr No',
                            'Type of Facility',
                            'Timing',
                            'Process',
                            'Location',
                            'Responsible Officer/Employee',
                            'Grievance Redressal',
                        ],
                        'mr' => [
                            'अ.क्र.',
                            'सुविधेचा प्रकार',
                            'वेळ',
                            'कार्यपध्दती',
                            'ठिकाण',
                            'जबाबदार व्यक्ती / कर्मचारी',
                            'तक्रार निवारण',
                        ]
                    ],
                    'items' => $officeFacilities
                ],
                'rtiOfficers' => [
                    'title' => [
                        'en' => 'Public Information Officer/Assistant Public Information Officer/Appellate Authority',
                        'mr' => 'जन माहिती अधिकारी / सहायक जन माहिती अधिकारी / प्रथम अपिलीय प्राधिकारी'
                    ],
                    'publicInfoOfficer' => [
                        'en' => 'Public Information Officer',
                        'mr' => 'जन माहिती अधिकारी'
                    ],
                    'asstPublicInfoOfficer' => [
                        'en' => 'Assistant Public Information Officer',
                        'mr' => 'सहायक जन माहिती अधिकारी'
                    ],
                    'appellateAuthority' => [
                        'en' => 'Appellate Authority',
                        'mr' => 'प्रथम अपिलीय प्राधिकारी'
                    ],
                    'columns' => [
                        'en' => [
                            'Sr No',
                            'Name',
                            'Designation',
                            'Jurisdiction',
                            'Address/Phone',
                            'Email',
                            '',
                        ],
                        'mr' => [
                            'अ.क्र.',
                            'नाव',
                            'पदनाम',
                            'कार्यक्षेत्र',
                            'पत्ता / फोन',
                            'ई-मेल',
                            '',
                        ]
                    ],
                    'officers' => $rtiOfficers
                ]
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // This method is not needed for the frontend
        abort(404);
    }
}