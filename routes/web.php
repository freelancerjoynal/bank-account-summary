<?php

use App\Http\Controllers\customBalanceController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\profileDeleteController;
use App\Http\Controllers\statementController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */

Route::get( '/', function () {
    return view( 'index' );
} );
// Route::post('/home', [HomeController::class, 'login_check'])->name('home');
// Route::post('/after_login', function () {
//     return view('after_login');
// })
Route::get( '/reminder', function () {
    return view( 'reminder' );
} )->name( 'reminder' );

Route::get( '/account_summary', function () {
    return view( 'account_summary' );
} )->name( 'account_summary' );

Route::get( '/thank-you', function () {
    return view( 'thankyou' );
} )->name( 'thank.you' );
Route::get( '/services/start', function () {
    return view( 'update_contact' );
} )->name( 'update-contact' );

Route::get( '/edocs/start', [statementController::class, 'viewStatements'] )->name( 'statements' );

// Route::get('/account_detail', function () {
//     return view('account_detail');
// })->name('account_detail');
Route::get( '/accounts', [HomeController::class, 'allAcounts'] )->name( 'accounts' );
Route::get( '/accounts/{id}', [HomeController::class, 'user_accountDetails'] )->name( 'accounts.details' );

Route::get( '/account_detail', [HomeController::class, 'account_detail'] )->name( 'account_detail' );
// Route::get('/account_detail', [HomeController::class, 'user_accountDetails'])->name('user_account_detail');

Route::get( '/dashboard', [HomeController::class, 'user_type_check'] )->middleware( ['auth', 'verified'] )->name( 'dashboard' );

Route::middleware( 'auth' )->group( function () {
    Route::post( '/createUser', [HomeController::class, 'createUser'] )->name( 'createUser' );
    Route::post( '/credit_save', [HomeController::class, 'saveCredits'] )->name( 'credit_save' );
    Route::post( '/debit_save', [HomeController::class, 'saveDebits'] )->name( 'debit_save' );
    Route::post( '/account_details', [HomeController::class, 'accountDetails'] )->name( 'account_details' );

    Route::get( '/profile', [ProfileController::class, 'edit'] )->name( 'profile.edit' );

    Route::delete( '/profile', [ProfileController::class, 'destroy'] )->name( 'profile.destroy' );

    Route::get( '/profile-update', [customBalanceController::class, 'profileUpdate'] )->name( 'profile.update' );

    // Route::get('/delete-account/{id}', [ProfileController::class, 'deleteAccount'] )->name( 'account.delete' );
    Route::get( '/statements', [statementController::class, 'adminShow'] )->name( 'admin.statements' );

    Route::post( '/statements/create', [statementController::class, 'createStatement'] )->name( 'admin.statements.create' );

    Route::get( '/statements/delete/{id}', [statementController::class, 'deleteStatement'] )->name( 'admin.statements.delete' );
    //Delete user

    //Update the custom balance
    Route::post( '/update-custom-banace', [customBalanceController::class, 'updateCustomBalance'] )->name( 'admin.update.custom.blance' );

    //transation update
    Route::post( '/transaction-update', [customBalanceController::class, 'updateTransactions'] )->name( 'admin.transaction.update' );

    Route::get( '/transaction-delete/{id}', [customBalanceController::class, 'deleteTransactions'] )->name( 'admin.transaction.delete' );

} );
Route::get( '/delete-account/{id}', [profileDeleteController::class, 'deleteAccount'] )->name( 'account.delete' );

require __DIR__ . '/auth.php';
