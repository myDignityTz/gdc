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
        return $this->subject("{$this->allegation->type} Case")
            ->markdown('emails.cases.reported');
            // ->attach('/path/to/file', [
            //     'as' => 'name.pdf',
            //     'mime' => 'application/pdf',
            // ]);
    }
}
