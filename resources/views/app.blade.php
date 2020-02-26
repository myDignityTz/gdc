<!DOCTYPE html>
<html class="h-full">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

        @routes
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body class="h-full antialiased bg-gray-200 text-gray-900">
        @inertia
    </body>
</html>
