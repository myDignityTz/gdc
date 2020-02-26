<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class AccountController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function update(Request $request, User $account)
    {
        $this->validate($request, [
            "name" => "required",
            "email" => "required",
        ]);

        $account->update(request(['name', 'email']));

        return Response::json([]);
    }
}
