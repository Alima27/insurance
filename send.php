<?php
$token = "5477308157:AAEABAgRtJP3o_4bil7ZjEppizsxUrOzga4";

//Сюда вставляем chat_id
$chat_id = "-1001631132226";

//Определяем переменные для передачи данных из нашей формы
if (isset($_POST['btn'])) {
    $name2 = ($_POST["send-name"]);
    $tel2 = ($_POST["send-tel"]);
    // $file2 = ($_FILES["send-file"]);


//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Фио:' => $name2,
        'Номер телефона:' => $tel2,
        'Резюме:' => $file2,
    );


//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        // header('location: https://atlassoft.space/demo/aziz/TaxiMint/thank-you.html');
        exit();
        // echo('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}?>
