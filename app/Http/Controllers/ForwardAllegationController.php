<?php

namespace App\Http\Controllers;

use App\Mail\CaseWasReported;
use App\Models\Allegation;
use App\Models\Stakeholder;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForwardAllegationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function update(Request $request, Allegation $allegation) 
    {
        $allegation->stakeholders()->updateExistingPivot(request("stakeholder_id"), [
            "status" => "current",
            "forwarded_at" => now()
        ]);

        $stakeholder = Stakeholder::find(request("stakeholder_id"));

        //\Mail::to($stakeholder)->send(new CaseWasReported($allegation));
        \Mail::to("daviejaco@gmail.com")->send(new CaseWasReported($allegation));

        return \Redirect::back();
    }
}
