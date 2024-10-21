<?php
use App\Http\Controllers\LinkController;
use Illuminate\Support\Facades\Route;

Route::controller(LinkController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/links', 'index')->name('links.index');
    Route::post('/links', 'store')->name('links.store');
    Route::get('/links/create', 'create')->name('links.create');
    Route::get('/links/{link}', 'show')->name('links.show');
    Route::get('/links/{link}/edit', 'edit')->name('links.edit');
    Route::patch('/links/{link}', 'update')->name('links.update');
    Route::delete('/links/{link}', 'destroy')->name('links.destroy');
});


Route::get('/l/{slug}', [LinkController::class, 'link'])->name('links.url');
