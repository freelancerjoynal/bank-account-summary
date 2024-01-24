<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class customBalanceController extends Controller {
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
            'balance'     => $balance,
            'showbalance' => $showbalance,
        ] );

        return redirect()->back();

    }
}
