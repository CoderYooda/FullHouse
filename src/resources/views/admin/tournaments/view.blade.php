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
    <div id="tournament" :tweet="123" data-tournament_id="{{ $tournament->id }}"></div>
@endsection
