<?php

namespace App\Http\Controllers;

use App\Models\AccountInformation;
use App\Models\User;
use Illuminate\Http\Request;

class transactionFilterationController extends Controller {
    //Deoposits method
    public function user_accountDetailsDeposits( Request $request ) {

        $userId = $request->id;

        // Retrieve user details using Eloquent with assumed relationship
        $userDetails = AccountInformation::join( 'users', 'account_informations.account_holder', '=', 'users.id' )
            ->select( 'users.name', 'users.email', 'users.ac_no' ) // Assuming 'ac_no' is in the 'users' table
            ->where( 'account_informations.account_holder', $userId )
            ->first();

        $name = $userDetails->name;
        $email = $userDetails->email;
        $ac_no = $userDetails->ac_no;

        $currentTime = time();

        // Get the sum of credits for the upcoming transactions
        $pendingCredits = AccountInformation::where( 'txn_time', '>', $currentTime - 3600 * 24 )
            ->sum( 'credits' );
        $pendingDebits = AccountInformation::where( 'txn_time', '>', $currentTime - 3600 * 24 )->sum( 'debits' );

        // Get the sum of credits and debits for the user
        $userBalance = AccountInformation::selectRaw( 'SUM(credits) as total_credits, SUM(debits) as total_debits' )
            ->where( 'account_holder', $userId )
            ->where( 'txn_time', '<', $currentTime - 3600 * 24 )
            ->first();

        // Access the calculated totals
        $totalCredits = $userBalance->total_credits ?? 0;
        $totalDebits = $userBalance->total_debits ?? 0;
        $availableBalance = $totalCredits - $totalDebits;

        $customBalace = User::where( 'id', $userId )->first();
        $customBalaceIsShow = $customBalace->showbalance;
        if ( $customBalaceIsShow == 1 ) {
            $customBalace = $customBalace->custom_balance;
            $availableBalance = $customBalace;
        }

        //Current time
        $currentTime = time();

        // Paginate user transactions
        $userTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "CONVERT(txn_time, SIGNED) < ?", [$currentTime - 3600 * 24] )
            ->where( 'credits', '>', 0 )
            ->orderBy( 'txn_date', 'desc' )
            ->paginate( 30 );

        // pending transaction
        $pendingTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "CONVERT(txn_time, SIGNED) > ?", [$currentTime - 3600 * 24] )
            ->orderBy( 'txn_date', 'desc' )
            ->where( 'credits', '>', 0 );
        // Pass the data to the view

        //get the user data

        return view( 'account_detail', [
            'name'                => $name,
            'userId'              => $userId,
            'ac_no'               => $ac_no,
            'totalCredits'        => $totalCredits,
            'totalDebits'         => $totalDebits,
            'availableBalance'    => $availableBalance,
            'pendingCredits'      => $pendingCredits,
            'pendingDebits'       => $pendingDebits,
            'pendingTransactions' => $pendingTransactions,
            'userTransactions'    => $userTransactions,

        ] );

    }

    //Withdrawals
    public function user_accountDetailsWithdrawals( Request $request ) {
        $userId = $request->id;

        // Retrieve user details using Eloquent with assumed relationship
        $userDetails = AccountInformation::join( 'users', 'account_informations.account_holder', '=', 'users.id' )
            ->select( 'users.name', 'users.email', 'users.ac_no' ) // Assuming 'ac_no' is in the 'users' table
            ->where( 'account_informations.account_holder', $userId )
            ->first();

        $name = $userDetails->name;
        $email = $userDetails->email;
        $ac_no = $userDetails->ac_no;

        $currentTime = time();

        // Get the sum of credits for the upcoming transactions
        $pendingCredits = AccountInformation::where( 'txn_time', '>', $currentTime - 3600 * 24 )
            ->sum( 'credits' );
        $pendingDebits = AccountInformation::where( 'txn_time', '>', $currentTime - 3600 * 24 )->sum( 'debits' );

        // Get the sum of credits and debits for the user
        $userBalance = AccountInformation::selectRaw( 'SUM(credits) as total_credits, SUM(debits) as total_debits' )
            ->where( 'account_holder', $userId )
            ->where( 'txn_time', '<', $currentTime - 3600 * 24 )
            ->first();

        // Access the calculated totals
        $totalCredits = $userBalance->total_credits ?? 0;
        $totalDebits = $userBalance->total_debits ?? 0;
        $availableBalance = $totalCredits - $totalDebits;

        $customBalace = User::where( 'id', $userId )->first();
        $customBalaceIsShow = $customBalace->showbalance;
        if ( $customBalaceIsShow == 1 ) {
            $customBalace = $customBalace->custom_balance;
            $availableBalance = $customBalace;
        }

        //Current time
        $currentTime = time();

        // Paginate user transactions
        $userTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "CONVERT(txn_time, SIGNED) < ?", [$currentTime - 3600 * 24] )
            ->where( 'debits', '>', 0 )
            ->orderBy( 'txn_date', 'desc' )
            ->paginate( 30 );

        // pending transaction
        $pendingTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "CONVERT(txn_time, SIGNED) > ?", [$currentTime - 3600 * 24] )
            ->orderBy( 'txn_date', 'desc' )
            ->where( 'debits', '>', 0 );
        // Pass the data to the view

        //get the user data

        return view( 'account_detail', [
            'name'                => $name,
            'userId'              => $userId,
            'ac_no'               => $ac_no,
            'totalCredits'        => $totalCredits,
            'totalDebits'         => $totalDebits,
            'availableBalance'    => $availableBalance,
            'pendingCredits'      => $pendingCredits,
            'pendingDebits'       => $pendingDebits,
            'pendingTransactions' => $pendingTransactions,
            'userTransactions'    => $userTransactions,

        ] );
    }
}
