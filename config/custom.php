<?php
/**
 * Created by PhpStorm.
 * User: liudian
 * Date: 9/23/17
 * Time: 15:47
 */

return [
    //是否开启系统日志记录功能
    'operation_log' => env('OPERATION_LOG', true),

    //游戏服接口地址
    'game_server_api_address' => env('GAME_SERVER_API_ADDRESS'),

    //是否开启邮件通知(新的库存申请，通知管理员)
    'email_notification' => env('EMAIL_NOTIFICATION', false),

    'cron_task_log' => storage_path('logs/' . env('CRON_TASK_LOG', 'artisan.log')),

];