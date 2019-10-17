<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StakeholderTest extends TestCase
{
    use RefreshDatabase;

    use WithFaker;

    
    /** @test */
    public function display_available_stakeholders()
    {
        $this->withoutExceptionHandling();

        $response = $this->get('stakeholders');

        $response->assertStatus(200);
    }
}
