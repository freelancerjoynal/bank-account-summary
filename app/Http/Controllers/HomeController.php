<?php

namespace App\Http\Controllers;

use App\Models\AccountInformation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller {
    // user Controller
    public function user_type_check() {
        //dd(Auth::user());
        if ( Auth::id() ) {
            $usertype = Auth()->user()->role_as;
            // return $usertype;
            if ( $usertype === 0 ) {
                // // Pass the counts to the view
                // $usersWithRoleOne = DB::table('users')
                // ->where('role_as', 1)
                // ->get();

                // return view('adminDashboard.index', compact('usersWithRoleOne'));
                // Fetch user balances for all users with role_as = 1
                $userBalances = DB::select( '
                SELECT
                    users.id,
                    users.name,
                    users.email,
                    users.ac_no,
                    COALESCE(SUM(account_informations.credits), 0) as total_credits,
                    COALESCE(SUM(account_informations.debits), 0) as total_debits,
                    COALESCE(SUM(account_informations.credits), 0) - COALESCE(SUM(account_informations.debits), 0) AS balance
                FROM
                    users
                LEFT JOIN
                    account_informations ON users.id = account_informations.account_holder
                WHERE
                    users.role_as = 1
                GROUP BY
                    users.id, users.name, users.email, users.ac_no
            ' );

                // Pass the data to the view
                return view( 'adminDashboard.index', ['userBalances' => $userBalances] );

            } elseif ( $usertype === 1 ) {

                return view( 'userDashboard.index' );
                //   return view('dashboard');
            }
        }
    }

    public function all_account_detail() {
        $currentTime = time();

        $userInfo = DB::select( '
            SELECT
                users.id,
                users.name,
                users.email,
                users.ac_no,
                COALESCE(SUM(account_informations.credits), 0) as total_credits,
                COALESCE(SUM(account_informations.debits), 0) as total_debits,
                COALESCE(SUM(account_informations.credits), 0) - COALESCE(SUM(account_informations.debits), 0) AS balance
            FROM
                users
            LEFT JOIN
                account_informations ON users.id = account_informations.account_holder
            WHERE
                users.role_as = 1 AND
                account_informations.txn_time < :currentTime
            GROUP BY
                users.id, users.name, users.email, users.ac_no
        ', ['currentTime' => $currentTime] );
//dd($userInfo);
        // Pass the data to the view
        return view( 'account_summary', ['userInfo' => $userInfo] );

    }
    public function login_check( Request $request ) {
        // return view('after_login');
        //return 'Hello';
        $validatedData = $request->validate( [
            'username' => 'required|string',
        ] );
        return redirect()->route( 'home' );
    }
    public function account_detail() {
        return view( 'account_detail' );
    }

    public function saveCredits( Request $request ) {
        // Validate the form data
        $request->validate( [
            'account_holder_id' => 'required|numeric',
            'credits'           => 'required|numeric',
            'category'          => 'nullable|string',
            'description'       => 'nullable|string',
        ] );

        // Extract data from the request
        $accountHolderId = $request->input( 'account_holder_id' );
        $credits = $request->input( 'credits' );
        $category = $request->input( 'category' );
        $description = $request->input( 'description' );
        $txn_date = $request->input( 'txn_date' );

        // Perform the database update
        DB::table( 'account_informations' )->insert( [
            'account_holder' => $accountHolderId,
            'credits'        => $credits,
            'debits'         => 0, // Assuming you have a 'debits' column in your table
            'category' => $category,
            'description'    => $description,
            'txn_date'       => $txn_date,
            'txn_time'       => strtotime( $txn_date ),

            'created_at'     => now(),
            'updated_at'     => now(),
        ] );

        return redirect()->back()->with( 'success', 'Credits saved successfully.' );
    }
    public function saveDebits( Request $request ) {
        // Validate the form data
        $request->validate( [
            'account_holder_id' => 'required|numeric',
            'debits'            => 'required|numeric',
            'category'          => 'nullable|string',
            'description'       => 'nullable|string',
        ] );

        // Extract data from the request
        $accountHolderId = $request->input( 'account_holder_id' );
        $debits = $request->input( 'debits' );
        $category = $request->input( 'category' );
        $description = $request->input( 'description' );

        // Perform the database update
        DB::table( 'account_informations' )->insert( [
            'account_holder' => $accountHolderId,
            'debits'         => $debits,
            'credits'        => 0, // Assuming you have a 'debits' column in your table
            'category' => $category,
            'description'    => $description,
            'created_at'     => now(),
            'updated_at'     => now(),
        ] );

        return redirect()->back()->with( 'success', 'Debits saved successfully.' );
    }

    public function accountDetails( Request $request ) {
        // Extract data from the request
        //dd($request);
        $id = $request->input( 'id' );
        $name = $request->input( 'name' );
        $email = $request->input( 'email' );
        $ac_no = $request->input( 'ac_no' );
        $total_credits = $request->input( 'total_credits' );
        $total_debits = $request->input( 'total_debits' );
        $accountInformation = DB::select( '
                SELECT *
                FROM account_informations
                WHERE account_holder = :id
            ', ['id' => $id] );
        //dd($accountInformation);
        return view( 'adminDashboard.ac_details', ['id' => $id, 'name' => $name, 'email' => $email, 'ac_no' => $ac_no, 'total_credits' => $total_credits, 'total_debits' => $total_debits, 'accountInformation' => $accountInformation] );
    }

    //account_details page
    public function user_accountDetails( $request_id ) {
        $userId = $request_id;

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
        $pendingCredits = AccountInformation::where( 'txn_time', '>', $currentTime )
            ->sum( 'credits' );

        // Get the sum of credits and debits for the user
        $userBalance = AccountInformation::selectRaw( 'SUM(credits) as total_credits, SUM(debits) as total_debits' )
            ->where( 'account_holder', $userId )
            ->where( 'txn_time', '<', $currentTime )
            ->first();

        // Access the calculated totals
        $totalCredits = $userBalance->total_credits ?? 0;
        $totalDebits = $userBalance->total_debits ?? 0;
        $availableBalance = $totalCredits - $totalDebits;

        //Current time
        $currentTime = time();

        // Paginate user transactions
        $userTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "UNIX_TIMESTAMP(txn_time) < $currentTime" ) // Convert varchar to timestamp
            ->orderBy( 'id', 'desc' )
            ->paginate( 10 );

        // pending transaction
        $pendingTransactions = AccountInformation::where( 'account_holder', $userId )
            ->whereRaw( "UNIX_TIMESTAMP(txn_time) > $currentTime" ) // Convert varchar to timestamp
            ->orderBy( 'id', 'desc' );

        // Pass the data to the view
        return view( 'account_detail', [
            'name'                => $name,
            'ac_no'               => $ac_no,
            'totalCredits'        => $totalCredits,
            'totalDebits'         => $totalDebits,
            'availableBalance'    => $availableBalance,
            'pendingCredits'      => $pendingCredits,
            'pendingTransactions' => $pendingTransactions,
            'userTransactions'    => $userTransactions,
        ] );
    }

    public function createUser( Request $request ) {
        // Validate the form data
        $request->validate( [
            'name'  => 'required',
            'email' => 'required',
            'ac_no' => 'required',
        ] );

        // Extract data from the request
        $name = $request->input( 'name' );
        $email = $request->input( 'email' );
        $ac_no = $request->input( 'ac_no' );

        // Perform the database update
        DB::table( 'users' )->insert( [
            'name'       => $name,
            'email'      => $email,
            'ac_no'      => $ac_no,
            'created_at' => now(),
            'updated_at' => now(),
        ] );

        return redirect()->back()->with( 'success', 'Debits saved successfully.' );
    }
}
