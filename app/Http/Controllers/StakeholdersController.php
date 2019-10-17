<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Stakeholder;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StakeholdersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index() 
    {
        $stakeholders = Stakeholder::with(["allegations"])->latest()->get();

        return Inertia::render("Stakeholders/Index", [
            "stakeholders" => $stakeholders
        ]);
    }
}
