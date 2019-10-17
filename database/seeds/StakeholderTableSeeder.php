<?php

use App\Models\Stakeholder;
use Illuminate\Database\Seeder;

class StakeholderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stakeholders = [
            [
                "name" => "Police", 
                "alias" => "",
                "email" => "info@police.go.tz",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ],
            [
                "name" => "Fema", 
                "alias" => "",
                "email" => "info@fema.org",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ],
            [
                "name" => "Dawati la jinsia", 
                "alias" => "",
                "email" => "info@dawati.org",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ],
            [
                "name" => "Csema", 
                "alias" => "",
                "email" => "info@csema.org",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ],
            [
                "name" => "Social welfare", 
                "alias" => "",
                "email" => "info@socil-walfare.go.tz",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ],
            [
                "name" => "Unicef", 
                "alias" => "",
                "email" => "info@unicef.org",
                "description" => "Inside of your master.blade.php file include a header and footer yield. Inside the head of your master or app.blade.php add the following:"
            ]
        ];

        foreach($stakeholders as $stakeholder) {
            Stakeholder::create($stakeholder);
        }
    }
}
