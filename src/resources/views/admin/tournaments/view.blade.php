@extends('admin.layouts.main')
@section('content')

    <h2 class="az-content-title">{{ $tournament->title }} {{ $tournament->event_date->translatedFormat('d F, l') }}, {{ $tournament->start_at }}
        @if($tournament->is_actual) <span class="tx-success">(активен)</span> @else <span class="tx-danger">(отменен)</span> @endif
    </h2>
    <div class="card card-dashboard-pageviews mb-3">
        <div class="card-body">
            @php($minDate = explode(':',$tournament->start_at))
            @php($eventDate = $tournament->event_date->hour((int)$minDate[0])->minute((int)$minDate[1]) )
            @if($eventDate > \Carbon\Carbon::now() && $tournament->is_actual)
                <span class="tour-timer">До начала : {{ $eventDate->diff(\Carbon\Carbon::now()) }}</span>
            @elseif($tournament->is_actual)
                <span class="tour-timer">Турнир начат</span>
            @else
                <span class="tour-timer">Турнир отменен</span>
            @endif

        </div><!-- card-body -->
    </div>
    <div class="mb-3">
        <a href="{{route('admin.tournament.edit', $tournament->id)}}" class="btn btn-primary">Редактировать</a>
        <form action="{{route('admin.tournament.actualToggle', $tournament->id)}}" method="POST" class="d-inline-block">
            @csrf
            <button type="submit" class="btn
        @if($tournament->is_actual) btn-danger @else btn-success @endif
        ">@if($tournament->is_actual) Отменить @else Активировать @endif</button>
        </form>
    </div>
    <div class="row row-sm">
        <div class="col-lg-12 ht-lg-100p">
            <div class="az-content-label mg-b-5">Записи на игру</div>
            <div class="card card-dashboard-pageviews mb-2">
                @if($tournament->users->count())
                    @foreach($tournament->users as $user)
                        <div class="az-list-item">
                            <div class="d-flex">
                                <div class="az-img-user mr-2"><img src="{{ $user->telegramUser?->photo_url ?? '/img/coin.svg' }}" alt=""></div>
                                <div>
                                    <h6 class="mg-b-0 tx-inverse no-wrap" style="white-space: nowrap; max-width: 144px">{{ $user->public_name }}</h6>
                                    <small class="tx-11 tx-gray-500 no-wrap" style="white-space: nowrap;">ID пользователя: {{ $user->id }}</small>
                                </div>

                            </div>
                            {{--                        </div>--}}
                            <div class="d-flex flex-column">
                                @if($user->pivot->is_actual)
                                    <div class="badge badge-success">Актуальна</div>
                                @else
                                    <div class="badge badge-danger">Отменена</div>
                                @endif
                                <div>
                                    @if($user->pivot->created_at->isToday())
                                        <span>Сегодня в {{ $user->pivot->created_at->format('H:i') }}</span>
                                    @else
                                        <span>{{ $user->pivot->created_at->translatedFormat('d F, H:i') }}</span>
                                    @endif

                                </div>
                            </div>
                        </div><!-- list-group-item -->
                    @endforeach
                @else
                    <span class="text-center">Записавшихся пользователей нет</span>
                @endif
            </div>
        </div><!-- col -->
    </div><!-- row -->
@endsection
