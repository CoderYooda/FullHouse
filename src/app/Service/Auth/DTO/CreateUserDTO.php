<?php

namespace App\Service\Auth\DTO;

class CreateUserDTO
{
    public function __construct(
        public readonly string $login,
    ){
    }
}
