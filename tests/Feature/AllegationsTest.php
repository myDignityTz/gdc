<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AllegationsTest extends TestCase
{

    use RefreshDatabase;

    use WithFaker;

    /** @test */
    public function ambassador_can_report_a_allegations_for_a_victim_with_an_evidence_attached()
    {
        $this->withoutExceptionHandling();

        Storage::fake('photos');

        $this->actingAs($user = factory(\App\User::class)->create());

        $user->reporter()->save(new \App\Models\Reporter);

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type_id" => 1,
            "category_id" => 1,
            "environment_type" => "school",
            "environment" => [
                "name" => "Kibasila Secondary School",
                "type" => "government",
                "level" => "o-level",
                "street" => "Kibasila Street",
                "region_id" => 2,
                "district_id" => 1
            ],
            "victim" => [
                "name" => "Sarah James",
                "age" => 7,
                "gender" => "female",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => $this->faker->sentence
            ],
            "evidence" => [
                UploadedFile::fake()->image('photo1.jpg'),
                UploadedFile::fake()->image('photo2.jpg')
            ],
            "description" => $description = $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $this->assertDatabaseHas("allegations", [
            "status" => "pending",
            "description" => $description,
            "environment" => "school",
            "environment_id" => 1,
            "environment_type" => "App\\Models\\SchoolEnvironment"
        ]);

        // Assert one or more files were stored...
        Storage::disk('local')->assertExists('public\1\photo1.jpg');
        Storage::disk('local')->assertExists(['public\1\photo1.jpg', 'public\2\photo2.jpg']);

        // Assert one or more files were not stored...
        Storage::disk('local')->assertMissing('missing.jpg');
        Storage::disk('local')->assertMissing(['missing.jpg', 'non-existing.jpg']);

        $response->assertStatus(302);
    }

    /** @test */
    public function ambassador_can_report_a_allegations_for_a_victim_without_an_evidence()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($user = factory(\App\User::class)->create());

        $user->reporter()->save(new \App\Models\Report);

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "name" => "Sarah James",
                "age" => 7,
                "gender" => "female"
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => $this->faker->sentence
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $this->assertDatabaseHas("allegations", [
            "type" => "punching",
            "status" => "pending",
            "classification" => "physical abuse",
            "reporter_id" => $reporter->id,
            "environment" => "school",
        ]);

        $response->assertStatus(302);
    }

    /** @test */
    public function ambassador_can_report_a_allegations_for_an_anonymous_victim()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($user = factory(\App\User::class)->create());

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "age" => 7,
                "gender" => "female",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => $this->faker->sentence
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $this->assertDatabaseHas("allegations", [
            "type" => "punching",
            "status" => "pending",
            "classification" => "physical abuse",
            "reporter_id" => $reporter->id,
            "environment" => "school",
        ]);

        $response->assertStatus(302);
    }

    /** @test */
    public function victim_gender_is_required()
    {
        
        $this->actingAs($user = factory(\App\User::class)->create());

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "age" => 7,
                "gender" => "",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => $this->faker->sentence
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $response->assertSessionHasErrors("victim.gender");
    }

    /** @test */
    public function victim_age_is_required()
    {
        
        $this->actingAs($user = factory(\App\User::class)->create());

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "age" => "",
                "gender" => "female",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => $this->faker->sentence
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $response->assertSessionHasErrors("victim.age");
    }

    /** @test */
    public function suspect_description_is_required()
    {
        
        $this->actingAs($user = factory(\App\User::class)->create());

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "age" => "",
                "gender" => "female",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "teacher",
                "description" => ""
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $response->assertSessionHasErrors("suspect.description");
    }

    /** @test */
    public function suspect_relationship_is_required()
    {
        
        $this->actingAs($user = factory(\App\User::class)->create());

        $reporter = factory(\App\Models\Reporter::class)->create();

        $response = $this->post('allegations', [
            "type" => "punching",
            "classification" => "physical abuse",
            "environment" => "school",
            "reporter_id" => $reporter->id,
            "victim" => [
                "age" => "",
                "gender" => "female",
                "description" => $this->faker->sentence
            ],
            "suspect" => [
                "name" => "Rajab Said",
                "relationship" => "",
                "description" => $this->faker->sentence
            ],
            "description" => $this->faker->sentence,
            "user_id" => $user->id,
        ]);

        $response->assertSessionHasErrors("suspect.relationship");
    }
}
