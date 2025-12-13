@extends('admin.layouts.main')
@section('content')
    <div class="az-signin-wrapper">
        <div class="az-card-signin">
            <h1 class="az-logo">FullHouse Admin</h1>

            @if ($errors->any())
                @foreach ($errors->all() as $error)
                    <div class="alert alert-info">{{ $error }}</div>
                @endforeach
            @endif

            <div class="az-signin-header">
                <form method="post" action="{{ route('admin.login') }}">
                    @csrf
                    <div class="form-group">
                        <label>Логин</label>
                        <input name="name" type="text" class="form-control" placeholder="Введите имя учетной записи">
                    </div><!-- form-group -->
                    <div class="form-group">
                        <label>Пароль</label>
                        <input name="password" type="password" class="form-control" placeholder="Пароль">
                    </div><!-- form-group -->
                    <button type="submit" class="btn btn-az-primary btn-block">Войти</button>
                </form>
            </div><!-- az-signin-header -->
        </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
@endsection
