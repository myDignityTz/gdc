<?php

namespace App\Http\Controllers;

use App\Models\Allegation;
use App\Models\Ambassador;
use App\Models\HomeEnvironment;
use App\Models\Reporter;
use App\Models\SchoolEnvironment;
use App\Models\Suspect;
use App\Models\Victim;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Models\Region;
use App\Models\AllegationType;
use App\Models\SuspectRelationship;
use Illuminate\Http\Request;

class ReportIssuesController extends Controller
{
    public function create()
    {
        return Inertia::render('Static/Allegation', [
            "types" => AllegationType::with("categories")->get(),
            "regions" => Region::with("districts")->get(),
            "relationships" => SuspectRelationship::get()
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            "type_id" => "required",
            "category_id" => "required",
            "description" => "required",
            "victim" => ["required", "array"],
            "victim.name" => ["required"],
            "victim.age" => ["required"],
            "victim.description" => ["required"],
            "suspect.name" => ["required"],
            "suspect.relationship" => ["required"],
            "suspect.description" => ["required"],
            "reporter" => ["required", "array"],
            "reporter.email" => ["email", "nullable"],
            "reporter.phone" => ["phone:TZ", "nullable"],
            "environment_type" => ["required", Rule::in(['school', 'home'])],
            "environment" => "required|array",
            "environment.name" => "required_if:environment_type,school",
            "environment.type" => "required_if:environment_type,school",
            "environment.level" => "required_if:environment_type,school",
            "environment.district_id" => "required",
            "environment.region_id" => "required",
            "environment.street" => "required",
        ]);

        $victim     = Victim::Create(request("victim"));

        $suspect    = Suspect::create(request("suspect"));

        if(request("environment_type") == "school") {
            $environment = SchoolEnvironment::create(request("environment"));
        }

        if(request("environment_type") == "home") {
            $environment = HomeEnvironment::create(request("environment"));
        }

        if (auth()->check()) {
            $reporter_id = auth()->user()->reporter->id;
        } else {
            $reporter_id = null;
        }

        $allegation = Allegation::create([
            "type_id" => request("type_id"),
            "category_id" => request("category_id"),
            "environment" => request("environment_type"),
            "reporter_id" => $reporter_id,
            "victim_id" => $victim->id,
            "suspect_id" => $suspect->id,
            "description" => request("description"),
            "user_id" => auth()->id()
        ]);

        $environment->allegation()->save($allegation);

        Ambassador::create([
            "name" => request("reporter.name", 'Anonymous'),
            "email" => request("reporter.email"),
            "phone" => request("reporter.phone"),
        ])->reporter()->save(new Reporter());

        return redirect()->back()->with('status', 'Case was reported successfully');
    }
}
