<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Allegation;
use App\Models\Victim;
use App\Models\Suspect;
use App\Models\Stakeholder;
use App\Models\Region;
use App\Models\AllegationType;
use App\Models\SchoolEnvironment;
use App\Models\HomeEnvironment;
use App\Models\SuspectRelationship;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AllegationRequest;

class AllegationsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        if (auth()->user()->isAn('admin')){
            $allegations = Allegation::with(["suspect", "victim", "reporter", "stakeholders"])->latest()->get();
        } else {
            $allegations = Allegation::with(["suspect", "victim", "reporter", "stakeholders"])
                ->latest()
                ->where("user_id", auth()->id())
                ->get();
        }


        return Inertia::render("Allegations/Index", [
            "allegations" => $allegations,
            "stakeholders" => Stakeholder::get(),
        ]);
    }

    public function create()
    {
        return Inertia::render("Allegations/Create", [
            "types" => AllegationType::with("categories")->get(),
            "regions" => Region::with("districts")->get(),
            "relationships" => SuspectRelationship::get()
        ]);
    }

    public function store(AllegationRequest $request)
    {
        $victim     = Victim::Create(request("victim"));

        $suspect    = Suspect::create(request("suspect"));

        if(request("environment_type") == "school") {
            $environment = SchoolEnvironment::create(request("environment"));
        }

        if(request("environment_type") == "home") {
            $environment = HomeEnvironment::create(request("environment"));
        }

        $allegation = Allegation::create([
            "type_id" => request("type_id"),
            "category_id" => request("category_id"),
            "environment" => request("environment_type"),
            "reporter_id" => auth()->user()->reporter->id,
            "victim_id" => $victim->id,
            "suspect_id" => $suspect->id,
            "description" => request("description"),
            "user_id" => auth()->id()
        ]);

        $environment->allegation()->save($allegation);

        if($request->has('evidence')) {
            foreach ($request->file('evidence') as $attachment) {
                $allegation->addMedia($attachment)
                    ->preservingOriginal()
                    ->toMediaCollection('evidence');
            }
        }

        return Redirect::route("allegations.index");
    }
}
