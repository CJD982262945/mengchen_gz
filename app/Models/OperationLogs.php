<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OperationLogs extends Model
{
    protected $table = 'operation_logs';
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id', 'uri', 'method', 'description', 'data', 'user_agent'
    ];

    public static function add($userId, $uri, $method, $description, $userAgent = 'undefined', $data = '')
    {
        return self::create([
            'user_id' => $userId,
            'uri' => $uri,
            'method' => $method,
            'description' => $description,
            'data' => $data,
            'user_agent' => $userAgent
        ]);
    }
}