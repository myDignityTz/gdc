<?php

namespace App\Mail;

use App\Models\Allegation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CaseWasReported extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $allegation;

    public function __construct(Allegation $allegation)
    {
        $this->allegation = $allegation;
    }

    public function build()
    {
        $subject = optional($this->allegation->type)->name;

        return $this->subject("Reporting {$subject} Case")->markdown('emails.cases.reported');

    }
}
