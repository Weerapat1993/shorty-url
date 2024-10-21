<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\StoreLinkRequest;
use App\Http\Requests\UpdateLinkRequest;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Link;
use Illuminate\Support\Facades\Redirect;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $links = Link::paginate(10);

        return Inertia::render('Link/Index', [
            'links' => $links,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Link/Create');
    }

    /**
     * Display the specified resource.
     */
    public function show(Link $link): Response
    {
        return Inertia::render('Link/Show', ['link' => $link]);
    }


    public function link(string $slug) : RedirectResponse {
        $link = Link::where('slug', $slug)->first();
        if($link == null) {
            abort(404);
        }
        return Redirect::to($link->destination);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLinkRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        Link::create($request->all());
        return Redirect::route('links.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Link $link): Response {
        return Inertia::render('Link/Edit', ['$link' => $link]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLinkRequest $request, Link $link): RedirectResponse
    {
        $validated = $request->validated();
        $link->update($request->all());
        return Redirect::route('links.show', $link->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Link $link): RedirectResponse
    {
        $link->delete();
        return Redirect::route('links.index');
    }
}
