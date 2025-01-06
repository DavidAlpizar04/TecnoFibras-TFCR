//Funcion turnAround
function toggleSection() {
    const section = document.querySelector('.card-inner');
    section.classList.toggle('turnAround'); // Agrega o quita la clase 'turnAround'
}

document.querySelectorAll('.sign-up-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        toggleSection();
    });
});
function toggleSection2() {
    const section = document.querySelector('.card-inner');
    section.classList.toggle('turnAround'); // Agrega o quita la clase 'turnAround'
}

document.querySelectorAll('.sign-up-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        toggleSection2();
    });
});

//Formulario
const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        Swal.fire({
            icon: "error",
            title: 'El email ya se encuentra registrado!', });
    }
Users.push({ name: name, email: email, password: password })
localStorage.setItem('users', JSON.stringify(Users))
Swal.fire({
    icon: "success",
    title: 'Usuario registrado con éxito!', });
});

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    if (!validUser) {
        Toast.fire({
            icon: "error",
            title: "Usuario o contraseña incorrectos!",  
        });
    } else {
        Toast.fire({
            icon: "success",
            title: 'Bienvenido ' + validUser.name + '!',  
        });
        localStorage.setItem('login_success', JSON.stringify(validUser));
        window.location.href = '/index.html';
    }
});

//idioma

const flagsElement = document.getElementById("flags");

const changeLanguage = async language=> {
    const requestJson = await fetch(`/assets/languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = document.querySelectorAll("[data-section]");

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});
