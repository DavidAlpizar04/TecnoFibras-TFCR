const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://127.0.0.1:5501',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secure_secret_key', // Change this to a secure key
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.redirect('/index.html'); // Updated to point to the root index.html
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const usersFilePath = path.join(__dirname, 'users.json');

    try {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8')) || [];
        const isUserRegistered = users.find(user => user.email === email);
        if (isUserRegistered) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ name, email, password: hashedPassword });
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Usuario no registrado!' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const usersFilePath = path.join(__dirname, 'users.json');

    try {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8')) || [];
        const user = users.find(user => user.email === email);
        
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            return res.redirect('/index.html');
        }
        res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.status(403).json({ message: 'No autorizado' });
    }
};

app.post('/comment', isAuthenticated, (req, res) => {
    const { comment } = req.body; // Assuming comment is sent in the request body
    const commentsFilePath = path.join(__dirname, 'comments.json');

    try {
        const comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8')) || [];
        comments.push({ user: req.session.user.email, comment }); // Store comment with user email
        fs.writeFileSync(commentsFilePath, JSON.stringify(comments));
        res.status(200).json({ message: 'Comentario enviado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el comentario' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
