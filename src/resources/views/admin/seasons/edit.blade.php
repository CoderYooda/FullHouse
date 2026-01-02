@extends('admin.layouts.main')
@section('content')

    <h2 class="az-content-title">Создание нового сезона</h2>
    <div class="mb-3">

        <form action="{{ route('admin.seasons.save') }}" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{$season->id ?? null}}">
            <div class="az-content-label mg-b-5">Базовые данные</div>
            <div class="row row-xs">
                <div class="col-md-12 mb-3">
                    <div class="az-form-group">
                        <label class="form-label">Описание сезона</label>
                        <input type="text" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('title')) is-invalid @else is-valid @endif
                        @endif
                        " name="title"
                               placeholder="Например: Winter 3 season"
                               value="{{ old('title') ?? $season->title ?? null}}"
                        >
                    </div>
                </div>
            </div>
            <div class="az-content-label mg-b-5">Время</div>
            <div class="row row-xs">
                <div class="col-md-6 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Дата начала сезона:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="date" class="form-control
                    @if (count($errors) > 0)
                        @if($errors->has('start_date')) is-invalid @else is-valid @endif
                    @endif
                    " value="{{ old('start_date') ?? $season?->start_date->format('Y-m-d') ?? Carbon\Carbon::today()->format('Y-m-d') }}" name="start_date" />
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Дата окончания сезона:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="date" class="form-control
                    @if (count($errors) > 0)
                        @if($errors->has('end_date')) is-invalid @else is-valid @endif
                    @endif
                    " value="{{ old('end_date') ?? $season?->end_date->format('Y-m-d') ?? Carbon\Carbon::today()->format('Y-m-d') }}" name="end_date" />
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Сохранить</button>
            @if($season)
                <a href="{{ route('admin.seasons.view', $season->id) }}" class="btn btn-success float-right">Выйти без сохранения</a>
            @else
                <a href="{{ route('admin.seasons.index') }}" class="btn btn-success float-right">Выйти без сохранения</a>
            @endif
        </form>
    </div>
@endsection
