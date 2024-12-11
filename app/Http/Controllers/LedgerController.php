<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLedgerRequest;
use App\Http\Requests\UpdateLedgerRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Ledger;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;

class LedgerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $ledgers = Ledger::all();
        return Inertia::render('Ledger/Index', [
            'ledgers' => $ledgers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Ledger/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLedgerRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $ledger = Ledger::create([
            'title' => $request->title,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
        ]);
        return Redirect::route('ledgers.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ledger $ledger): Response {
        return Inertia::render('Ledger/Edit', ['ledger' => $ledger]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLedgerRequest $request, Ledger $ledger): RedirectResponse
    {
        $validated = $request->validated();
        $ledger->update([
            'title' => $request->title,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'birthdate' => $request->birthdate,
        ]);
        return Redirect::route('ledgers.index');
    }

     /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ledger $ledger): RedirectResponse
    {
        $ledger->delete();
        return Redirect::route('ledgers.index');
    }

    public function dashboard()
    {
        $ageDistribution = Ledger::select(DB::raw('
            CASE
                WHEN TIMESTAMPDIFF(YEAR, STR_TO_DATE(birthdate, "%Y-%m-%d"), CURDATE()) < 18 THEN "Under 18"
                WHEN TIMESTAMPDIFF(YEAR, STR_TO_DATE(birthdate, "%Y-%m-%d"), CURDATE()) BETWEEN 18 AND 24 THEN "18-24"
                WHEN TIMESTAMPDIFF(YEAR, STR_TO_DATE(birthdate, "%Y-%m-%d"), CURDATE()) BETWEEN 25 AND 34 THEN "25-34"
                WHEN TIMESTAMPDIFF(YEAR, STR_TO_DATE(birthdate, "%Y-%m-%d"), CURDATE()) BETWEEN 35 AND 44 THEN "35-44"
                WHEN TIMESTAMPDIFF(YEAR, STR_TO_DATE(birthdate, "%Y-%m-%d"), CURDATE()) BETWEEN 45 AND 54 THEN "45-54"
                ELSE "55+"
            END AS age_group'
        ))
        ->whereRaw('STR_TO_DATE(birthdate, "%Y-%m-%d") IS NOT NULL')
        ->groupBy('age_group')
        ->selectRaw('COUNT(*) as count')
        ->orderBy('age_group')
        ->get()
        ->map(function ($item) {
            return [
                'ageGroup' => $item->age_group,
                'count' => $item->count,
            ];
        });
        return Inertia::render('Dashboard', ['pie' => $ageDistribution]);
        // return response()->json($ageDistribution);
    }
}
