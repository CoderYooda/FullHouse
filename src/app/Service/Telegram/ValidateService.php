<?php

namespace App\Service\Telegram;

class ValidateService
{
    public function validate(string $query): bool
    {
        parse_str(urldecode($query), $params);

        if (!isset($params['hash'])) {
            return false;
        }
        $receivedHash = $params['hash'];
        unset($params['hash']);

        ksort($params);
        $dataString = '';
        foreach ($params as $key => $value) {
            $dataString .= "$key=$value\n";
        }
        $dataString = rtrim($dataString, "\n"); // Remove trailing newline

        $secret_key = hash_hmac('sha256', config('telegram.token'), 'WebAppData', true);

        $calculatedHash = hash_hmac('sha256', $dataString, $secret_key);

        return hash_equals($calculatedHash, $receivedHash);
    }
}
