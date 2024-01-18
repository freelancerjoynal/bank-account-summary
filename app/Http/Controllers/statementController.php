<?php

namespace App\Http\Controllers;

class statementController extends Controller {
    //view statemetns page
    public function viewStatements() {
        return view( 'statements' );
    }
}
