<?php

Auth::routes(['verify' => true]);

Route::inertia("/",             "Static/Home");
Route::inertia("about",         "Static/About");
Route::inertia("contact",       "Static/Contact");
Route::inertia("stories",       "Static/Stories");
Route::inertia("how_we_work",   "Static/HowWeWork");

Route::get('home', 'HomeController@index')->name('home');
Route::post("allegations/{allegation}/stakeholders", "AllegationStakeholderController@store");
Route::patch("allegations/{allegation}/statuses", "AllegationStatusController@update");
Route::patch("allegations/{allegation}/forward", "ForwardAllegationController@update");
Route::get("report_issues", "ReportIssuesController@create");
Route::post("report_issues", "ReportIssuesController@store");

Route::resource("allegations", "AllegationsController");
Route::resource("stakeholders", "StakeholdersController");
Route::resource("users", "UsersController");
Route::resource("allegation_types", "AllegationTypesController");
Route::resource("regions", "RegionsController");
Route::resource("districts", "DistrictsController");
Route::resource("relationships", "SuspectRelationshipsController");