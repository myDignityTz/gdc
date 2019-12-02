<?php

namespace App\Providers;

use Auth;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share('auth.user', function () {
            if ($user = auth()->user()) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    "email" => $user->email,
                    'role' => $user->role,
                    'roles' => $user->getRoles(),
                    "abilities" => $user->getAbilities()
                ];
            }
        });

        Inertia::share([
            'errors' => function () {
                return session('errors') ? session('errors')->getBag('default')->getMessages() : (object) [];
            },
            'status' => function() {
                return session('status') ? session('status') : (object) [];
            }
        ]);
    }
}
