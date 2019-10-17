<?php

namespace App\Http\Controllers;

use Bouncer;
use App\User;
use App\Models\Reporter;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index() 
    {
        $users = User::with(["roles"])->latest()->get();

        $roles = Bouncer::role()->get();

        return Inertia::render("Users/Index", [
            "users" => $users,
            "roles" => $roles
        ]);
    }

    public function store(Request $request) 
    {
        $attributes = $this->validate($request, [
            "name" => "required",
            "email" => "required|email"
        ]);

        $attributes["password"] = bcrypt("password");

        $user = User::create($attributes);

        foreach(request("roles") as $role) {
            if(in_array($role, ["ambassador", "admin"])) {
                $user->reporter()->save(new Reporter);
            }

            Bouncer::assign($role)->to($user);
        }

        return \Redirect::back();
    }
}
