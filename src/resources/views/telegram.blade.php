<!DOCTYPE html>
<html lang="ru" dir="ltr" data-scompiler-id="0">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <title>Gameplay</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- icon -->
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <!-- fonts -->
    <script src="https://telegram.org/js/telegram-web-app.js?2"></script>
    <!-- Telegram -->
    <script>
        window.Telegram = Telegram;
        Telegram.WebApp.lockOrientation();
    </script>
    <script>
        window.Laravel = {csrfToken: '{{ csrf_token() }}'}
    </script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}"/>
    <!-- scss -->
    <script src="{{ mix('js/app.js') }}"></script>
</head>

<body>

<div id="app"></div>
</body>
</html>
