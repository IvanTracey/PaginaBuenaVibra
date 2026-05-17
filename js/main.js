// Las variables van en castellano expecto CARD
// Las secciones es section-<correspondiente> y cuando es la variable es sectionCorrespondiente

// VALOR A PRODUCTOS (base de datos) ----------------------
const productos = [
    // todo en castellano expecto id e img. img es relativa al HTML
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

/* Variables globales del DOM y conexion de nodos
 main -> section-product -> (section-categorias y section-cardproduct)
      -> section-carrito -> (section- header/body/footer -carrito)
*/
const main = document.querySelector('.main-productos');
const seccionProductos = document.createElement("section");
seccionProductos.className = "section-product";
main.appendChild(seccionProductos);
const titulo = document.createElement("h1");
titulo.innerText = "Productos";
seccionProductos.appendChild(titulo);

const seccionCategorias = document.createElement("section");
seccionCategorias.className = "section-categorias";
seccionProductos.appendChild(seccionCategorias);
// Botones de categorias
const botonAdorno = document.createElement("button");
botonAdorno.className = "boton-categoria";
botonAdorno.id = "cat-adorno";
botonAdorno.innerText = "Adorno";
seccionCategorias.appendChild(botonAdorno);
const botonAromas = document.createElement("button");
botonAromas.className = "boton-categoria";
botonAromas.id = "cat-aromas";
botonAromas.innerText = "Aromas";
seccionCategorias.appendChild(botonAromas);
const botonColgantes = document.createElement("button");
botonColgantes.className = "boton-categoria";
botonColgantes.id = "cat-colgantes";
botonColgantes.innerText = "Colgantes";
seccionCategorias.appendChild(botonColgantes);
const botonDefumacion = document.createElement("button");
botonDefumacion.className = "boton-categoria";
botonDefumacion.id = "cat-defumacion";
botonDefumacion.innerText = "Defumacion";
seccionCategorias.appendChild(botonDefumacion);
const botonManifestacion = document.createElement("button");
botonManifestacion.className = "boton-categoria";
botonManifestacion.id = "cat-manifestacion";
botonManifestacion.innerText = "Manifestacion";
seccionCategorias.appendChild(botonManifestacion);
const botonPortasahumerios = document.createElement("button");
botonPortasahumerios.className = "boton-categoria";
botonPortasahumerios.id = "cat-portasahumerios";
botonPortasahumerios.innerText = "Portasahumerios";
seccionCategorias.appendChild(botonPortasahumerios);
const botonPortavelas = document.createElement("button");
botonPortavelas.className = "boton-categoria";
botonPortavelas.id = "cat-portavelas";
botonPortavelas.innerText = "Portavelas";
seccionCategorias.appendChild(botonPortavelas);
const botonVelas = document.createElement("button");
botonVelas.className = "boton-categoria";
botonVelas.id = "cat-velas";
botonVelas.innerText = "Velas";
seccionCategorias.appendChild(botonVelas);


const seccionCardProductos = document.createElement("section");
seccionCardProductos.className = "section-cardproduct";
seccionProductos.appendChild(seccionCardProductos);

const seccionCarrito = document.createElement("section");
seccionCarrito.className = "section-carrito";
main.appendChild(seccionCarrito);
const seccionHeaderCarrito = document.createElement("section");
seccionHeaderCarrito.className = "header-carrito";
seccionCarrito.appendChild(seccionHeaderCarrito);
const tituloCarrito = document.createElement("h2");
tituloCarrito.innerText = "Carrito";
seccionHeaderCarrito.appendChild(tituloCarrito);
const seccionBodyCarrito = document.createElement("section");
seccionBodyCarrito.className = "body-carrito";
seccionCarrito.appendChild(seccionBodyCarrito);
const seccionFooterCarrito = document.createElement("section");
seccionFooterCarrito.className = "footer-carrito";
seccionCarrito.appendChild(seccionFooterCarrito);

// CREACION PLANTILLA CARD ----------------------
function crearCard (producto){
// Creo la estructura y le voy dando la informacion: article/ h2/ img/ p/ p/ boton. Luego le asigno un padre a article y los demas seran hijos de él. Tmb le hago un evento al boton.
    const cardProducto = document.createElement("article");
    cardProducto.className = "cardProduct";

    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = producto.nombre;

    const imgProducto = document.createElement("img"); 
    imgProducto.className = "imagen-producto";
    imgProducto.src = producto.img;
    imgProducto.alt = "NOIMG";

    const descProducto = document.createElement("p"); 
    descProducto.className = "descripcion-producto";
    descProducto.innerText = producto.descricion;

    const precioProducto = document.createElement("p"); 
    precioProducto.className = "precio-producto"
    precioProducto.innerText = `$${producto.precio}`;

    const botonCarrito = document.createElement("button"); 
    botonCarrito.innerText = "Agregar";
    botonCarrito.className = "boton-agregarCarrito"; 

// Conexion de la card con el padre
    seccionCardProductos.appendChild(cardProducto);
// Conexion de la card (article) con sus hijos
    cardProducto.appendChild(nombreProducto);
    cardProducto.appendChild(imgProducto);
    cardProducto.appendChild(descProducto);
    cardProducto.appendChild(precioProducto);
    cardProducto.appendChild(botonCarrito);
    
// Se crea evento del boton aqui (card individual, se creara en todas), se vincula con el id 
// del producto elegido 
    botonCarrito.onclick = () => agregarCarrito(producto.id);
};
//con cada objeto del array, creo una card
productos.forEach(e => crearCard(e));


// VALOR A CARRITO ----------------------
let carrito = [];
// Adquiero el carrito del storage o lo inicio vacio si no esta. Mientras que si existe algun problema CATCH tamb me lo da vacio
try{
    carrito=JSON.parse(localStorage.getItem("carrito"));
// Si no existe en storage, lo inicio vacio
    if(!carrito){
        carrito = [];
    };
} catch(e){
    carrito = [];
}// de esta manera existe carrito en todo el codigo

// Variables necesarias para la actualizacion de la pagina

// Total del carrito ----------------------
const total= carrito.reduce((acc, e) => acc + e.precio*e.cantidad, 0);
const totalCarrito = document.createElement("article");
totalCarrito.className = "card-carrito-mensaje";
totalCarrito.innerText = `TOTAL: $${total}`;

// Mensaje de carrito vacio ----------------------
const carritoVacio = document.createElement("article");
carritoVacio.className = "card-carrito-mensaje";
carritoVacio.innerText = "Carrito vacío";

// Le asigno el padre a los dos
seccionFooterCarrito.appendChild(carritoVacio);
seccionFooterCarrito.appendChild(totalCarrito);

// Boton de compras
botonComprar = document.createElement("button");
botonComprar.innerText = "Comprar";
botonComprar.className = "boton-comprar";
seccionFooterCarrito.appendChild(botonComprar);

// ACTUALIZACION DE CARRITO ----------------------
function actualizarCarrito(){
// Cada vez que algo se agregar al carrito, debo actualizar el carrito, se debe limpiar el DOM y cargar nuevamente
    // Limpio lo que habia del carrito
    seccionBodyCarrito.innerHTML= "";
    // Cargo nuevamente el carrito
    carrito.forEach(e => mostrarCarrito(e));
    const total= carrito.reduce((acc, e) => acc + e.precio*e.cantidad, 0);
    totalCarrito.innerText = `TOTAL: $${total}`;

    // Muestro solo un mensaje. Va aca para que ese actualizado
    if (total === 0){
        carritoVacio.style.display = 'block';
        totalCarrito.style.display = 'none';
        botonComprar.style.display = 'none';
    }else {
        carritoVacio.style.display = 'none';
        totalCarrito.style.display = 'block';
        botonComprar.style.display = 'block';
    }
};

// AGREGAR AL CARRITO - CARGO EN STORAGE 
function agregarCarrito(idElegido){    
// identifico el producto al que aprete el boton
    let productoElegido = productos.find(e => e.id === idElegido);
// if necesario para que todo ocurra cuando se preciona un boton
    if(productoElegido){
// verifico si el producto ya esta en el carrito (.some da true si el elemento que pasaste existe al menos una vez)
        if(carrito.some(e => e.id === productoElegido.id)){
// El producto ESTA, uso MAPS para recorrer el carrito
            carrito=carrito.map(e => {
                if (e.id === productoElegido.id){
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
    console.log(carrito);
// Guardo en el storage como string
    localStorage.setItem("carrito", JSON.stringify(carrito));
// Actualizo el carrito
    actualizarCarrito();
}

// MOSTRAR CARRITO ----------------------
function mostrarCarrito(e){
// Creacion del card y su contenido, luego lo asigno a un padre
    const cardCarrito = document.createElement("article");
    cardCarrito.className = "card-carrito";

    const nameProductoCarrito = document.createElement("h4");
    nameProductoCarrito.innerText = e.nombre;

    const precioProductoCarrito = document.createElement("p"); 
    precioProductoCarrito.className = "p-carrito";
    precioProductoCarrito.innerText = `Precio unitario: $${e.precio}`;
    
    const cantProductoCarrito = document.createElement("p"); 
    cantProductoCarrito.className = "p-carrito";
    cantProductoCarrito.innerText = `Cantidad: ${e.cantidad}`;
    
    const sumaProductoCarrito = document.createElement("p"); 
    sumaProductoCarrito.className = "p-carrito";
    sumaProductoCarrito.innerText  =`Suma parcial: $${e.precio*e.cantidad}`;

    //const botonComprar = document.createElement("button");

    seccionBodyCarrito.appendChild(cardCarrito);

    cardCarrito.appendChild(nameProductoCarrito);
    cardCarrito.appendChild(precioProductoCarrito);
    cardCarrito.appendChild(cantProductoCarrito);    
    cardCarrito.appendChild(sumaProductoCarrito);
}

// VACIAR CARRITO ----------------------
borrarCarrito = document.createElement("button");
borrarCarrito.innerText = "Borrar";
borrarCarrito.className = "boton-borrar";
seccionHeaderCarrito.appendChild(borrarCarrito);
borrarCarrito.onclick = () => {
    // Borro el storage y tamb la variable
    localStorage.setItem("carrito", JSON.stringify([]));
    carrito = [];
    actualizarCarrito();
}

// Actualizacion de pagina
actualizarCarrito()





