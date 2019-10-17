<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\District;
use App\Models\Region;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DistrictsController extends Controller
{
    public function index() 
    {
        $districts  = District::with(["region"])->latest()->get();

        $regions    = Region::get();

        return Inertia::render("Districts/Index", [
            "districts" => $districts,
            "regions" => $regions
        ]);
    }

    public function store() 
    {
        District::create(request(["name", "region_id"]));
        
        return \Redirect::back();
    }
}
