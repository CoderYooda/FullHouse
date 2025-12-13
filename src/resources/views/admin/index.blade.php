<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90680653-2"></script>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Meta -->
    <meta name="description" content="Responsive Bootstrap 4 Dashboard Template">
    <meta name="author" content="BootstrapDash">

    <title>FullHouse Admin</title>

    <!-- azia CSS -->
    <link rel="stylesheet" href="{{ mix('admin/css/azia.css') }}"/>

</head>
<body>

<div class="az-header">
    <div class="container">
        <div class="az-header-left">
            <a href="/" class="az-logo"><span></span> FullHouse Admin</a>
            <a href="" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-header-menu">
            <div class="az-header-menu-header">
                <a href="index.html" class="az-logo"><span></span> azia</a>
                <a href="" class="close">&times;</a>
            </div><!-- az-header-menu-header -->
{{--            <ul class="nav">--}}
{{--                <li class="nav-item active">--}}
{{--                    <a href="/" class="nav-link">Турниры</a>--}}
{{--                </li>--}}
{{--            </ul>--}}
        </div><!-- az-header-menu -->
    </div><!-- container -->
</div><!-- az-header -->

<div class="az-content az-content-dashboard">
    <div class="container">
        <div class="az-content-body">
            <div class="row row-sm mg-b-20">

                <div class="col-lg-12 ht-lg-100p">
                    @if ($errors->any())
                        @foreach ($errors->all() as $error)
                            <div class="alert alert-info">{{ $error }}</div>
                        @endforeach
                    @endif
                    <form method="post" action="{{ route('tournament.create') }}">
                        @csrf
                        <div class="row row-sm mg-b-20">
                            <div class="col-12 col-lg">
                                <input name="title" class="form-control mb-2" placeholder="Название турнира" type="text">
                                <textarea name="description" rows="8" class="form-control" placeholder="Описание турнира"></textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-purple mb-2">Создать турнир</button>
                    </form>
                    @foreach($tournaments as $tournament)
                        <div class="card card-dashboard-one mb-2">
                            <div class="row">
                                <div class="col-5">
                                    <div class="card-header">
                                        <div>
                                            Записавшихся участников {{ $tournament->users->count() }}
                                            <h6 class="card-title">{{ $tournament->title }}</h6>
                                            <p class="card-text" style="white-space: pre-line;">
                                                {{ $tournament->description }}</p>
                                        </div>
                                    </div><!-- card-header -->
                                </div>
                                <div class="col-7 p-5">
                                    <table class="table mg-b-0">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Имя</th>
                                            <th>Рейтинговый ник</th>
                                            <th>Личка в ТГ</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($tournament->users as $user)
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{{ $user->telegramUser?->first_name }} {{ $user->telegramUser?->last_name }}</td>
                                            <td>{{ $user->public_name }}</td>
                                            <td><a href="https://t.me/{{ $user->telegramUser->username }}">{{ $user->telegramUser->username }}</a></td>
                                        </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div><!-- card -->
                    @endforeach
                </div><!-- col -->
            </div><!-- row -->
        </div><!-- az-content-body -->
    </div>
</div><!-- az-content -->

<div class="az-footer ht-40">
    <div class="container ht-100p pd-t-0-f">
        <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © CoderYooda@gmail.com dec 2025</span>
        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Телеграм <a href="https://t.me/CoderYooda" target="_blank">CoderYooda</a></span>
    </div><!-- container -->
</div><!-- az-footer -->
</body>
</html>
