<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
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

        return Inertia::render("Districts/Index", [
            "regions" => Region::get(),
            "districts" => $districts,
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            "name" => "required",
            "region_id" => "required"
        ]);

        District::create(request(["name", "region_id"]));

        return Response::json([]);
    }

    public function update(Request $request, District $district)
    {
        $this->validate($request, [
            "name" => "required",
            "region_id" => "required"
        ]);

        $district->update(request(["name", "region_id"]));

        return Response::json([]);
    }

    public function destroy(District $district)
    {
        $district->delete();

        return Response::json([]);
    }
}
