<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Models\Reporter;

$factory->define(Reporter::class, function (Faker $faker) {

    $reporter = factory(\App\Models\Ambassador::class)->create();

    return [
        "category_id" => function() use ($reporter) {
            return $reporter->id;
        },
        "category_type" => function() use ($reporter) {
            return get_class($reporter);
        }
    ];
});
