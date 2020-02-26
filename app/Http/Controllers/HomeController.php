<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
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
        if (auth()->user()->isAn('admin')) {
            return Inertia::render('Dashboard/Index');
        }

        return Redirect::route('allegations.index');
    }
}
