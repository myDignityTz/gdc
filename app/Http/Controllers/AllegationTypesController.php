<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\AllegationType;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllegationTypesController extends Controller
{
    public function __construct() 
    {
        $this->middleware("auth");
    }

    public function index() 
    {
        $types = AllegationType::latest()->get();

        return Inertia::render("AllegationTypes/Index", [
            "types" => $types
        ]);
    }

    public function store()
    {
        AllegationType::create(request(["name"]));

        return \Redirect::back();
    }
}
