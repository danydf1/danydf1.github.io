<?php

$mail = $_POST['Email'];
$message = $_POST['Mensaje'];
$asuntohtml = "Consulta Portfolio";

$cabecera = "From: " . $mail . " \r\n";

$message = "Este mensaje fue enviado por: " . $mail ." \r\n";
$message .= "Mensaje: " . $message . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'reitmatch@hotmail.com';
$asunto = $asuntohtml;

mail($para, $asunto, utf8_decode($message), $cabecera);

header("Location:index.html");
?>