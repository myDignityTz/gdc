<?php

use Illuminate\Database\Seeder;

class RegionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $regions = [
            [
                
                "name" => "Arusha",
                "districts" => [
                    [ "name" => "Arumeru" ],
                    [ "name" => "Arusha City" ],
                    [ "name" => "Karatu" ],
                    [ "name" => "Longido" ],
                    [ "name" => "Meru" ],
                    [ "name" => "Monduli" ],
                    [ "name" => "Ngorongoro"]
                ]
            ],
            [
                
                "name" => "Dar es salaam",
                "districts" => [
                    [ "name" => "Ilala" ],
                    [ "name" => "Kinondoni" ],
                    [ "name" => "Temeke" ],
                    [ "name" => "Kigamboni" ],
                    [ "name" => "Ubungo" ]
                ]
            ],
            [
                "name" => "Dodoma",
                "districts" => [
                    [ "name" => "Bahi" ],
                    [ "name" => "Chamwino" ],
                    [ "name" => "Chemba" ],
                    [ "name" => "Dodome" ],
                    [ "name" => "Kondoa" ],
                    [ "name" => "Kongwa" ],
                    [ "name" => "Mpwapwa" ]
                ]
            ]
        ];

        foreach ($regions as $value) {
            $region = \App\Models\Region::create(["name" => $value["name"]]);
            foreach ($value["districts"] as $district) {
                \App\Models\District::create([
                    "name" => $district["name"],
                    "region_id" => $region->id
                ]);
            }
        }
    }
}
