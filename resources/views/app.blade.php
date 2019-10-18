<!DOCTYPE html>
<html class="bg-gray-200 text-gray-900 h-full">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        {{-- @routes --}}
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body class="h-full">
        @inertia
    </body>
</html>