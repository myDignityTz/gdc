@component('mail::message')
# {{ $allegation->type }} Case
{{ $allegation->description }}


## Case details
<table style="border: 1px solid #A0AEC0; text-align:left; border-collapse: collapse; width: 100%; margin-bottom: 18px;">
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Type</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->type }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Classification</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->classification }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Environment</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->environment }}</td>
    </tr>
</table>

## Victim details
<table style="border: 1px solid #A0AEC0; text-align:left; border-collapse: collapse; width: 100%; margin-bottom: 18px;">
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Type</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->type }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Classification</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->classification }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Environment</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->environment }}</td>
    </tr>
</table>

## Suspect details
<table style="border: 1px solid #A0AEC0; text-align:left; border-collapse: collapse; width: 100%;">
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Type</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->type }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Classification</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->classification }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Environment</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ $allegation->environment }}</td>
    </tr>
</table>

@component('mail::button', ['url' => ''])
Follow up the this case
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent