<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" crossorigin="" href="/css/app.css">
        <title>{{ config('app.name', 'Laravel') }}</title>

    </head>
    <body class="font-sans antialiased">
        @foreach($data as $elem)
            {{$elem}}
        @endforeach
    </body>
</html>
