<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Allegation;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $allegations = Allegation::with(["suspect", "victim", "reporter", "stakeholders"])->latest()->take(5)->get();

        return Inertia::render('Dashboard/Index', [
            "allegations" => $allegations
        ]);
    }
}
