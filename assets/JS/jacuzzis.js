//Navbar
window.addEventListener("load", () => {
    const logo = document.querySelector(".logo");
    const bounceSound = document.getElementById("bounce-sound");
    bounceSound.play();
    bounceSound.volume = 0.3;
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

//Productos
const productos = [
    {
        id: 1,
        type: "jacuzzi",
        name: "Cahuita",
        description: "Medidas: 227cm x 200cm<br>Profundidad interna : 87cm<br>Profundidad externa 88cm<br>Galonaje: 260 Gal<br>Capacidad: 6",
        image: "./assets/Imagenes/Jacuzzi-logo.jpg" 
    },
    {
        id: 2,
        type: "jacuzzi",
        name: "Tamarindo",
        description: "Medidas: 203cm x 155cm<br>Profundidad Interna: 46.5cm<br>Profundidad externa ;47.5cm<br>Galonaje: 86 Gal<br>Capacidad: 2",
        image: "./assets/Imagenes/Jacuzzis/Tamarindo.jpg" 
    },
    {
        id: 3,
        type: "jacuzzi",
        name: "Corcovado",
        description: "Medidas: 209cm x 154cm<br>Profundidad Interna:67cm<br>Profundidad Externa: 68cm<br>Galonaje: 118 Gal<br>Capacidad: 4",
        image: "./assets/Imagenes/Jacuzzis/Corcovado.jpg"  
    },
    {
        id: 4,
        type: "jacuzzi",
        name: "Jacó",
        description: "Medidas: 183cm x 166cm<br>Profundidad Interna : 70cm<br>Profundidad externa:75cm<br>Galonaje: 151 Gal<br>Capacidad: 3",
        image: "./assets/Imagenes/Jacuzzis/Jaco.jpg"  
    },
    {
        id: 5,
        type: "jacuzzi",
        name: "Guaria",
        description: "Medidas: 150cm x 150cm<br>Profundidad interna: 40.5cm<br>Profundidad externa;41.5cm<br>Galonaje: 45 Gal<br>Capacidad: 2",
        image: "./assets/Imagenes/Jacuzzis/Guaria.jpg"  
    },
    {
        id: 6,
        type: "jacuzzi",
        name: "Montezuma",
        description: "Medidas: 150cm x 150cm<br>Profundidad interna: 46.5 cm<br>Profundidad externa :47.5cm<br>Galonaje: 75 Gal<br>Capacidad: 2",
        image: "./assets/Imagenes/Jacuzzis/Montezuma.jpg"  
    },
    {
        id: 7,
        type: "jacuzzi",
        name: "Matambú",
        description: "Medidas: 175cm x 90cm<br>Profundidad Interna : 37cm<br>Profundidad externa: 39cm<br>Galonaje: 32 Gal<br>Capacidad: 2",
        image: "./assets/Imagenes/Jacuzzis/Matambu.jpg"  
    },
    {
        id: 8,
        type: "jacuzzi",
        name: "Curú",
        description: "Medidas: 156cm x 77.5cm<br>Profundidad Interna : 39cm<br>Profundidad externa: 39cm<br>Galonaje: 25 Gal<br>Capacidad: 1",
        image: "./assets/Imagenes/Jacuzzis/Curu.jpg"  
    },
    {
        id: 9,
        type: "jacuzzi",
        name: "Barú",
        description: "Medidas: 174cm x 91cm<br>Profundidad Interna : 40cm<br>Profundidad externa: 41.5cm<br>Galonaje: 32 Gal<br>Capacidad: 1",
        image: "./assets/Imagenes/Jacuzzi-logo.jpg"  
    },
];

const productoCatalogoHTML = (producto) => {
    return `
    <div class="col">
        <div class="product">
            <img 
                src="${producto.image}" 
                alt="${producto.name}" 
                class="product-img-top"
            />
            <div class="product-body">
                <h3 class="product-title">${producto.name}</h3>
                <p class="product-text">${producto.description}</p>
            </div>
        </div>
    </div>`;
};

const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";

    for(const producto of productos) {
        catalogoHTML += productoCatalogoHTML(producto);
    }

    catalogoNodo.innerHTML = catalogoHTML;
};

mostrarCatalogo();

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
