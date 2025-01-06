//Navbar
window.addEventListener("load", () => {
    const logo = document.querySelector(".logo");
    logo.classList.add("bounce");
});

let lastScrollY = window.scrollY; 
const header = document.querySelector("header");  

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;  
});

//Section Clients
function toggleSection() {
    const section = document.querySelector('.hidden-section');
    section.classList.toggle('expanded'); 
    }

//Formulario
const user = JSON.parse(localStorage.getItem('login_success')) || false;
const signInButton = document.getElementById('signInButton');
const logoutButton = document.getElementById('logout');

if (user) {
    signInButton.style.display = 'none';
    logoutButton.style.display = 'block';
} else {
    signInButton.style.display = 'block';
    logoutButton.style.display = 'none';
}

logoutButton.addEventListener('click', () => {
    Swal.fire({
        title: (`Hasta luego, ${user.name}!`),
        icon: "info",
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
        <a class="btn-logout-1-a" href="/user-auth/public/sign-in.html">Iniciar Sesión</a> 
        `,
        customClass: {
            confirmButton: "btn-logout-1",
            cancelButton: "btn-logout-2",
            popup: "popup-class",
            title: "title-class",
            icon: "icon-class",
        },
        cancelButtonText: `
        <a class="btn-logout-2" href="index.html">Volver</a>
        `,
    });
    localStorage.removeItem('login_success');
    signInButton.style.display = 'block';
    logoutButton.style.display = 'none';

});








        
//Animacion Swish de scroll

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".catalogo-container .card");
    const section = document.getElementById("catalogo");

    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionBottom >= 0) {
            // Añadir clase 'active' para activar la animación
            cards.forEach(card => card.classList.add("active"));
            cards.forEach(card => card.classList.remove("exit"));
        } else {
            // Añadir clase 'exit' para activar la animación de salida
            cards.forEach(card => card.classList.remove("active"));
            cards.forEach(card => card.classList.add("exit"));
        }
    };

    window.addEventListener("scroll", handleScroll);
});

//idioma

const flagsElement = document.getElementById("flags");

const changeLanguage = async language=> {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
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
