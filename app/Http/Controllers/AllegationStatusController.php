<?php

namespace App\Http\Controllers;

use App\Models\Allegation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllegationStatusController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function update(Request $request, Allegation $allegation) 
    {
        $allegation->stakeholders()->updateExistingPivot(request("stakeholder_id"), [
            "status" => request("status")
        ]);

        return \Redirect::back();
    }
}
