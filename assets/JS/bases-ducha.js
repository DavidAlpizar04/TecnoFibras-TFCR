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
        type: "base",
        name: "Monteverde",
        description: "Largo:120cm<br>Ancho:120cmx70cmx70cm<br>Profundidad:13.5cm",
        image: "./assets/Imagenes/Bases/Monteverde.jpg" 
    },
    {
        id: 2,
        type: "base",
        name: "Diana",
        description: "Largo:125cm<br>Ancho:83cm<br>Profundidad:7cm",
        image: "./assets/Imagenes/Bases/Diana.jpg"
    },
    {
        id: 3,
        type: "base",
        name: "Zarcero",
        description: "Largo:100cm<br>Ancho:90cm<br>Profundidad:14cm",
        image: "./assets/Imagenes/Base de ducha logo.jpg"
    },
    {
        id: 4,
        type: "base",
        name: "Miramar",
        description: "Largo:92cm<br>Ancho:76cm<br>Profundidad:14,5cm",
        image: "./assets/Imagenes/Bases/Miramar.jpg" 
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

