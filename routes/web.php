<?php
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\profileDeleteController;
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
Route::get( '/after_login', function () {
    return view( 'after_login' );
} )->name( 'after_login' );

Route::get( '/account_summary', function () {
    return view( 'account_summary' );
} )->name( 'account_summary' );

// Route::get('/account_detail', function () {
//     return view('account_detail');
// })->name('account_detail');
Route::get( '/user_account_detail', [HomeController::class, 'all_account_detail'] )->name( 'all_account_detail' );
Route::get( '/user_ac_details/{id}', [HomeController::class, 'user_accountDetails'] )->name( 'user_account_detail' );

Route::get( '/account_detail', [HomeController::class, 'account_detail'] )->name( 'account_detail' );
// Route::get('/account_detail', [HomeController::class, 'user_accountDetails'])->name('user_account_detail');

Route::get( '/dashboard', [HomeController::class, 'user_type_check'] )->middleware( ['auth', 'verified'] )->name( 'dashboard' );

Route::middleware( 'auth' )->group( function () {
    Route::post( '/createUser', [HomeController::class, 'createUser'] )->name( 'createUser' );
    Route::post( '/credit_save', [HomeController::class, 'saveCredits'] )->name( 'credit_save' );
    Route::post( '/debit_save', [HomeController::class, 'saveDebits'] )->name( 'debit_save' );
    Route::post( '/account_details', [HomeController::class, 'accountDetails'] )->name( 'account_details' );

    Route::get( '/profile', [ProfileController::class, 'edit'] )->name( 'profile.edit' );
    Route::patch( '/profile', [ProfileController::class, 'update'] )->name( 'profile.update' );
    Route::delete( '/profile', [ProfileController::class, 'destroy'] )->name( 'profile.destroy' );

    // Route::get('/delete-account/{id}', [ProfileController::class, 'deleteAccount'] )->name( 'account.delete' );

    

    //Delete user 
   
} );
Route::get( '/delete-account/{id}', [profileDeleteController::class, 'deleteAccount'] )->name( 'account.delete' );


require __DIR__ . '/auth.php';
