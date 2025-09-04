<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'csrf-token'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:8000',
        'https://localhost:5173',
        'https://localhost:5174',
        'http://localhost:5175',
        'http://127.0.0.1:8080',
        'http://localhost:8080',
        'https://jalgoanplanning.demovoting.com',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];