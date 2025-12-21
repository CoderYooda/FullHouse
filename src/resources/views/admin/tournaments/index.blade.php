@extends('admin.layouts.main')
@section('content')

    <h2 class="az-content-title">Каталог турниров <a href="{{ route('admin.tournament.new') }}" class="btn btn-slim btn-success float-right">Создать</a></h2>
    <div class="row row-sm">
        <div class="col-lg-12 ht-lg-100p">

            @if ($errors->any())
                @foreach ($errors->all() as $error)
                    <div class="alert alert-info">{{ $error }}</div>
                @endforeach
            @endif
{{--            <form method="post" action="{{ route('tournament.create') }}">--}}
{{--                @csrf--}}
{{--                <div class="row row-sm mg-b-20">--}}
{{--                    <div class="col-12 col-lg">--}}
{{--                        <input name="title" class="form-control mb-2" placeholder="Название турнира" type="text">--}}
{{--                        <textarea name="description" rows="8" class="form-control"--}}
{{--                                  placeholder="Описание турнира"></textarea>--}}
{{--                    </div>--}}
{{--                </div>--}}

{{--                <button type="submit" class="btn btn-purple mb-2">Создать турнир</button>--}}
{{--            </form>--}}

            @foreach($tournaments as $tournament)
                    <div class="card card-dashboard-five mb-2 tournament-short
                    @if(!$tournament->is_actual) t-card-inactive @endif
                    " data-tournament_url="{{route('admin.tournament.view', $tournament->id)}}">
                        <div class="card-header">
                            <h6 class="card-title">{{ $tournament->title }}</h6>
                            <span class="d-block">{{ $tournament->event_date->translatedFormat('d F, l') }}, {{ $tournament->start_at }}</span>
                        </div><!-- card-header -->
                        <div class="card-body">
                            <div class="d-sm-flex align-items-center mb-2">
                                <div>
                                    <span class="d-inline-block wd-10 ht-10 bg-purple mg-r-10"></span> Стек: {{ number_format($tournament->stack) }} ({{$tournament->small_blind}}/{{$tournament->big_blind}}/{{$tournament->ante}})
                                </div>
                                <div class="d-none d-sm-block ml-3 mr-3"></div>
                                <div><span class="d-inline-block wd-10 ht-10 bg-purple mg-r-10"></span> Buy-in: {{$tournament->buy_in}}</div>
                                <div class="d-none d-sm-block ml-3 mr-3"></div>
                                <div><span class="d-inline-block wd-10 ht-10 bg-purple mg-r-10"></span> Re-Entry: {{$tournament->re_entry}}</div>
                                <div class="d-none d-sm-block ml-3 mr-3"></div>
                                <div><span class="d-inline-block wd-10 ht-10 bg-purple mg-r-10"></span> Add-on: {{$tournament->add_on}}</div>
                            </div><!-- col -->
                            <div class="d-sm-flex align-items-center">
                                <div>➡️Уровни: {{$tournament->levels_start}} мин - {{$tournament->levels_end}} мин</div>
                                <div class="d-none d-sm-block ml-3 mr-3"></div>
                                <div>➡️Поздняя регистрация: до 21:00</div>
                                <a href="{{ route('admin.tournament.view', $tournament->id) }}" class="btn btn-sm btn-slim btn-az-primary ml-auto d-none d-sm-block">Подробнее</a>
                            </div>
                        </div><!-- card-body -->
                    </div>
{{--                <div class="card card-dashboard-one mb-2">--}}
{{--                    <div class="row">--}}
{{--                        <div class="col-3">--}}
{{--                            <div class="card-header">--}}
{{--                                <div>--}}
{{--                                    Записавшихся--}}
{{--                                    участников {{ $tournament->users()->wherePivot('is_actual', true)->count() }}--}}
{{--                                    <h6 class="card-title">{{ $tournament->title }}</h6>--}}
{{--                                    <p class="card-text" style="white-space: pre-line;">--}}
{{--                                        {{ $tournament->description }}</p>--}}
{{--                                </div>--}}
{{--                            </div><!-- card-header -->--}}
{{--                        </div>--}}
{{--                        <div class="col-9 p-5">--}}
{{--                            <table class="table mg-b-0">--}}
{{--                                <thead>--}}
{{--                                <tr>--}}
{{--                                    <th>ID</th>--}}
{{--                                    <th>Имя</th>--}}
{{--                                    <th>Рейтинговый ник</th>--}}
{{--                                    <th>Личка в ТГ</th>--}}
{{--                                    <th>Дата записи</th>--}}
{{--                                    <th>Статус</th>--}}
{{--                                </tr>--}}
{{--                                </thead>--}}
{{--                                <tbody>--}}
{{--                                @foreach($tournament->users as $user)--}}
{{--                                    <tr @if(!$user->pivot->is_actual) style="background: #cc2a2a6b;" @endif>--}}
{{--                                        <th scope="row">{{ $user->id }}</th>--}}
{{--                                        <td>{{ $user->telegramUser?->first_name }} {{ $user->telegramUser?->last_name }}</td>--}}
{{--                                        <td>{{ $user->public_name }}</td>--}}
{{--                                        <td>--}}
{{--                                            <a href="https://t.me/{{ $user->telegramUser?->username }}">{{ $user->telegramUser?->username ?: 'нет ссылки' }}</a>--}}
{{--                                        </td>--}}
{{--                                        <td>{{ $user->pivot->created_at }}</td>--}}
{{--                                        <td>{{ $user->pivot->is_actual ? 'актуальна' : 'отменена'}}</td>--}}
{{--                                    </tr>--}}
{{--                                @endforeach--}}
{{--                                </tbody>--}}
{{--                            </table>--}}
{{--                        </div>--}}
{{--                    </div>--}}

{{--                </div><!-- card -->--}}
            @endforeach
        </div><!-- col -->
    </div><!-- row -->
    {{ $tournaments->links() }}
@endsection
