@component('mail::message')
# {{ optional($allegation->type)->name }} Case
{{ $allegation->description }}


## Case details
<table style="border: 1px solid #A0AEC0; text-align:left; border-collapse: collapse; width: 100%; margin-bottom: 18px;">
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Type</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->type)->name }}</td>
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
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Name</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->victim)->name }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Estimated Age</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->victim)->age }} years old</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Description</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->victim)->description }}</td>
    </tr>
</table>

## Suspect details
<table style="border: 1px solid #A0AEC0; text-align:left; border-collapse: collapse; width: 100%;">
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Name</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->suspect)->name ?? '-' }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Relationship</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->suspect)->relationship }}</td>
    </tr>
    <tr>
        <th style="border: 1px solid #A0AEC0; padding: 8px 10px; width: 33%;">Description</th>
        <td style="border: 1px solid #A0AEC0; padding: 8px 10px;">{{ optional($allegation->suspect)->description }}</td>
    </tr>
</table>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
