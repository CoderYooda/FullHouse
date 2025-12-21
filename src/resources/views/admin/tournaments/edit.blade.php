@extends('admin.layouts.main')
@section('content')
    @if($tournament)
        <h2 class="az-content-title">Редактирование турнира #{{$tournament->id ?? null}}</h2>
    @else
        <h2 class="az-content-title">Создание турнира</h2>
    @endif
    <div class="mb-3">
        <div class="az-content-label mg-b-5">Базовые данные</div>
        <form action="{{ route('admin.tournament.save') }}" method="POST">
            @csrf
            <input type="hidden" name="id" value="{{$tournament->id ?? null}}">
            <div class="row row-xs">
                <div class="col-md-12 mb-3">
                    <div class="az-form-group">
                        <label class="form-label">Краткое описание турнира</label>
                        <input type="text" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('title')) is-invalid @else is-valid @endif
                        @endif
                        " name="title"
                               placeholder="Например: Ultra Deep Stack + Вечерний покер"
                               value="{{ old('title') ?? $tournament->title ?? null}}"
                        >
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="input-group has-danger">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Стек:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="100" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('stack')) is-invalid @else is-valid @endif
                        @endif
                        " name="stack"
                               placeholder="Например, 50000"
                               value="{{ old('stack') ?? $tournament->stack ?? 25000}}">
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Уровни от:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="1" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('levels_start')) is-invalid @else is-valid @endif
                        @endif
                        " value="{{old('levels_start') ?? $tournament->levels_start ?? 10}}" name="levels_start">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                до
                            </div>
                        </div>
                        <input type="number" step="1" class="form-control input-group-append
                        @if (count($errors) > 0)
                            @if($errors->has('levels_end')) is-invalid @else is-valid @endif
                        @endif
                        " value="{{old('levels_end') ?? $tournament->levels_end ?? 20}}" name="levels_end">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                минут
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="az-content-label mg-b-5">Блайнды</div>
            <div class="row row-xs">
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Малый блайнд:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="100" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('small_blind')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 100" value="{{old('small_blind') ?? $tournament->small_blind ?? 100}}" name="small_blind">
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Большой блайнд:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="100" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('big_blind')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 100" value="{{old('big_blind') ?? $tournament->big_blind ?? 100}}" name="big_blind">
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Анте:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="100" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('ante')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 0" value="{{old('ante') ?? $tournament->ante ?? 100}}" name="ante">
                    </div>
                </div>
            </div>
            <div class="az-content-label mg-b-5">Стоимость</div>
            <div class="row row-xs">
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Buy-in:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="50" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('buy_in')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 650" value="{{old('buy_in') ?? $tournament->buy_in ?? 650}}" name="buy_in">
                        <div class="input-group-append">
                            <span class="input-group-text">₽</span>
                        </div>
                        <div class="input-group-append tour-add-box">
                            <div class="input-group-text" style="min-width: 132px">
                                <label class="ckbox wd-16 mg-b-0">
                                    <input type="checkbox" name="free_entry" value="1"
                                       @if($tournament && $tournament->free_entry) checked @endif
                                    class="mg-0"><span>Бесплатно</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Re-entry:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="50" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('re_entry')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 650" value="{{old('re_entry') ?? $tournament->re_entry ?? 650}}" name="re_entry">
                        <div class="input-group-append">
                            <span class="input-group-text">₽</span>
                        </div>
                        <div class="input-group-append tour-add-box">
                            <div class="input-group-text" style="min-width: 132px">
                                <label class="ckbox wd-16 mg-b-0">
                                    <input type="checkbox" name="without_re_entry" value="1"
                                           @if($tournament && $tournament->without_re_entry) checked @endif
                                    class="mg-0"><span>Без Re-entry</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Add-on:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="number" step="50" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('add_on')) is-invalid @else is-valid @endif
                        @endif
                        " placeholder="Например, 650" value="{{old('add_on') ?? $tournament->add_on ?? 650}}" name="add_on">
                        <div class="input-group-append">
                            <span class="input-group-text">₽</span>
                        </div>
                        <div class="input-group-append tour-add-box">
                            <div class="input-group-text" style="min-width: 132px">
                                <label class="ckbox wd-16 mg-b-0">
                                    <input type="checkbox" name="without_add_on" value="1"
                                           @if($tournament && $tournament->without_add_on) checked @endif
                                    class="mg-0"><span>Без Add-on</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="az-content-label mg-b-5">Время</div>
            <div class="row row-xs">
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Дата турнира:
                            </div>
                        </div><!-- input-group-prepend -->
                        <input type="date" class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('event_date')) is-invalid @else is-valid @endif
                        @endif
                        " value="{{ old('event_date') ?? $tournament?->event_date->format('Y-m-d') ?? Carbon\Carbon::today()->format('Y-m-d') }}" name="event_date" />
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Начало турнира:
                            </div>
                        </div><!-- input-group-prepend -->
                        @php( $startAt = $tournament ? explode(":", (string)$tournament->start_at) : [null, null])
                        <select  class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('start_at')) is-invalid @else is-valid @endif
                        @endif
                        " name="start_at">
                            @for($i = 0; $i < 24 * 6; $i++)
                                <option
                                    @if((int)$startAt[0] == (int)($i / 6) && (int)$startAt[1] == (int)($i%6 * 10 == 0 ? '00' : $i%6 * 10)) selected @endif
                                @if(!$tournament && (int)($i / 6) == 19 && $i%6 * 10 == 0) selected @endif
                                >{{ (int)($i / 6) }}:{{ $i%6 * 10 == 0 ? '00' : $i%6 * 10 }}</option>
                            @endfor
                        </select>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text" style="min-width: 142px">
                                Регистрация до:
                            </div>
                        </div><!-- input-group-prepend -->
                        @php( $lateRegistration = $tournament ? explode(":", (string)$tournament->late_registration) : [null, null])
                        <select  class="form-control
                        @if (count($errors) > 0)
                            @if($errors->has('late_registration')) is-invalid @else is-valid @endif
                        @endif
                        " name="late_registration">
                            @for($i = 0; $i < 24 * 6; $i++)
                                <option
                                    @if((int)$lateRegistration[0] == (int)($i / 6) && (int)$lateRegistration[1] == (int)($i%6 * 10 == 0 ? '00' : $i%6 * 10)) selected @endif
                                    @if(!$tournament && (int)($i / 6) == 21 && $i%6 * 10 == 0) selected @endif
                                >{{ (int)($i / 6) }}:{{ $i%6 * 10 == 0 ? '00' : $i%6 * 10 }}</option>
                            @endfor
                        </select>
                    </div>
                </div>
            </div>
            <div class="az-content-label mg-b-5">Остальное</div>
            <div class="row row-xs">
                <div class="col-lg-3 mb-3">
                    <label class="ckbox">
                        <input type="checkbox" name="is_private" value="1"
                               @if(old('is_private') || $tournament && $tournament->is_private) checked @endif
                        ><span>Только по приглашению</span>
                    </label>
                </div>
                <div class="col-lg-3 mb-3">
                    <label class="ckbox">
                        <input type="checkbox" name="is_actual" value="1"
                               @if(old('is_actual') || $tournament && $tournament->is_actual || !$tournament) checked @endif
                        ><span>Активный (виден для игроков)</span>
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Сохранить</button>
            @if($tournament)
                <a href="{{ route('admin.tournament.view', $tournament->id) }}" class="btn btn-success float-right">Выйти без сохранения</a>
            @else
                <a href="{{ route('admin.tournaments.index') }}" class="btn btn-success float-right">Выйти без сохранения</a>
            @endif
        </form>
    </div>
@endsection
