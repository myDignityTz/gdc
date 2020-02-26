<?php

namespace App\Http\Controllers\Api;

use App\Rules\MatchPassword;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class ChangePasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function update(Request $request, User $account)
    {
        $this->validate($request, [
            "password_old" => ["required", new MatchPassword],
            "password" => ["required", "confirmed"],
            "password_confirmation" => ["required"],
        ]);

        $account->update([
            "password" => bcrypt(request('password'))
        ]);

        return Response::json([]);
    }
}
