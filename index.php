<?php
session_start();
include 'db.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TecnoFibras CR, especialistas en Jacuzzis, Pilas y Bases de Ducha. Contamos con productos de alta calidad para tu comodidad.">
    <meta name="keywords" content="Jacuzzis, Pilas, Bases de ducha, TecnoFibras CR, Productos de baño">
    <meta name="author" content="TecnoFibras CR">
    <title>TecnoFibras CR</title>
    <link rel="icon" type="image/svg+xml" href="/assets/Imagenes/Logo tecnofibras.png">
    <link rel="icon" type="image/svg+xml" href="/assets/Imagenes/Logo tecnofibras.png">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body class="body">
    <header>
        <div class="logo">
            <a href="#home">
            <img class="logo" src="./assets/Imagenes/Logo tecnofibras.png" alt="TecnoFibras CR Logo">
            </a>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#home" data-section="navbar" data-value="home">Inicio</a></li>
                <li><a href="#catalogo" data-section="navbar" data-value="catalog">Catálogo</a></li>
                <li><a href="#about" data-section="navbar" data-value="about">Sobre Nosotros</a></li>
                <li><a href="#Contact" data-section="navbar" data-value="contact">Contáctanos</a></li>
            </ul>
        </nav>
        <div class="social-icons">
            <a href="https://www.instagram.com/tecnofibrastfcr" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="http://www.facebook.com/tecnofibrastfcr" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/tecnofibrastfcr" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/tecnofibrastfcr/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <div id="flags" class="flags">
                <div class="flags__item" data-language="es">
                    <img class="flags-img" src="./assets/Imagenes/Banderas/cr.svg" alt="bandera"/>
                </div>
                <div class="flags__item" daA>
                    <img class="flags-img" src="./assets/Imagenes/Banderas/us.svg" alt="bandera"/>
                </div>
            </div>
        </div>
        <div class="auth-btn">
            <script>
                window.onload = function() {
                    <?php if (isset($_SESSION['usuario'])): ?>
                        document.getElementById("signInButton").style.display = "none";
                        document.getElementById("logout").style.display = "block";
                    <?php endif; ?>
                };
            </script>
        <a id="signInButton" href="/login.php" data-section="navbar" data-value="sign-in">Iniciar sesión</a>
            <a id="logout"  href="/logout.php" style="display: none;" data-section="navbar" data-value="log-out">Cerrar sesión</a>
        </div>
    </header>

    <section id="home" class="home">
        <div class="content">
            <h1>
                <span id="line-1">Welcome to</span>
                <br class="responsive-break">
            </h1>
            <h2 id="line-2" class="ani-txt-1">TecnoFibras CR</h2>
        </div>
        <p data-section="home" data-value="description">
            Tu tienda especializada en Jacuzzis, Pilas y Bases de Ducha.
        </p>
    </section>

    <section class="catalogo" id="catalogo">
        <h2 class="catalogo-txt" data-section="catalogo" data-value="title">Catálogo de Productos</h2>
    <div class="catalogo-container">
        <div class="card">
            <a href="jacuzzis.html">
            <img src="./assets/Imagenes/Jacuzzi-logo.jpg" alt="catalogo-img-jacuzzi" class="catalogo-img-jacuzzi">
            <div class="card__content">
                <h3 class="card__title">Jacuzzis</h3>
                <p class="card__description" data-section="catalogo" data-value="txt-jacuzzis">Explora nuestra variedad de jacuzzis.</p>
            </div>
            </a>
        </div>
        <div class="card">
            <a href="pilas.html">
            <img src="./assets/Imagenes/Pila logo.jpeg" alt="catalogo-img-jacuzzi" class="catalogo-img-jacuzzi">
            <div class="card__content">
                <h3 class="card__title" data-section="catalogo" data-value="title-pilas">Pilas</h3>
                <p class="card__description" data-section="catalogo" data-value="txt-pilas">Revisa nuestra gama de pilas.</p>
            </div>
        </a>
        </div>
        <div class="card">
            <a href="bases-ducha.html">
            <img src="./assets/Imagenes/Base de ducha logo.jpg" alt="catalogo-img-jacuzzi" class="catalogo-img-jacuzzi">
            <div class="card__content">
                <h3 class="card__title" data-section="catalogo" data-value="title-bases">Bases de Ducha</h3>
                <p class="card__description" data-section="catalogo" data-value="txt-bases">Descubre nuestras bases de ducha de alta calidad.</p>
            </div>
        </a>
        </div>
    </div>
    </section>
    <div class="our-clients">
    <h2 data-section="clients" data-value="title">Nuestros clientes</h2>
        <i class="toggle-icon fa fa-arrow-down"  onclick="toggleSection()"></i>
    </div>
    <section class="hidden-section">
        <div class="clients-container">
            <a href="" class="client">
                <img src="./assets/Imagenes/Clientes/Arenal rooms.png" alt="" class="img-client">
            </a>
            <a href="" class="client">
                <img src="./assets/Imagenes/Clientes/Contructora izquierdo.jpeg" alt="" class="img-client">
            </a>
            <a href="" class="client">
                <img src="./assets/Imagenes/Clientes/Coopepalmares.png" alt="" class="img-client">
            </a>
            <a href="" class="client">
                <img src="./assets/Imagenes/Clientes/Terralta.png" alt="" class="img-client">
            </a>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="content">
                <div class="img-about">
                    <img src="./assets/Imagenes/WhatsApp Image 2024-12-12 at 9.56.22 PM.jpeg" alt="Sobre nosotros">
                </div>
                <div class="about-txt">
                    <h2 data-section="about" data-value="title">Sobre Nosotros</h2>
                    <p data-section="about" data-value="txt">Bienvenidos a TecnoFibras, una empresa familiar apasionadamente comprometida con la fabricación de productos de fibra de vidrio elegantes y de alta calidad.<br><br>Durante más de 20 años, nos hemos dedicado al arte de crear excepcionales piezas de fibra de vidrio que combinan perfectamente la forma y la funcionalidad.<br><br>Nuestra trayectoria está profundamente arraigada en un amor por la innovación y una búsqueda incansable de la excelencia, asegurando que cada pieza que creamos refleje los valores de calidad y artesanía que nos representan.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="Contact" id="Contact">
    <div class="txt-contact">
        <h2 data-section="contact" data-value="title">¡Esperamos con interés saber de ti!</h2>
        <p class="txt-contact-p" data-section="contact" data-value="description">
            Si deseas obtener más información sobre nuestros productos, realizar un pedido o simplemente tienes alguna pregunta, no dudes en contactarnos.<br>
            <br>📞 Teléfono: +506 2450 3645<br>
            <br>📧 Correo electrónico: info@tecnofibrastfcr.com<br>
            <br>📍Dirección: Naranjo, Autop. Bernardo Soto, Provincia de Alajuela, San Miguel, 20210<br><br>También puedes escribirnos a través de nuestras redes sociales o completar el formulario en nuestra página web.
            <br>¡Estamos aquí para ayudarte!</p>
    </div>
    <div class="container">
        <form class="form">
            <div class="form_front">
                <div class="form_details" data-section="contact" data-value="form-title">Contáctanos</div>
                <input data-section="contact" data-value="name" placeholder="Name" class="input" type="text"/>
                <input placeholder="Number" class="input" type="number">
                <input placeholder="Email" class="input" type="email">
                <input data-section="contact"data-value="" placeholder="Subjet" class="input" type="text"/>
                <textarea data-section="contact"data-value="message" placeholder="Message" class="textarea" type="text"></textarea>
                <button data-section="contact" data-value="submit" class="btn">Enviar</button>
            </div>
        </form>
    </div>
    </section>

    <section id="comentarios" class="comentarios">
    <h2>Comunidad TecnoFibras</h2>
        <form method="POST" action="" class="comentar">
            <textarea name="comentario" placeholder="Escribe un comentario..." required></textarea>
            <button type="submit" name="comentar">Comentar</button>
        </form>
    <h3>Comentarios</h3>
        <?php
        // Insertar comentario principal
        if (isset($_POST['comentar']) && !empty(trim($_POST['comentario']))) {
        $comentario = $conx->real_escape_string(trim($_POST['comentario']));
        $usuario_id = $_SESSION['id'];

        $query = "INSERT INTO comentarios (comentario, usuario, reply, fecha) VALUES ('$comentario', $usuario_id, 0, NOW())";
            if (!$conx->query($query)) {
            echo "Error al comentar: " . $conx->error;
            }
        }

        // Insertar respuesta a comentario
        if (isset($_POST['reply']) && !empty(trim($_POST['comentario'])) && isset($_POST['reply_to'])) {
            $comentario = $conx->real_escape_string(trim($_POST['comentario']));
            $usuario_id = $_SESSION['id'];
            $reply_to = intval($_POST['reply_to']);

            $query = "INSERT INTO comentarios (comentario, usuario, reply, fecha) VALUES ('$comentario', $usuario_id, $reply_to, NOW())";
            if (!$conx->query($query)) {
            echo "Error al responder: " . $conx->error;
            }
        }

        // Mostrar comentarios principales
        $query = "SELECT comentarios.*, usuarios.usuario AS nombre_usuario 
                FROM comentarios 
                JOIN usuarios ON comentarios.usuario = usuarios.id 
                WHERE comentarios.reply = 0 
                ORDER BY comentarios.id DESC";

        $result = $conx->query($query);

        while ($row = $result->fetch_assoc()) {
            echo "<div class='comentario'>";
            echo "<strong>" . htmlspecialchars($row['nombre_usuario']) . "</strong>";
            echo "<p>" . htmlspecialchars($row['comentario']) . "</p>";
            echo "<span>" . $row['fecha'] . "</span>";
            echo "<form method='POST' action=''>";
            echo "<textarea name='comentario' placeholder='Responde...' required></textarea>";
            echo "<input type='hidden' name='reply_to' value='" . $row['id'] . "'>";
            echo "<button type='submit' name='reply'>Responder</button>";
            echo "</form>";

            // Mostrar respuestas
            $reply_query = "SELECT comentarios.*, usuarios.usuario AS nombre_usuario 
                        FROM comentarios 
                        JOIN usuarios ON comentarios.usuario = usuarios.id 
                        WHERE comentarios.reply = " . $row['id'] . " 
                        ORDER BY comentarios.id ASC";

            $replies = $conx->query($reply_query);
            while ($reply = $replies->fetch_assoc()) {
                echo "<div class='respuesta'>";
                echo "<strong>" . htmlspecialchars($reply['nombre_usuario']) . "</strong>";
                echo "<p>" . htmlspecialchars($reply['comentario']) . "</p>";
                echo "<span>" . $reply['fecha'] . "</span>";
                echo "</div>";
            }

            echo "</div>";
        }
        ?>
    </section>

    <footer class="footer">
        <div class="footer-container">
            <!-- Sección 1: COMPANY -->
            <div class="footer-section">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#home" data-section="navbar" data-value="home">Inicio</a></li>
                    <li><a href="#catalogo" data-section="navbar" data-value="catalog">Catálogo</a></li>
                    <li><a href="#about" data-section="navbar" data-value="about">Sobre Nosotros</a></li>
                </ul>
            </div>
            <!-- Sección 2: LEGAL -->
            <!-- <div class="footer-section">
                <h3>LEGAL</h3>
                <ul>
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                    <li><a href="#terms-conditions">Terms & Conditions</a></li>
                </ul>
            </div> -->
            <!-- Sección 3: SOCIAL -->
            <div class="footer-section">
                <h3>SOCIAL</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/company/tecnofibrastfcr/">LinkedIn</a></li>
                    <li><a href="http://www.facebook.com/tecnofibrastfcr">Facebook</a></li>
                    <li><a href="https://www.instagram.com/tecnofibrastfcr">Instagram</a></li>
                    <li><a href="https://twitter.com/tecnofibrastfcr">X</a></li>
                </ul>
            </div>
            <!-- Sección 4: CONTACT -->
            <div class="footer-section">
                <h3>CONTACT</h3>
                <ul>
                    <li>info@tecnofibrastfcr.com</li>
                    <li>Tel: +506 2450 3645</li>
                    <li>San Miguel de Naranjo, Alajuela.</li>
                </ul>
            </div>
        </div>
        <!-- Copyright -->
        <div class="footer-bottom">
            © 2024 TecnoFibras CR. Todos los derechos reservados.
        </div>
    </footer>

    <script src="/assets/JS/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
