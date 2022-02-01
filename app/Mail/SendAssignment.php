<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendAssignment extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $desc;
    public $email;
    public $date;

    public function __construct($email, $desc, $date)
    {
        $this->email = $email;
        $this->desc = $desc;
        $this->date = $date;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.assignments.assignment_sent', ['email' => $this->email, 'assign_desc' => $this->desc, 'submit_date' => $this->date])
            ->subject('Assigned your assignment');
    }
}
