<?php

namespace App\Http\Controllers;

use App\Models\Allegation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllegationStakeholderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function store(Request $request, Allegation $allegation) 
    {
        $allegation->stakeholders()->attach(request("stakeholder_id"));

        return \Redirect::route("allegations.index");
    }
}
