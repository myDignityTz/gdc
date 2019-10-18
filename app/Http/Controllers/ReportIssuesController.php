<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Region;
use App\Models\AllegationType;
use App\Models\SuspectRelationship;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportIssuesController extends Controller
{
    public function create() 
    {
        return Inertia::render("Static/Allegation", [
            "types" => AllegationType::with("categories")->get(),
            "regions" => Region::with("districts")->get(),
            "relationships" => SuspectRelationship::get()
        ]);
    }
}
