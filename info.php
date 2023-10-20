<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $titulo = $_POST["titulo"];
    $precio = $_POST["precio"];
    $barrio = $_POST["barrio"];
    $garantia = $_POST["garantia"];
    $detalles = $_POST["detalles"];
    $fotos = $_POST["fotos"];
    
    // Realiza el procesamiento de los datos, como guardar en una base de datos, enviar correos electrónicos, etc.
    
    // Redirecciona a una página de éxito o muestra un mensaje de confirmación
    header("Location: exito.html");
    exit;
}
?>
