<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- font icons -->
        <link rel="stylesheet" href="/assets/vendors/themify-icons/css/themify-icons.css">
        <!-- Bootstrap + JoeBLog main styles -->
        <link rel="stylesheet" href="/assets/css/joeblog.css">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased" data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        @inertia
    </body>
    <!-- core  -->
    <script src="/assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="/assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    <!-- JoeBLog js -->
    <script src="/assets/js/joeblog.js"></script>
</html>
