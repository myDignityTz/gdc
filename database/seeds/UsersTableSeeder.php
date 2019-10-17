<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'admin',
                'title' => 'System Administrator',
                "abilities" => [
                    [
                        'name' => 'create-users',
                        'title' => 'Add Users',
                    ],
                    [
                        'name' => 'view-users',
                        'title' => 'View Users',
                    ],
                    [
                        'name' => 'edit-users',
                        'title' => 'Edit Users',
                    ],
                    [
                        'name' => 'delete-users',
                        'title' => 'Delete Users',
                    ]
                ]
            ],
            [
                'name' => 'auditor',
                'title' => 'Auditor',
                "abilities" => []
            ],
            [
                'name' => 'ambassador',
                'title' => 'Ambassador',
                "abilities" => [
                    [
                        'name' => 'create-allegations',
                        'title' => 'Add Allegations',
                    ],
                    [
                        'name' => 'view-allegations',
                        'title' => 'View Allegations',
                    ],
                    [
                        'name' => 'edit-allegations',
                        'title' => 'Edit Allegations',
                    ],
                    [
                        'name' => 'delete-allegations',
                        'title' => 'Delete Allegations',
                    ]
                ]
            ]
        ];

        foreach($roles as $attributes) {

            $role = Bouncer::role()->firstOrCreate([
                "name" => $attributes["name"],
                "title" => $attributes["title"],
            ]);

            foreach($attributes["abilities"] as $abilities){
                $ability = Bouncer::ability()->firstOrCreate($abilities);
                Bouncer::allow($role)->to($ability);
            }
        }

        $user = factory(\App\User::class)->create([
            "name" => "David Pella",
            "email" => "admin@theexpert.co.tz"
        ]);

        Bouncer::assign("admin")->to($user);


        $user->reporter()->save(new \App\Models\Reporter);
    }
}
