<?php

use Illuminate\Database\Seeder;

class AllegationTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            [
                "name" => "Physical Abuse",
                "categories" => [
                    [ "name" => "Hitting" ],
                    [ "name" => "Shaking" ],
                    [ "name" => "Punching" ],
                    [ "name" => "Kicking" ],
                    [ "name" => "throwing" ]
                ]
            ],
            [
                "name" => "Emotional Abuse",
                "categories" => []
            ],
            [
                "name" => "Sexual Abuse",
                "categories" => []
            ],
            [
                "name" => "Neglect",
                "categories" => []
            ]
        ];

        foreach ($types as $type) {
            $allegationType = \App\Models\AllegationType::create([
                "name" => $type["name"]
            ]);
            foreach ($type["categories"] as $category) {
                \App\Models\AllegationCategory::create([
                    "name" => $category["name"],
                    "type_id" => $allegationType->id
                ]);
            }
        }
    }
}
