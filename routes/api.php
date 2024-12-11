<?php

use App\Http\Controllers\LedgerController;
use Illuminate\Support\Facades\Route;

Route::middleware(['api', 'cors'])->name('api.')->prefix('api')->group(function () {
    Route::get('/ledgers/get-age', [LedgerController::class, 'getAgeDistribution'])->name('ledgers.getAge');
});
