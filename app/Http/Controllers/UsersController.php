<?php

namespace App\Http\Controllers;

use Bouncer;
use App\User;
use App\Models\Reporter;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $users = User::with(["roles.abilities"])->latest()->get();

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
            "email" => "required|email",
            "roles" => 'required|array',
            "roles.*" => 'required',
        ]);

        $attributes["password"] = bcrypt("password");

        $user = User::create(Arr::only($attributes, ['name', 'email', 'password']));

        foreach($roles = request("roles") as $role) {
            if(in_array($role, ["ambassador", "admin"])) {
                $user->reporter()->save(new Reporter);
            }
        }

        Bouncer::sync($user)->roles($roles);

        return Response::json([]);
    }

    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            "name" => "required",
            "email" => "required|email",
            "roles" => 'required|array',
            "roles.*" => 'required',
        ]);

        $user->update(request(['name', 'email']));

        foreach($roles = request("roles") as $role) {
            if(in_array($role, ["ambassador", "admin"])) {
                $user->reporter()->save(new Reporter);
            }
        }

        Bouncer::sync($user)->roles($roles);

        return Response::json([]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Response::json([]);
    }
}
