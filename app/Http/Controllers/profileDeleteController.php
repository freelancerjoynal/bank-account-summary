<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class profileDeleteController extends Controller
{
    public function deleteAccount(Request $request)
    {
        $id = $request->id;
        $query = User::where('id', $id)->delete();
        return redirect()->back();
    }
}
