<!DOCTYPE html>
<html lang="ru">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">

        <title>FullHouse Admin</title>

        <link rel="stylesheet" href="{{ mix('admin/css/azia.css') }}"/>
        <script type="text/javascript" defer src="{{ mix('admin/js/azia.js') }}"></script>

    </head>
    <body class="az-body">
        <div class="az-header">
            <div class="container">
                <div class="az-header-left">
                    <a href="{{ route('admin.index') }}" class="az-logo"><span></span> FullHouse Admin</a>
                    <a id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
                </div><!-- az-header-left -->
                <div class="az-header-menu">
                    <div class="az-header-menu-header">
                        <a href="{{ route('admin.index') }}" class="az-logo"><span></span> FullHouse</a>
                        <a href="" class="close">×</a>
                    </div>
                    <ul class="nav">
                        <li class="nav-item {{ request()->is('*/players') ? 'active' : '' }}">
                            <a href="{{ route('admin.players.index') }}" class="nav-link">Пользователи</a>
                        </li>
                        <li class="nav-item {{ request()->is('*/tournaments') ? 'active' : '' }}">
                            <a href="{{ route('admin.tournaments.index') }}" class="nav-link">Турниры</a>
                        </li>
                    </ul>
                </div>
            </div><!-- container -->
        </div><!-- az-header -->

        <div class="az-content az-content-dashboard">
            <div class="container">
                <div class="az-content-body">
                    @yield('content')
                </div><!-- az-content-body -->
            </div>
        </div><!-- az-content -->

        <div class="az-footer ht-40">
            <div class="container ht-100p pd-t-0-f">
                <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © CoderYooda@gmail.com dec 2025</span>
                <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Телеграм <a href="https://t.me/CoderYooda" target="_blank">CoderYooda</a></span>
            </div><!-- container -->
        </div><!-- az-footer -->
        <div class="az-navbar-backdrop"></div>
    </body>
</html>
