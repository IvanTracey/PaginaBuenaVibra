// Array de objeto con los productos
// img es relativa al HTML
const productos=[
    {
    id:1,
    name:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 60ml, producto artesanal",
    precio: 5000,
    categoria: "Agua de florida"
    },
    {
    id:2,
    name:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 100ml, producto artesanal",
    precio: 8000,
    categoria: "Agua de florida"
    },
    {
    id:3,
    name:"Difusor de mirra",
    img: "../img/difusores.webp",
    descricion: "De 100ml, producto artesanal",
    precio: 6000,
    categoria: "Difusor"
    },
    {
    id:4,
    name:"Difusor de sandalo",
    img: "../img/difusores.webp",
    descricion: "De 100ml, producto artesanal",
    precio: 6000,
    categoria: "Difusor"
    },
    {
    id:5,
    name:"Sahumerios artesanales",
    //relativa al HTML
    img: "../img/sahumerios.webp",
    descricion: "20cm de largo, 10 unidades",
    precio: 2000,
    categoria: "Sahumerios"
    },
    {
    id:6,
    name:"Sahumerios importados",
    img: "../img/sahumerios.webp",
    descricion: "25cm de largo,, 15 unidades",
    precio:3000,
    categoria: "Sahumerios"
    },
    {
    id:7,
    name:"Sahumerios importados",
    img: "../img/sahumerios.webp",
    descricion: "50cm de largo, 10 unidades",
    precio: 6500,
    categoria: "Sahumerios"
    },
    {
    id:8,
    name:"Sahumos naturales",
    img: "../img/sahumos.webp",
    descricion: "aaaaaaa",
    precio: 6500,
    categoria: "Sahumos"
    },
    
];

// CREACION DE CARD
function crearCard (producto){
    const cardProduct = document.createElement("article");
    cardProduct.className="cardProduct";
    const nameProduct = document.createElement("h3"); 
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
