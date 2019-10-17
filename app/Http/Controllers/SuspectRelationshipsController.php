<?php

namespace App\Http\Controllers;

use App\Models\SuspectRelationship;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SuspectRelationshipsController extends Controller
{
    public function index() 
    {
        $relationships = SuspectRelationship::latest()->get();

        return Inertia::render("Relationships/Index", [
            "relationships" => $relationships
        ]);
    }

    public function store() 
    {
        SuspectRelationship::create(request(["name"]));
        
        return \Redirect::back();
    }
}
