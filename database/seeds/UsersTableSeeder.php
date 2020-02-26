<?php

use App\Models\Reporter;
use App\User;
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
                        'name' => 'view-dashboard',
                        'title' => 'View Dashboard',
                    ],

                    [
                        'name' => 'view-settings',
                        'title' => 'View Settings',
                    ],


                    [
                        'name' => 'create-users',
                        'title' => 'Add Users',
                    ],
                    [
                        'name' => 'browse-users',
                        'title' => 'View Users',
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
                    ],

                    [
                        'name' => 'create-allegations',
                        'title' => 'Add Allegations',
                    ],
                    [
                        'name' => 'browse-allegations',
                        'title' => 'View Allegations',
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
                    ],


                    [
                        'name' => 'create-stakeholders',
                        'title' => 'Add Stakeholder',
                    ],
                    [
                        'name' => 'browse-stakeholders',
                        'title' => 'View Stakeholder',
                    ],
                    [
                        'name' => 'view-stakeholders',
                        'title' => 'View Stakeholder',
                    ],
                    [
                        'name' => 'edit-stakeholders',
                        'title' => 'Edit Stakeholder',
                    ],
                    [
                        'name' => 'delete-stakeholders',
                        'title' => 'Delete Stakeholder',
                    ],


                    [
                        'name' => 'create-districts',
                        'title' => 'Add Districts',
                    ],
                    [
                        'name' => 'browse-districts',
                        'title' => 'View Districts',
                    ],
                    [
                        'name' => 'view-districts',
                        'title' => 'View Districts',
                    ],
                    [
                        'name' => 'edit-districts',
                        'title' => 'Edit Districts',
                    ],
                    [
                        'name' => 'delete-districts',
                        'title' => 'Delete Districts',
                    ],

                    [
                        'name' => 'create-regions',
                        'title' => 'Add Regions',
                    ],
                    [
                        'name' => 'browse-regions',
                        'title' => 'View Regions',
                    ],
                    [
                        'name' => 'view-regions',
                        'title' => 'View Regions',
                    ],
                    [
                        'name' => 'edit-regions',
                        'title' => 'Edit Regions',
                    ],
                    [
                        'name' => 'delete-regions',
                        'title' => 'Delete Regions',
                    ],

                    [
                        'name' => 'create-suspect-relationships',
                        'title' => 'Add Suspect Relationship',
                    ],
                    [
                        'name' => 'browse-suspect-relationships',
                        'title' => 'View Suspect Relationship',
                    ],
                    [
                        'name' => 'view-suspect-relationships',
                        'title' => 'View Suspect Relationship',
                    ],
                    [
                        'name' => 'edit-suspect-relationships',
                        'title' => 'Edit Suspect Relationship',
                    ],
                    [
                        'name' => 'delete-suspect-relationships',
                        'title' => 'Delete Suspect Relationship',
                    ],


                    [
                        'name' => 'create-allegation-types',
                        'title' => 'Add Allegation Types',
                    ],
                    [
                        'name' => 'browse-allegation-types',
                        'title' => 'View Allegation Types',
                    ],
                    [
                        'name' => 'view-allegation-types',
                        'title' => 'View Allegation Types',
                    ],
                    [
                        'name' => 'edit-allegation-types',
                        'title' => 'Edit Allegation Types',
                    ],
                    [
                        'name' => 'delete-allegation-types',
                        'title' => 'Delete Allegation Types',
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
                        'name' => 'browse-allegations',
                        'title' => 'Browse Allegations',
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
            ],
            [
                'name' => 'guest-ambassador',
                'title' => 'Guest Ambassador',
                "abilities" => [
                    [
                        'name' => 'create-allegations',
                        'title' => 'Add Allegations',
                    ],
                    [
                        'name' => 'browse-allegations',
                        'title' => 'Browse Allegations',
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
                "name"  => $attributes["name"],
                "title" => $attributes["title"],
            ]);

            foreach($attributes["abilities"] as $abilities){
                Bouncer::allow($role)->to(
                    Bouncer::ability()->firstOrCreate($abilities)
                );
            }
        }

        $user = factory(User::class)->create([
            "name" => "Administrator",
            "email" => "admin@theexpert.co.tz"
        ]);

        Bouncer::assign("admin")->to($user);

        $user->reporter()->save(new Reporter);
    }
}
