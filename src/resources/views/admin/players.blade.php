@extends('admin.layouts.main')
@section('content')
    <h2 class="az-content-title">Пользователи проекта</h2>
    <div class="row row-sm mg-b-20">
        <div class="col-lg-12 ht-lg-100p">
            <div class="card card-dashboard-pageviews mb-2">
                    @foreach($users as $user)
                    <div class="az-list-item">
{{--                        <div class="row" style="width: fit-content;">--}}
{{--                            <div class="col">--}}

{{--                            </div>--}}
                            <div class="d-flex">
                                <div class="az-img-user mr-2"><img src="{{ $user->telegramUser?->photo_url ?? '/img/coin.svg' }}" alt=""></div>
                                <div>
                                    <h6 class="mg-b-0 tx-inverse no-wrap" style="white-space: nowrap; max-width: 144px">{{ $user->public_name }}</h6>
                                    <small class="tx-11 tx-gray-500 no-wrap" style="white-space: nowrap;">ID пользователя: {{ $user->id }}</small>
                                </div>

                            </div>
{{--                        </div>--}}
                        <div class="">
                            <h6 class="tx-primary">Участий в турнирах: {{ $user->tournaments()->count() }}</h6>
                            <span>ID пользователя: {{ $user->id }}</span>
                        </div>
                    </div><!-- list-group-item -->
                    @endforeach
                </div>
            {{ $users->links() }}
        </div>
    </div><!-- col -->
@endsection
