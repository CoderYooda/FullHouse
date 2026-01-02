@extends('admin.layouts.main')
@section('content')

    <h2 class="az-content-title">Каталог сезонов <a href="{{ route('admin.seasons.new') }}" class="btn btn-slim btn-success float-right">Создать</a></h2>
    <div class="row row-sm">
        <div class="col-lg-12 ht-lg-100p">

            @if ($errors->any())
                @foreach ($errors->all() as $error)
                    <div class="alert alert-info">{{ $error }}</div>
                @endforeach
            @endif

            @foreach($seasons as $season)
                    <div class="card card-dashboard-five mb-2">
                        <div class="card-header">
                            <h6 class="card-title">{{ $season->name }}</h6>
                            <span class="d-block"> c {{ $season->start_date->translatedFormat('d F') }} по {{ $season->end_date->translatedFormat('d F') }}</span>
                        </div><!-- card-header -->
                    </div>
            @endforeach
        </div><!-- col -->
    </div><!-- row -->
    {{ $seasons->links() }}
@endsection
