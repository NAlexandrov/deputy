<?php

$title = 'Добъемся понятных тарифов ЖКХ';
$description = 'Я помогаю собирать подписи, чтобы внести в Мосгордуму новый законопроект. Он заставит коммунальщиков обосновать свои тарифы. Присоединяйтесь!';
$base_url = 'http://deputat.fbk.info/';

mb_internal_encoding("UTF-8");
mb_regex_encoding("UTF-8");
setlocale(LC_ALL, "ru_RU.UTF-8");

// хак для facebook'a
if ( !mb_strpos($_SERVER["HTTP_REFERER"], 'deputat') ) {
    if ( !preg_match('/^FacebookExternalHit\/.*?/i', $_SERVER['HTTP_USER_AGENT']) ){
        header('Location: index.html');
        exit;
    }
}

// Просто проверка )
if ( !isset($_REQUEST['name']) && !isset($_REQUEST['email']) && !isset($_REQUEST['phone'])) exit;

// Чистим входящие данных от злобных хакеров
$user = str_replace('_', ' ', trim($_REQUEST['name']));
$user = str_replace('+', ' ', $user);
$user = preg_replace('/[\s]{2,}/', ' ', $user);
$user = mb_ereg_replace('[^a-яёА-ЯЁa-zA-Z\s]+','', $user);
$user = explode(' ', $user);
$user_fname = ( isset($user[0]) ? $user[0] : '' );
$user_sname = ( isset($user[1]) ? $user[1] : '' );

$user_email = preg_replace('/[\s]{2,}/', ' ', trim($_REQUEST['email']));
$user_email = mb_ereg_replace('[^a-zA-Z0-9\s.@_-]+','', $user_email);

$user_phone = preg_replace('/[\s]{2,}/', ' ', trim($_REQUEST['phone']));
$user_phone = mb_ereg_replace('[^0-9\s\+()-]+','', $user_phone);

if ( isset($_REQUEST['type']) ) {
    // Тут генерируем картинку
    $file = __DIR__ . "/assets/img/card.png";
    $font_redring = __DIR__ . "/assets/font/redring-medium-webfont.ttf";
    $font_myriad  = __DIR__ . "/assets/font/MyriadPro-Regular.ttf";

    header('Content-Type: image/png');
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");

    $img = LoadPNG($file);

    $color = imagecolorallocate($img, 73, 73, 73);

    $user_phone = '+7 (495) 2-300-400';
    $user_email = 'deputat@fbk.info';
    
    imagettftext($img, 18, 5, 83, 100, $color, $font_redring, $user_fname);
    imagettftext($img, 18, 5, 87, 125, $color, $font_redring, $user_sname);

    if ( ( mb_strlen($user_fname) + mb_strlen($user_sname) > 26 ) || mb_strlen($user_fname) > 13 || mb_strlen($user_sname) > 13 ) {
        imagettftext($img, 11, 5, 92, 190, $color, $font_myriad, $user_phone);
        imagettftext($img, 11, 5, 95, 210, $color, $font_myriad, $user_email);
    } else {
        imagettftext($img, 11, 5, 340, 78, $color, $font_myriad, $user_phone);
        imagettftext($img, 11, 5, 345, 98, $color, $font_myriad, $user_email);
    }

    imagepng($img);
    imagedestroy($img);
} else {
    // Тут выводим саму страничку
    header('Content-Type: text/html; charset=utf-8');

    $query_img = array(
        'name'  => $user_fname.'_'.$user_sname,
        'email' => $user_email,
        'phone' => $user_phone,
        'type'  => 'png'
    );

    $query_url = array(
        'name'  => $user_fname.'_'.$user_sname,
        'email' => $user_email,
        'phone' => $user_phone,
        'fb'    => true
    );

    $html = file_get_contents('card.html');
    $html = str_replace('{{params}}', http_build_query($query_img), $html);
    $html = str_replace('{{url}}', http_build_query($query_url), $html);
    $html = str_replace('{{name}}', $user_fname.' '.$user_sname, $html);

    $html = str_replace('{{base_url}}', $base_url, $html);
    $html = str_replace('{{title}}', $title, $html);
    $html = str_replace('{{description}}', $description, $html);
    $html = str_replace('{{img_url}}', $base_url."card.php?".http_build_query($query_img), $html);

    echo $html;
}

function LoadPNG($file) {
    // Пытаемся открыть
    $im = @imagecreatefrompng($file);

    // Если не удалось
    if(!$im) {
        // Создаем пустое изображение
        $im  = imagecreatetruecolor(150, 30);
        $bgc = imagecolorallocate($im, 255, 255, 255);
        $tc  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $bgc);

        // Выводим сообщение об ошибке
        imagestring($im, 1, 5, 5, 'Ошибка загрузки ' . $file, $tc);
    }

    return $im;
}