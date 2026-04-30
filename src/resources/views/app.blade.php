<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <title>Gameplay</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/png" href="/favicon.ico" />
{{--    <script src="https://telegram.org/js/telegram-web-app.js?2"></script>--}}

    <script>
        window.mode = '{{ env('APP_ENV') }}';
        window.Telegram = Telegram;

        // Определяем slug и режим
        window.Slug = '{{ $company->slug ?? 'blg' }}';
        window.IsWeb = {{ isset($isWeb) && $isWeb ? 'true' : 'false' }};

        // Для Telegram-режима: сохраняем initData
        if (!window.IsWeb && window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) {
            window.TelegramInitData = window.Telegram.WebApp.initData;
        }

        window.Laravel = { csrfToken: '{{ csrf_token() }}' };

        // Блокируем ориентацию только в Telegram-режиме
        if (!window.IsWeb) {
            Telegram.WebApp.lockOrientation();
        }
        window.TelegramBotUsername = '{{ env('TELEGRAM_BOT_USERNAME') }}';
    </script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i" />
    <link rel="stylesheet" href="{{ mix('css/app_v1.css') }}"/>
    <script src="{{ mix('js/app_v1.js') }}"></script>
</head>
<body>
<div id="app"></div>
</body>
</html>