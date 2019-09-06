<?php header("Access-Control-Allow-Origin: http://test.gtsxyz.beget.tech"); ?>
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

mail("lab.kdstroy@yandex.ru", "Заявка с сайта", "ФИО:".$name.". Телефон: ".$tel ,"From: info@ksh.ru \r\n");
}
?>
