// Seccion de categorias

// Array de objeto con los productos
// img es relativa al HTML
const productos=[
    {
    id:1,
    nombre:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 60ml, producto artesanal",
    precio: 5000,
    categoria: "Manifestacion",
    },
    {
    id:2,
    nombre:"Agua de florida",
    img: "../img/aguas de florida.webp",
    descricion: "De 100ml, producto artesanal",
    precio: 8000,
    categoria: "Manifestacion"
    },
    {
    id:3,
    nombre:"Difusor 100ml",
    img: "../img/difusores.webp",
    descricion: "Producto artesanal cordobes",
    precio: 6000,
    categoria: "Aromas",
    variedades: ["Mirra", "Sandalo"]
    },
    {
    id:5,
    nombre:"Sahumerios artesanales",
    //relativa al HTML
    img: "../img/sahumerios_artesanales.webp",
    descricion: "20cm de largo, 10 unidades",
    precio: 2000,
    categoria: "Defumacion",
    variedad: ["Almizcle y benjui", "Citrus", "Lavanda", "Melisa", "Mirra", "Nag champa", "Romero", "Sandalo", "Vainilla y coco", "Verbena", "Verbena y melisa"]
    },
    {
    id:6,
    nombre:"Sahumerios importados",
    img: "../img/sahumerios_importados.webp",
    descricion: "30cm de largo, 15 unidades",
    precio:3000,
    categoria: "Defumacion",
    variedad: ["Atrae clientes", "Atrae dinero", "Black ice", "Citronella", "Cool water", "Fresa", "Lavanda", "Lick me all over", "Limpia hogar", "Manzana canela", "Meditacion", "Om", "Palo santo", "Rosa roja", "Rosa vainilla","Sandalo"]
    },
    {
    id:7,
    nombre:"Sahumerios importados",
    img: "../img/sahumerios_importados.webp",
    descricion: "50cm de largo, 10 unidades",
    precio: 6500,
    categoria: "Defumacion",
    variedad: ["Almizcle", "Atrae dinero", "Black ice", "Canela", "Citronella", "Coco", "Fresa", "Jazmin", "Lavanda", "Limpia hogar", "Meditacion", "Mirra", "Om", "Palo santo", "Sandalo"]
    },
    {
    id:8,
    nombre:"Sahumo mediano",
    img: "../img/sahumos.webp",
    descricion: "Hecho con hierbas naturales, Xgr",
    precio: 500,
    categoria: "Defumacion",
    variedades: ["Cedron", "Laurel", "Lavanda", "Pino alimonado y mandarina", "Pino alimonado y naranja", "Romero", "Salvia"]
    },
    {
    id:9,
    nombre:"Sahumo grande",
    img: "../img/sahumos.webp",
    descricion: "Hecho con Romero natural, Xgr",
    precio: 1000,
    categoria: "Defumacion",
    },
    {
    id:10,
    nombre:"Velas 7 chackras",
    img: "../img/velas.webp",
    descricion: "Velas de hornillo aromaticas ",
    precio: 4500,
    categoria: "Velas",
    },
    {
    id:11,
    nombre:"Velas aromaticas",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 4.5cm",
    precio: 6900,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"]
    },
    {
    id:12,
    nombre:"Velas aromaticas",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 6.5cm",
    precio: 11200,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"]
    },
];

// ---------------------- CREACION PLANTILLA CARD ----------------------
// El parametro del parentesis es la manera de escribirlo en la funcion

