<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Region;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegionsController extends Controller
{
    public function __construct() 
    {
        $this->middleware("auth");
    }

    public function index() 
    {
        $regions = Region::with(["districts"])->latest()->get();

        return Inertia::render("Regions/Index", [
            "regions" => $regions
        ]);
    }

    public function store()
    {
        Region::create(request(["name"]));

        return \Redirect::back();
    }
}
