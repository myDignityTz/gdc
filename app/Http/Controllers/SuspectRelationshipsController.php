<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SuspectRelationship;

class SuspectRelationshipsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        $relationships = SuspectRelationship::latest()->get();

        return Inertia::render("Relationships/Index", ["relationships" => $relationships]);
    }

    public function store(Request $request)
    {
        $this->validate($request, ["name" => "required"]);

        SuspectRelationship::create(request(["name"]));

        return Response::json([]);
    }

    public function update(Request $request, SuspectRelationship $relationship)
    {
        $this->validate($request, ["name" => "required"]);

        $relationship->update(request(["name"]));

        return Response::json([]);
    }

    public function destroy(SuspectRelationship $relationship)
    {
        $relationship->delete();

        return Response::json([]);
    }
}