function crearCard (producto){
    // Creo la estructura y le voy dando la informacion: article/ h2/ img/ p/ p/ boton. Luego le asigno un padre a article y los demas seran hijos de él. Tmb le hago un evento al boton.
    const cardProduct = document.createElement("article");
    cardProduct.className="cardProduct";
    const nameProduct = document.createElement("h3"); 
    nameProduct.innerText=producto.nombre;
    const imgProduct = document.createElement("img"); 
    imgProduct.src = producto.img;
    imgProduct.alt = "NOIMG";
    imgProduct.className = "imagen-producto";
    const descProduct = document.createElement("p");
    descProduct.innerText=producto.descricion;
    const precioProduct = document.createElement("p"); 
    precioProduct.innerText=`$${producto.precio}`;
    const btnCarrito = document.createElement("button"); 
    btnCarrito.innerText="Agregar";
    btnCarrito.className="boton-agregarCarrito"; //modificar css y crear una clase

    //distingo la seccion donde ubicar los cards, a partir de la clase
    const seccionCardProductos=document.querySelector('.section-cardproduct');
    // declaro que los cards son hijos de esa seccion
    seccionCardProductos.appendChild(cardProduct);
    // declaro los hijos del article que es la card
    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(imgProduct);
    cardProduct.appendChild(descProduct);
    cardProduct.appendChild(precioProduct);
    cardProduct.appendChild(btnCarrito);
    
    // Se declara aca para q cada boton tenga la funcion y porque existe producto.id. Asi adquiero el id del producto elegido 
    btnCarrito.onclick=()=>agregarCarrito(producto.id);
};
// ---------------------- CREACION DE TODAS LAS CARDS ----------------------
//con cada objeto del array, creo una card
    productos.forEach(e=> crearCard(e));

// ---------------------- BOTON VER MAS ----------------------
const seccionProductos=document.querySelector('.section-product');
const btnVerMas = document.createElement("button"); 
btnVerMas.innerText="Ver mas";
btnVerMas.className="boton-vermas";
seccionProductos.appendChild(btnVerMas);

// ---------------------- ARMADO DE CARRITO ----------------------

// Adquiero el carrito del storage
let carrito=JSON.parse(localStorage.getItem("carrito"));
// Si no existe en storage, lo inicio vacio
if(!carrito){
    carrito=[];
};

// FUNCION DE AGREGAR PRODUCTO AL CARRITO
function agregarCarrito(idElegido){
// identifico el producto al que aprete el boton
    let productoElegido=productos.find(e => e.id===idElegido);
// verifico si el producto ya esta en el carrito (.some da true si el elemento que pasaste existe al menos una vez)
    if(carrito.some(e => e.id===productoElegido.id)){
// El producto ESTA, uso MAPS para recorrer el carrito
        carrito=carrito.map(e => {
            if (e.id===productoElegido.id){
// lo que hago en el elemento que coincide, sumo 1
                return{
                    ...e,
                    cantidad: e.cantidad+1,
                };
            }else{
// lo que hago en los elemento que no coincide, sin cambios
                return e;    
            }
        });     
    }else{
//NO ESTA, agrego el objeto producto elegido + cantidad:1
        carrito.push({...productoElegido, cantidad: 1});
    };
}
// ---------------------- CREO ESPACIO PARA CARRITO ----------------------

const pru=[{
    id:12,
    nombre:"Velas aromaticas",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 6.5cm",
    precio: 11200,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"],
    cantidad: 1
    },{
    id:12,
    nombre:"Velas 7",
    img: "../img/velas.webp",
    descricion: "Lata de mandala 6.5cm",
    precio: 5,
    categoria: "Velas",
    variedades: ["Jazmin", "Lavanda", "Vainilla"],
    cantidad: 3
    }
];

// Creacion del card y su contenido
function mostrarCarrito(e){
    const cardCarrito=document.createElement("article");
    cardCarrito.className="card-carrito";
    const nameProductoCarrito = document.createElement("h4");
    nameProductoCarrito.innerText=e.nombre;
    const precioProductoCarrito = document.createElement("p"); 
    precioProductoCarrito.innerText=`Precio unitario: $${e.precio}`;
    const cantProductoCarrito = document.createElement("p"); 
    cantProductoCarrito.innerText=`Cantidad: ${e.cantidad}`;const sumaProductoCarrito = document.createElement("p"); 
    sumaProductoCarrito.innerText=`Suma: $${e.precio*e.cantidad}`;


    //Tomo la seccion donde ira ubicado el carrito y la declaro padre
    const seccionCarrito=document.querySelector('.section-carrito');
    seccionCarrito.appendChild(cardCarrito);
    cardCarrito.appendChild(nameProductoCarrito);
    cardCarrito.appendChild(precioProductoCarrito);
    cardCarrito.appendChild(cantProductoCarrito);    cardCarrito.appendChild(sumaProductoCarrito);
    
}
pru.forEach(e=> mostrarCarrito(e));

// ---------------------- MOSTRAR CARRITO ----------------------

// ---------------------- VACIAR CARRITO ----------------------