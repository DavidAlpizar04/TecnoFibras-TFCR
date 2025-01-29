<?php
$servername = "localhost";
$username = "root";
$password = ""; // Cambia esto si tienes una contraseña configurada
$database = "user-tecnofibras"; // Asegúrate de que este sea el nombre correcto de tu base de datos

// Crear conexión
$conx = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conx->connect_error) {
    die("Error en la conexión: " . $conx->connect_error);
}
?>