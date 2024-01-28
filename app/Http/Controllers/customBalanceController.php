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
        $description = $req->description;
        $txn_time = $req->txn_time;

        AccountInformation::where( 'id', $trxid )->update( [
            'description' => $description,
            'credits'     => $credit,
            'debits'      => $debit,
            'txn_time'    => strtotime( $txn_time ),
            'txn_date'    => $txn_time,
        ] );
        return redirect()->route( 'dashboard' );
    }

    //Delete transactions
    public function deleteTransactions( Request $req ) {
        $id = $req->id;
        AccountInformation::where( 'id', $id )->delete();
        return redirect()->back();
    }

    //profile update
    public function profileUpdate( Request $req ) {
        $id = $req->userid;
        $username = $req->username;
        $useraccount = $req->useraccount;

        User::where( 'id', $id )->update( [
            'name'  => $username,
            'ac_no' => $useraccount,
        ] );
        return redirect()->route( 'dashboard' );

    }

}
