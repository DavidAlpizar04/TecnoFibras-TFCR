<?php

session_start();   

include ('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    $correo = $_POST['correo'];  

    if(!empty($usuario) && !empty($clave) && !empty($correo)){

        $query = "INSERT INTO usuarios (usuario, clave, fecha, correo) VALUES ('$usuario', '$clave', NOW(), '$correo')";

        mysqli_query($conx, $query);

        echo "Usuario registrado correctamente!.";
}
else{
    echo "Usuario o clave incorrecta!.";
}
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro</title>
    <link rel="stylesheet" href="/assets/form.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Lexend&family=Staatliches&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="/assets/Imagenes/Logo tecnofibras.png">
</head>
<body>

    <div class="container">
    <form method="post" action="" class="form">
        <h1>Registrate</h1>
        <!-- <label for="usuario">Usuario:</label> -->
        <input class="input" placeholder="Nombre:" type="text" id="usuario" name="usuario" required>
        <br>
        <!-- <label for="clave">Clave:</label> -->
        <input class="input" placeholder="Clave:" type="password" id="clave" name="clave" required>
        <br>
        <!-- <label for="clave">Correo:</label> -->
        <input class="input" placeholder="Correo:" type="email" id="correo" name="correo" required>
        <br>
        <input class="btn-form" type="submit" value="Registrar">
        <a class="btn-form" href="/index.php">Volver</a>
        <div class="registro-a">Ya tienes cuenta? <a href="/login.php">Inicia</a></div>
    </form>
    </div>
    <!-- <img src="/assets/ImageneS/Logo tecnofibras.png" alt=""> -->
</body>
</html>
