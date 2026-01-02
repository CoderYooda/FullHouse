<?php

namespace App\Enums;

enum FeedbackType : int
{
    case ApplicationIssue = 1;
    case Incident = 2;
    case Idea = 3;

    public function getName(): string
    {
        return match ($this) {
            self::ApplicationIssue => 'Предложение по работе приложения',
            self::Incident => 'Заявление об инциденте',
            self::Idea => 'Предложение идеи',
        };
    }
}
