@component('mail::message')
# Introduction

Verify your email

@component('mail::button', ['url' => url('verify_email/'.$email)])
Verify Email
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent