<?php

use App\Models\Allegation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes(['verify' => true]);

Route::inertia("/",             "Static/Home");
Route::inertia("about",         "Static/About")->name("about");
Route::inertia("contact",       "Static/Contact")->name("contact");
Route::inertia("stories",       "Static/Stories")->name("stories");
Route::inertia("how_we_work",   "Static/HowWeWork")->name("how-we-work");

Route::get('home', 'HomeController@index')->name('home');
Route::post("allegations/{allegation}/stakeholders", "AllegationStakeholderController@store");
Route::patch("allegations/{allegation}/statuses", "AllegationStatusController@update");
Route::patch("allegations/{allegation}/forward", "ForwardAllegationController@update");
Route::get("report_issues", "ReportIssuesController@create");
Route::post("report_issues", "ReportIssuesController@store");

Route::put("account/{account}", "Api\AccountController@update");
Route::put("password/{account}", "Api\ChangePasswordController@update");

Route::resource("allegations", "AllegationsController");
Route::resource("stakeholders", "StakeholdersController");
Route::resource("users", "UsersController");
Route::resource("allegation_types", "AllegationTypesController");
Route::resource("regions", "RegionsController");
Route::resource("districts", "DistrictsController");
Route::resource("relationships", "SuspectRelationshipsController");

Route::prefix("internal_api")->namespace("InternalApi")->group(function (){
    Route::get("annual_report", function (){

        $result = \DB::select("SELECT DATE_FORMAT(created_at,'%Y-%m') AS formatted_month,MONTH(created_at)AS month_number,MONTHNAME(MAX(created_at))AS month_name,COUNT(*)AS total FROM allegations GROUP BY DATE_FORMAT(created_at,'%Y-%m'),MONTH(created_at)");

        $data = collect($result);

        $collection = Collection::times(12, function ($number) {
            return $number;
        })->map(function ($month) use ($data) {
            if ($data->contains('month_number', $month)) {
                return [
                    "month" => DateTime::createFromFormat('!m', $month)->format("M"),
                    "total" => $data->firstWhere("month_number", $month)->total
                ];
            }

            return [
                "month" => DateTime::createFromFormat('!m', $month)->format("M"),
                "total" => 0
            ];
        });

        return $collection->all();
    });
    Route::get("school_types", function (){
        $result = \DB::select("SELECT type,CASE WHEN type='private' THEN COUNT(type)WHEN type='government' THEN COUNT(type)END AS total FROM school_environments GROUP BY type");

        return collect(['private', 'government'])->map(function ($type) use ($result) {
            $result = collect($result)->firstWhere("type", $type);

            return $result ? $result : ["type" => $type, "total" => 0];
        });
    });
    Route::get("environment_types", function (){
        $result = \DB::select("SELECT environment_type AS environment,CASE WHEN environment_type='home' THEN COUNT(environment_type)WHEN environment_type='school' THEN COUNT(environment_type)END AS total FROM allegations GROUP BY environment_type");

        return collect($result);
    });
    Route::get("recent_allegations", function (){
        return Allegation::with(["suspect", "victim", "reporter", "stakeholders"])
            ->latest()
            ->take(5)
            ->get();
    });
    Route::get("top_ambassadors", function (){
        $result = \DB::select("SELECT users.name AS name, COUNT(allegations.user_id)as total FROM allegations LEFT JOIN users ON users.id=allegations.user_id GROUP BY allegations.user_id ORDER BY total LIMIT 5");

        return collect($result);
    });
    Route::get("allegation_types", function (){
        $result = \DB::select("SELECT allegation_types.name,COUNT(allegations.type_id)AS total FROM allegation_types LEFT JOIN allegations ON allegation_types.id=allegations.type_id GROUP BY allegation_types.name LIMIT 5");

        return collect($result);
    });
    Route::get("allegation_statuses", function (){

    });
    Route::get("popular_tags", function (){

    });
});
