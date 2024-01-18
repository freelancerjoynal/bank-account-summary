<?php

namespace App\Http\Controllers;

use App\Models\statement;
use Illuminate\Http\Request;

class statementController extends Controller {
    //view statemetns page
    public function viewStatements() {
        $query = statement::orderBy( 'id', 'DESC' )->get();

        return view( 'statements' )->with( 'statements', $query );
    }

    //admin show
    public function adminShow() {
        $statements = statement::orderBy( 'id', 'DESC' )->get();

        return view( 'adminDashboard.statements' )->with( 'statements', $statements );

    }

    //Create a statement
    public function createStatement( Request $request ) {
        $statementName = $request->statementName;
        $insert = statement::insert( [

            'name' => $statementName,
        ] );

        if ( $insert ) {
            return redirect()->back();
        } else {
            return 'An unknown error occurred – please try again later';
        }
    }

    //delete statement based on id
    public function deleteStatement( Request $request ) {
        $id = $request->id;
        $del = statement::where( 'id', $id )->delete();
        return redirect()->back();
    }
}
