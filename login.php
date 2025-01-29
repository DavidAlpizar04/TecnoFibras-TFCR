<?php
session_start();
include 'db.php';

if (isset($_SESSION['usuario'])) {
    header("Location: index.php");
    exit();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $conx->real_escape_string($_POST['usuario']);
    $clave = $conx->real_escape_string($_POST['clave']);
    $correo = $conx->real_escape_string($_POST['correo']);

    if (!empty($usuario) && !empty($clave) && !empty($correo)) {
        echo '<script>
            window.onload = function() {
                document.getElementById("signInButton").style.display = "none";
                document.getElementById("logout").style.display = "block";
            };
        </script>';
        $query = "SELECT * FROM usuarios WHERE usuario = '$usuario' LIMIT 1";
        $result = $conx->query($query);

        if ($result && $result->num_rows > 0) {
            $user_data = $result->fetch_assoc();

            if ($user_data['clave'] === $clave) {
                $_SESSION['usuario'] = $user_data['usuario'];
                $_SESSION['id'] = $user_data['id'];
                header("Location: index.php");
                exit();
            } else {
                echo '<div class="mensaje">Usuario o clave incorrectos.</div>';
            }
        } else {
            echo '<div class="mensaje">Usuario o clave incorrectos.</div>';
        }
    } else {
        echo "Por favor, complete ambos campos.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="/assets/form.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Lexend&family=Staatliches&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="/assets/Imagenes/Logo tecnofibras.png">
</head>
<body>
    <div class="container">

        <form method="POST" action="" class="form">
            <h1>Inicio de Sesión</h1>
            <!-- <label for="usuario">Usuario:</label> -->
            <br>
            <input placeholder="Usuario:" class="input" type="text" id="usuario" name="usuario" required>
            <br>
            <!-- <div class="division"></div> -->
            <!-- <label for="clave">Clave:</label> -->
            <br>
            <input placeholder="Clave:" class="input" type="password" id="clave" name="clave" required>
            <br>
            <!-- <div class="division"></div> -->
            <!-- <label for="clave">Correo:</label> -->
            <br>
            <input  placeholder="Correo:" class="input" type="email" id="correo" name="correo" required>
            <br>
            <input class="btn-form" type="submit" value="Ingresar">
            <a class="btn-form" href="/index.php">Volver</a>
            <div class="registro-a">No tienes cuenta? <a href="/registro.php">Registrate</a></div>
        </form>

    </div>
    <!-- <img src="/assets/ImageneS/Logo tecnofibras.png" alt=""> -->
</body>
</html>
