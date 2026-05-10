// Seccion de 

// Array de objeto con los productos
// img es relativa al HTML
const productos=[
    {
    id:1,
    name:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 60ml, producto artesanal",
    precio: 5000,
    categoria: "Manifestacion",
    },
    {
    id:2,
    name:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 100ml, producto artesanal",
    precio: 8000,
    categoria: "Manifestacion"
    },
    {
    id:3,
    name:"Difusor 100ml",
    img: "../img/difusores.webp",
    descricion: "Producto artesanal, 2 variedades",
    precio: 6000,
    categoria: "Aromas",
    variedades: ["Mirra", "Sandalo"]
    },
    {
    id:5,
    name:"Sahumerios artesanales",
    //relativa al HTML
    img: "../img/sahumerios_artesanales.webp",
    descricion: "20cm de largo, 10 unidades",
    precio: 2000,
    categoria: "Defumacion",
    variedad: ["Almizcle y benjui", "Citrus", "Lavanda", "Melisa", "Mirra", "Nag champa", "Romero", "Sandalo", "Vainilla y coco", "Verbena", "Verbena y melisa"]
    },
    {
    id:6,
    name:"Sahumerios importados",
    img: "../img/sahumerios_importados.webp",
    descricion: "30cm de largo, 15 unidades",
    precio:3000,
    categoria: "Defumacion",
    variedad: ["Atrae clientes", "Atrae dinero", "Black ice", "Citronella", "Cool water", "Fresa", "Lavanda", "Lick me all over", "Limpia hogar", "Manzana canela", "Meditacion", "Om", "Palo santo", "Rosa roja", "Rosa vainilla","Sandalo"]
    },
    {
    id:7,
    name:"Sahumerios importados",
    img: "../img/sahumerios_importados.webp",
    descricion: "50cm de largo, 10 unidades",
    precio: 6500,
    categoria: "Defumacion",
    variedad: ["Almizcle", "Atrae dinero", "Black ice", "Canela", "Citronella", "Coco", "Fresa", "Jazmin", "Lavanda", "Limpia hogar", "Meditacion", "Mirra", "Om", "Palo santo", "Sandalo"]
    },
    {
    id:8,
    name:"Sahumo mediano",
    img: "../img/sahumos.webp",
    descricion: "Hecho con hierbas naturales, Xgr",
    precio: 500,
    categoria: "Defumacion",
    variedades: ["Cedron", "Laurel", "Lavanda", "Pino alimonado y mandarina", "Pino alimonado y naranja", "Romero", "Salvia"]
    },
    {
    id:9,
    name:"Sahumo grande",
    img: "../img/sahumos.webp",
    descricion: "Hecho con Romero natural, Xgr",
    precio: 1000,
    categoria: "Defumacion",
    },
    {
    id:10,
    name:"Velas 7 chackras",
    img: "../img/velas.webp",
    descricion: "Velas de hornillo aromaticas ",
    precio: 4500,
    categoria: "Velas",
    },
    {
    id:11,
    name:"Velas aromaticas",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 4.5cm",
    precio: 6900,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"]
    },
    {
    id:12,
    name:"Velas aromaticas",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 6.5cm",
    precio: 11200,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"]
    },
];

// CREACION DE CARD
function crearCard (producto){
    const cardProduct = document.createElement("article");
    cardProduct.className="cardProduct";
    const nameProduct = document.createElement("h2"); 
    nameProduct.innerText=producto.name;
    const imgProduct = document.createElement("img"); 
    imgProduct.src = producto.img;
    imgProduct.alt = "NOIMG";
    imgProduct.className = "imagen-producto";
    const descProduct = document.createElement("p"); 
    descProduct.innerText=producto.descricion;
    const precioProduct = document.createElement("p"); 
    precioProduct.innerText=`$${producto.precio}`;
    const btnCarrito = document.createElement("button"); 
    btnCarrito.innerText="Agregar al carrito";
    btnCarrito.className="boton-vermas";
    //distingo la seccion donde ubicar los cards, a partir de la clase
    const seccionProductos=document.querySelector('.section-cardproduct');
    // declaro que los cards son hijos de esa seccion
    seccionProductos.appendChild(cardProduct);
    // declaro los hijos del article que es la card
    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(imgProduct);
    cardProduct.appendChild(descProduct);
    cardProduct.appendChild(precioProduct);
    cardProduct.appendChild(btnCarrito);
    
};
//con cada objeto del array, creo una card
    productos.forEach(el=> crearCard(el));

// insercion de boton ver mas
    const seccionProductos=document.querySelector('.section-cardproduct');
    const btnVerMas = document.createElement("button"); 
    btnVerMas.innerText="Ver mas";
    btnVerMas.className="boton-vermas";
    seccionProductos.appendChild(btnVerMas);
