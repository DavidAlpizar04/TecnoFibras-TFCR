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
        type: "pila",
        name: "Boruca",
        description: "Medidas:50cm x 50cm<br>Profundidad : 21cm",
        image: "./assets/Imagenes/Pilas/Boruca.jpg"
    },
    {
        id: 2,
        type: "pila",
        name: "Tortuga",
        description: "Medidas :50cm x 60cm<br>Profundidad :21cm",
        image: "./assets/Imagenes/Pilas/Tortuga.jpeg"
    },
    {
        id: 3,
        type: "pila",
        name: "Cachi",
        description: "Medidas :70cmx 50cm<br>Profundidad :9cm batea y 21cm tanque",
        image: "./assets/Imagenes/Pilas/Cachi.jpg"
    },
    {
        id: 4,
        type: "pila",
        name: "Brunca",
        description: "Medidas :93cm x 67cm<br>Profundidad :12cm<br>batea y 29cm tanque",
        image: "./assets/Imagenes/Pilas/Brunca.jpg"
    },
    {
        id: 5,
        type: "pila",
        name: "Huetar",
        description: "Medidas :140cm x 69cm<br>Profundidad :11cm<br>bateay 28.5 tanque",
        image: "./assets/Imagenes/Pilas/Huetar.jpg"
    },
    {
        id: 6,
        type: "pila",
        name: "Diria",
        description: "Largo:149cm<br>Ancho:54cm<br>Altura:52cm<br>Profundidad:38cm",
        image: "./assets/Imagenes/Base de ducha logo.jpg"
    },
    {
        id: 7 ,
        type: "pila",
        name: "Lindora",
        description: "Medida:130cmx60cm<br>Profundidad :20cm",
        image: "./assets/Imagenes/Base de ducha logo.jpg"
    },
    {
        id: 8,
        type: "pila",
        name: "Orosi",
        description: "Largo:48cm<br>Ancho:42.5cm<br>Profundidad :15cm",
        image: "./assets/Imagenes/Pilas/Orosi.jpg"
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

