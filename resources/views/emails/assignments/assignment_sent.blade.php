@component('mail::message')

Your assignment topic is : <br>
<p>{{$desc}}</p>
<br>
<p>Submission Date: {{$submit_date}}</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent