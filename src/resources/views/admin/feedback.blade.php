@extends('admin.layouts.main')
@section('content')
    <h2 class="az-content-title">Обратная связь</h2>
    <div class="row row-sm mg-b-20">
        <div class="col-lg-12 ht-lg-100p">
            @foreach($feedbacks as $feedback)
                <div class="card card-dashboard-five mb-2 @if($feedback->is_solved) t-card-inactive @endif" >
                    <div class="card-header">
                        <h6 class="card-title">{{ $feedback->type->getName() }}  @if($feedback->is_solved) (Просмотрено) @endif</h6>
                        @if ($feedback->type === \App\Enums\FeedbackType::Incident)
                            <span class="d-block">Дата инцидента {{ $feedback->incident_at?->translatedFormat('d F, l H:i') ?? 'не указана' }}</span>
                        @endif

                        <span class="d-block">Отправлено {{ $feedback->created_at->translatedFormat('d F, l H:i') }}</span>
                        <span class="d-block">от {{ $feedback->user->public_name }} @if($feedback->is_anonymous) (отправлено анонимно) @endif</span>
                    </div><!-- card-header -->
                    <div class="card-body">
                            Сообщение пользователя: {{ $feedback->message }}
                    </div>
                </div>
            @endforeach
            {{ $feedbacks->links() }}
        </div>
    </div><!-- col -->
@endsection
