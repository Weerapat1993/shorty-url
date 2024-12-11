<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLedgerRequest;
use App\Http\Requests\UpdateLedgerRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Ledger;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
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
}
