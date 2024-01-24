<?php

namespace App\Http\Controllers;

use App\Models\AccountInformation;
use App\Models\User;
use Illuminate\Http\Request;

class customBalanceController extends Controller {

    //update custom main balance
    public function updateCustomBalance( Request $req ) {

        $userid = $req->userid;
        $balance = $req->custombanalce;
        $isshow = $req->isshow;

        if ( $isshow == 'on' ) {
            $showbalance = 1;
        } else {
            $showbalance = 0;
        }

        User::where( 'id', $userid )->update( [
            'custom_balance' => $balance,
            'showbalance'    => $showbalance,
        ] );

        return redirect()->back();

    }
    //update transactions
    public function updateTransactions( Request $req ) {
        $trxid = $req->trxid;
        $credit = $req->credit;
        $debit = $req->debit;

        AccountInformation::where( 'id', $trxid )->update( [
            'credits' => $credit,
            'debits'  => $debit,
        ] );
        return redirect()->route( 'dashboard' );
    }

}
