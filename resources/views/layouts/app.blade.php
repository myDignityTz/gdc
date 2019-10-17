<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-screen bg-purple-700 h-full w-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

    <!-- Fonts -->
    {{-- <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="h-full">
    <header class="bg-purple-700 py-5">
        <nav class="w-2/3 mx-auto">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <a class="text-white font-bold pr-4" href="/">GDC</a>
                </div>
            </div>
        </nav>
    </header>
    <main class="flex justify-center" style="height: calc(100vh - 72px);">
        <div class="w-1/3 self-center">
            @yield('content')
        </div>
    </main>
</body>
</html>