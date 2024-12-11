<?php
use App\Http\Controllers\LedgerController;
use Illuminate\Support\Facades\Route;

Route::controller(LedgerController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/ledgers', 'index')->name('ledgers.index');
    Route::post('/ledgers', 'store')->name('ledgers.store');
    Route::get('/ledgers/create', 'create')->name('ledgers.create');
    Route::get('/ledgers/{ledger}', 'show')->name('ledgers.show');
    Route::get('/ledgers/{ledger}/edit', 'edit')->name('ledgers.edit');
    Route::patch('/ledgers/{ledger}', 'update')->name('ledgers.update');
    Route::delete('/ledgers/{ledger}', 'destroy')->name('ledgers.destroy');
});
