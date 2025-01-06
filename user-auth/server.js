const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001; // Cambia el puerto a 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const usersFilePath = path.join(__dirname, 'users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8')) || [];
    const isUserRegistered = users.find(user => user.email === email);
    if (isUserRegistered) {
        return res.status(400).json({ message: 'El usuario ya está registrado' });
    }
    users.push({ name, email, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
    res.status(201).json({ message: 'Usuario registrado con éxito' });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const usersFilePath = path.join(__dirname, 'users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.status(200).json({ message: 'Inicio de sesión exitoso' });
    }
    res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});