<?php

use App\Models\SuspectRelationship;
use Illuminate\Database\Seeder;

class RelationshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $relationships = [
            ["name" => "Mother"],
            ["name" => "Father"],
            ["name" => "Teacher"],
            ["name" => "Bother"],
            ["name" => "Sister"],
            ["name" => "Uncle"],
            ["name" => "Aunt"],
        ];

        foreach ($relationships as $relationship) {
            SuspectRelationship::create($relationship);
        }
    }
}
