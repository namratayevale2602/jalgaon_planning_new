<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrganizationalStructure;
use App\Models\DecisionProcess;
use App\Models\Responsibility;
use Illuminate\Http\Request;

class OrganizationalChartController extends Controller
{
    public function index(Request $request)
    {
        $language = $request->get('lang', 'en');

        $structures = OrganizationalStructure::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $processes = DecisionProcess::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $responsibilities = Responsibility::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $content = [
            'title' => [
                'en' => 'Organizational Structure',
                'mr' => 'संस्थात्मक रचना',
            ],
            'hierarchyTitle' => [
                'en' => 'Jalgaon District Planning Committee Hierarchy',
                'mr' => 'जळगांव जिल्हा नियोजन समिती पदानुक्रम',
            ],
            'structure' => $structures->map(function ($item) use ($language) {
                return [
                    'level' => $item->level,
                    'name' => $item->name,
                ];
            })->toArray(),
            'decisionProcess' => [
                'title' => [
                    'en' => 'Decision Making Process & Responsibilities',
                    'mr' => 'निर्णय प्रकिया व जबाबदाऱ्या',
                ],
                'subtitle' => [
                    'en' => 'Development Plan Preparation Process',
                    'mr' => 'विकास आराखडा तयार करण्याची प्रक्रिया',
                ],
                'act' => [
                    'en' => 'Related Act: District Planning Committee (Structure & Functions) Act 1998',
                    'mr' => 'संबंधित कायदा: जिल्हा नियोजन समिती (रचना व कामे) अधिनियम 1998',
                ],
                'process' => $processes->map(function ($item) use ($language) {
                    return [
                        'workType' => $item->work_type,
                        'timeline' => $item->timeline,
                        'responsible' => $item->responsible,
                    ];
                })->toArray(),
            ],
            'composition' => [
                'title' => [
                    'en' => 'Key Responsibilities',
                    'mr' => 'मुख्य जबाबदाऱ्या',
                ],
                'items' => $responsibilities->firstWhere('type', 'composition')->items ?? ['en' => [], 'mr' => []],
            ],
            'committees' => [
                'title' => [
                    'en' => 'Governing References',
                    'mr' => 'शासकीय संदर्भ',
                ],
                'items' => $responsibilities->firstWhere('type', 'committees')->items ?? ['en' => [], 'mr' => []],
            ],
        ];

        return response()->json($content);
    }
}