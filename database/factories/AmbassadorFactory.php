<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Models\Ambassador;

$factory->define(Ambassador::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
    ];
});
