<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\AllegationType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

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

    public function store(Request $request)
    {
        $this->validate($request, [
            "name" => "required"
        ]);

        AllegationType::create(request(["name"]));

        return Response::json([]);
    }

    public function update(Request $request, AllegationType $allegationType)
    {
        $this->validate($request, [
            "name" => "required"
        ]);

        $allegationType->update(request(["name"]));

        return Response::json([]);
    }

    public function destroy( AllegationType $allegationType)
    {
        $allegationType->delete();

        return Response::json([]);
    }
}
