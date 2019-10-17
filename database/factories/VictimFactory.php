<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Models\Victim;

$factory->define(Victim::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
        "gender" => rand(0, 1) ? "Male" : "Female",
        "age" => rand(6, 18)
    ];
});
