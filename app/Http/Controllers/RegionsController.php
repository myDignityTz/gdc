<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
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

        return Inertia::render("Regions/Index", ["regions" => $regions]);
    }

    public function store(Request $request)
    {
        $this->validate($request, ["name" => "required"]);

        Region::create(request(["name"]));

        return Response::json([]);
    }

    public function update(Request $request, Region $region)
    {
        $this->validate($request, ["name" => "required"]);

        $region->update(request(["name"]));

        return Response::json([]);
    }

    public function destroy(Region $region)
    {
        $region->delete();

        return Response::json([]);
    }
}
