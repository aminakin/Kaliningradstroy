<?php header("Access-Control-Allow-Origin: http://www.surkoffmotors.ru"); ?>
<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$name = urldecode($name);
$tel = urldecode($tel);
$name = trim($name);
$tel = trim($tel);

if (isset($name) && isset($tel) && $name !== '' && $tel !== '') {

mail("surkoffmotors39rus@yandex.ru", "Заявка с сайта", "ФИО:".$name.". Телефон: ".$tel ,"From: info@surkoffmotors.ru \r\n");
}
?>
