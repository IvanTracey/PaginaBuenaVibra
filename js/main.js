// Las variables van en castellano expecto CARD
// Las secciones es section-<correspondiente> y cuando es la variable es sectionCorrespondiente
// JSON no admite comentarios, comas finales y usa comillas dobles 

/*
// Sector de variables --------------------------------
const productos = [
    // todo en castellano expecto id e img. img es relativa al HTML
    {
    id:1,
    nombre:"Agua de florida 60ml",
    img: "img/aguas de florida.webp",
    descricion: "Producto artesanal, de las sierras cordobesas",
    precio: 5000,
    categoria: ["Aromas", "Manifestacion"],
    },
    {
    id:2,
    nombre:"Agua de florida 100ml",
    img: "img/aguas de florida.webp",
    descricion: "Producto artesanal, de las sierras cordobesas",
    precio: 8000,
    categoria: ["Aromas", "Manifestacion"]
    },
    {
    id:3,
    nombre:"Difusor 100ml",
    img: "img/difusores.webp",
    descricion: "Producto artesanal cordobes",
    precio: 6000,
    categoria: "Aromas",
    variedades: [{nombre: "Mirra", cant: 2}, {nombre: "Sandalo", cant: 1},]
    },
    {
    id:4,
    nombre:"Colgante de flor de loto",
    img: "img/colgantes.webp",
    descricion: "Disco para colgar, 16cm diametro",
    precio: 4200,
    categoria: ["Adornos"]
    },
    {
    id:5,
    nombre:"Sahumerios artesanales",
    //relativa al HTML
    img: "img/sahumerios_artesanales.webp",
    descricion: "20cm de largo, 10 unidades",
    precio: 2000,
    categoria: ["Aromas","Defumacion"],
    variedades: [{nombre: "Almizcle y benjui", cant: 2}, {nombre: "Citrus", cant: 1},{nombre: "Lavanda", cant: 2}, {nombre: "Melisa", cant: 1},{nombre: "Mirra", cant: 2}, {nombre: "Nag champa", cant: 1},{nombre: "Romero", cant: 2}, {nombre: "Sandalo", cant: 1}, {nombre: "Vainilla y coco", cant: 1},{nombre: "Verbena", cant: 2}, {nombre: "Verbena y melisa", cant: 1},]
    },
    {
    "id":6,
    "nombre":"Sahumerios importados",
    "img": "img/sahumerios_importados.webp",
    "descricion": "30cm de largo, 15 unidades",
    "precio":3000,
    "categoria": ["Aromas","Defumacion"],
    "variedades": [{"nombre": "Atrae clientes", "cant": 2}, {"nombre": "Atrae dinero", "cant": 1},{"nombre": "Black ice", "cant": 2}, {"nombre": "Citronella", "cant": 1},{"nombre": "Cool water", "cant": 2}, {"nombre": "Fresa", "cant": 1},{"nombre": "Lavanda", "cant": 2}, {"nombre": "Lick me all over", "cant": 1}, {"nombre": "Limpia hogar", "cant": 1},{"nombre": "Manzana canela", "cant": 2}, {"nombre": "Meditacion", "cant": 1},{"nombre": "Om", "cant": 2}, {"nombre": "Palo santo", "cant": 1}, {"nombre": "Rosa roja", "cant": 1},{"nombre": "Rosa vainilla", "cant": 2}, {"nombre": "Sandalo", "cant": 1}]
    },
    {
    "id":7,
    "nombre":"Sahumerios importados",
    "img": "img/sahumerios_importados.webp",
    "descricion": "50cm de largo, 10 unidades",
    "precio": 6500,
    "categoria": ["Aromas","Defumacion"],
     "variedades": [{"nombre": "Almizcle", "cant": 2}, {"nombre": "Atrae dinero", "cant": 1},{"nombre": "Black ice", cant: 2}, {"nombre": "Canela", "cant": 1},{"nombre": "Citronella", "cant": 2}, {"nombre": "Coco", "cant": 1},{"nombre": "Fresa", "cant": 2}, {"nombre": "Jazmin", "cant": 1}, {"nombre": "Lavanda", "cant": 1}, {"nombre": "Limpia hogar", "cant": 2}, {"nombre": "Meditacion", "cant": 1}, {"nombre": "Mirra", "cant": 2}, {"nombre": "Om", "cant": 2}, {nombre: "Palo santo", "cant": 1}, {"nombre": "Sandalo", "cant": 1}]
    },
    {
    "id":8,
    "nombre":"Sahumo mediano",
    "img": "img/sahumos.webp",
    "descricion": "Hecho con hierbas naturales, Xgr",
    "precio": 500,
    "categoria": "Defumacion",
    "variedades": [{"nombre": "Cedron", "cant": 1},{"nombre": "Laurel", "cant": 2}, {"nombre": "Lavanda", "cant": 1}, {"nombre": "Pino alimonado y mandarina", "cant": 2}, {"nombre": "Pino alimonado y naranja", "cant": 2}, {"nombre": "Romero", cant: 1}, {"nombre": "Salvia", "cant": 1}]
    },
    {
    "id":9,
    "nombre":"Sahumo grande",
    "img": "img/sahumo_romero.webp",
    "descricion": "Hecho con Romero natural, Xgr",
    "precio": 1000,
    "categoria": "Defumacion",
    },
    {
    "id":10,
    "nombre":"Velas 7 chackras",
    "img": "",
    "descricion": "Velas de hornillo aromaticas ",
    "precio": 4500,
    "categoria": ["Aromas","Velas"],
    },
    {
    "id":11,
    "nombre":"Velas aromaticas 4.5cm",
    "img": "img/vela_lata.webp",
    "descricion": "Lata de mandala 4.5cm",
    "precio": 6900,
    "categoria": ["Aromas","Velas"],
    "variedades": [{"nombre": "Jazmin", "cant": 1}, {"nombre": "Lavanda", "cant": 1}, {"nombre": "Vainilla africana", "cant": 1}]
    },
    {
    "id":12,
    "nombre":"Velas aromaticas 6.5cm",
    "img": "img/velas.webp",
    "descricion": "Lata de mandala 4.5cm",
    "precio": 9900,
    "categoria": ["Aromas","Velas"],
    "variedades": [{"nombre": "Jazmin", "cant": 1}, {"nombre": "Lavanda", "cant": 1}, {"nombre": "Vainilla africana", "cant": 1}]
    },
    {
    "id":13,
    "nombre":"Portavela flor",
    "img": "img/portavela_flor.webp",
    "descricion": "Flor de yeso para vela de hornillo",
    "precio": 3000,
    "categoria": ["Adornoss","Portavelas"],
    },
    {
    "id":14,
    "nombre":"Portavela mano de fatima",
    "img": "img/portavela_mano.webp",
    "descricion": "Mano de fatima de yeso",
    "precio": 3500,
    "categoria": ["Adornos","Portavelas"],
    },
    {
    "id":15,
    "nombre":"Portasahumerios mano de fatima",
    "img": "img/portasahumerio_mano.webp",
    "descricion": "Mano de fatima de yeso",
    "precio": 3500,
    "categoria": ["Adornos","Portasahumerios"],
    },
    {
    "id":16,
    "nombre":"Rosario sagrado",
    "img": "img/rosario_sagrado.webp",
    "descricion": "Rosario hindú para manifestar los códigos sagrados de Agesta",
    "precio": 3500,
    "categoria": ["Manifestacion"],
    },
    {
    "id":17,
    "nombre":"Portavelas para cuatro",
    "img": "img/portavela_para4.webp",
    "descricion": "Portavela de yeso, variedad de colores",
    "precio": 4500,
    "categoria": ["Adornos", "Portavelas"],
    },
    {
    "id":18,
    "nombre":"Portavelas para dos",
    "img": "img/portavela_para2.webp",
    "descricion": "Portavela de yeso, variedad de colores",
    "precio": 4000,
    "categoria": ["Adornos", "Portavelas"],
    },
    {
    "id":19,
    "nombre":"Bolsas aromaticas",
    "img": "img/bolsas_aromaticas.webp",
    "descricion": "Bolsitas de lavanda, 2 unidades",
    "precio": 800,
    "categoria": ["Aromas"],
    },
    {
    "id":20,
    "nombre":"Piedras 7 arcangeles",
    "img": "img/piedras_7arcangeles.webp",
    "descricion": "Lapislazuli, citrino, calcita, cuarzo cristal, aventurita, cornalita, amatista",
    "precio": 7000,
    "categoria": ["Manifestacion", "Piedras"],
    },
    {
    "id":21,
    "nombre":"Kit piedras autoestima",
    "img": "img/piedras_autoestima.webp",
    "descricion": "Cuarzo rosa, cuarzo cristal, cornalita",
    "precio": 4500,
    "categoria": ["Manifestacion", "Piedras"],
    },
    {
    "id":22,
    "nombre":"Kit piedras salud",
    "img": "img/piedras_salud.webp",
    "descricion": "Cuarzo verde, cuarzo cristal, cuarzo ahumado",
    "precio": 4500,
    "categoria": ["Manifestacion", "Piedras"],
    },
    {
    "id":23,
    "nombre":"Kit piedras prosperidad",
    "img": "img/piedras_prosperidad.webp",
    "descricion": "Citrino, citrino, ojo de tigre",
    "precio": 4500,
    "categoria": ["Manifestacion", "Piedras"],
    },
    {
    "id":24,
    "nombre":"Portavelas y portasahumerios",
    "img": "img/portasahumerio_portavela.webp",
    "descricion": "De yeso, variedad de colores",
    "precio": 4500,
    "categoria": ["Adornos", "Portasahumerios", "Portavelas"],
    },
    {
    "id":25,
    "nombre":"Portavela",
    "img": "img/portavela_lata.webp",
    "descricion": "De yeso, 6cmx6cm",
    "precio": 3500,
    "categoria": ["Adornos", "Portavelas"],
    },
];*/
let productos = [];
let productosAMostrar = [];

fetch ('./data/productos.json')
    .then(response => response.json())
    .then(data => { console.log(data);
// Ordena en orden alfabetico segun los nombres / uso localeCompare porque respeta el español (ñ y tilde)
        productos = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
        productosAMostrar = productos;

        actualizarCarrito()
        actualizarProductos(productosAMostrar);
    })
    .catch(error => {
        console.log("Algo salió mal: ", error);
    })
    .finally(() => {
        console.log("El finally funciona");
    });

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


/* Variables globales del DOM y conexion de nodos -----------------------
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

// van acá porque actualizarCarrito() los necesita declarados
// Total del carrito ----------------------
const total = carrito.reduce((acc, e) => acc + e.precio*e.cantidad, 0);
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

// Boton de envio de pedido
botonEnviar = document.createElement("button");
botonEnviar.innerText = "Enviar pedido";
botonEnviar.className = "boton-enviar";
seccionFooterCarrito.appendChild(botonEnviar);

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
     Toastify({
    text: "Carrito vaciado",
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    duration: 2000,
    className: "toast-agregado",
    style: {
        background: "#A38A75",
        color: "#052b20",
        borderRadius: "10px",
}
    }).showToast();

}

//// sector de funciones ----------------------------------

// Seccion categorias - creacion de botones
const categorias = ["Todos", "Adornos", "Aromas", "Defumacion", "Manifestacion", "Piedras", "Portasahumerios", "Portavelas", "Velas"];
categorias.forEach(categoria => {
    // Creo el boton para cada categoria
    const boton = document.createElement("button");
    boton.className = "boton-categoria";
    boton.innerText = categoria;
    seccionCategorias.appendChild(boton);

    boton.onclick = () => {
        // Saco el activo de todos
        document.querySelectorAll('.boton-categoria')
            .forEach(b => b.classList.remove("activo"));
        // Activo el clickeado
        boton.classList.add("activo");
        // Si es todos, devuelve productos, sino hago el filtro (operador ternario: condicion ? valorSiTrue : valorSiFalse)
        productosAMostrar = categoria === "Todos" 
            ? productos 
            : productos.filter(e => {
                // cubre tanto string como array
                if (Array.isArray(e.categoria)){
                    return e.categoria.includes(categoria);
                } else {
                    return e.categoria === categoria;
                }
            });
        actualizarProductos(productosAMostrar);
    };
});

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
// SELECT para las variedades de productos - aqui para que aparezca en el orden que quiero
    let selectVariedades = null;    // La inicio fuera para que sea variable global
// Solo si el producto tiene variedades
    if(producto.variedades) {
        selectVariedades = document.createElement("select");
        selectVariedades.className = "variedad-producto";
        selectVariedades.name = "variedades";
        producto.variedades.forEach(variedad => {
            const option = document.createElement("option");
            if (variedad.cant) {
                option.value = variedad.nombre;
                option.innerText = variedad.nombre;
                selectVariedades.appendChild(option);}
        });
        cardProducto.appendChild(selectVariedades);
    }
    cardProducto.appendChild(precioProducto);
    cardProducto.appendChild(botonCarrito);
    
// Se crea evento del boton aqui (card individual, se creara en todas), se vincula con el id 
// del producto elegido 
    botonCarrito.onclick = () => {
//si select existe, dame su valor; si no, dame null - así cubrís todos los productos
        const variedadElegida = selectVariedades ? selectVariedades.value : null;
        agregarCarrito(producto.id, variedadElegida);
    }
};
//con cada objeto del array, creo una card
productosAMostrar.forEach(e => crearCard(e));

// actualizar section de productos segun el filtrado
function actualizarProductos(prod){
    seccionCardProductos.innerHTML = "";
    if(prod.length > 0){
        prod.forEach(e => crearCard(e));
    }else{
        mensajeNoProductos = document.createElement("p");
        mensajeNoProductos.className = "mensaje-noProductos";
        mensajeNoProductos.innerText = "** No hay productos de esa categoría **"
        seccionCardProductos.appendChild(mensajeNoProductos);
    };
}

// AGREGAR AL CARRITO - CARGO EN STORAGE 
function agregarCarrito(idElegido, varElegida){    
// identifico el producto al que aprete el boton
    let productoElegido = productos.find(e => e.id === idElegido);
// if necesario para que todo ocurra cuando se preciona un boton
    if(productoElegido){
// le incluyo el campo de la eleccion realizada
        const productoConVariedad = {
            ...productoElegido,
            eleccion: varElegida,
        }
// verifico si el producto ya esta en el carrito (.some da true si el elemento que pasaste existe al menos una vez) - tanto con el id como con la variedad
        if(carrito.some(e => e.id === productoConVariedad.id && e.eleccion === productoConVariedad.eleccion)){
// El producto ESTA, uso MAPS para recorrer el carrito
            carrito=carrito.map(e => {
                if (e.id === productoConVariedad.id && e.eleccion === productoConVariedad.eleccion){
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
            carrito.push({...productoConVariedad, cantidad: 1});
        };
    }
    
// Uso libreria - notificacion del agregado 
    Toastify({
    text: "Producto agregado al carrito",
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    duration: 2000,
    className: "toast-agregado",
    style: {
        background: "#75a38b",
        color: "#052b20",
        borderRadius: "10px",
}
    }).showToast();

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

    const variedadProductoCarrito = document.createElement("p"); 
    if (e.eleccion){
        variedadProductoCarrito.className = "p-carrito";
        variedadProductoCarrito.innerText = `Eleccion: ${e.eleccion}`;
    }

    const precioProductoCarrito = document.createElement("p"); 
    precioProductoCarrito.className = "p-carrito";
    precioProductoCarrito.innerText = `Precio unitario: $${e.precio}`;
    
    const cantProductoCarrito = document.createElement("p"); 
    cantProductoCarrito.className = "p-carrito";
    cantProductoCarrito.innerText = `Cantidad: ${e.cantidad}`;
    
    const sumaProductoCarrito = document.createElement("p"); 
    sumaProductoCarrito.className = "p-carrito";
    sumaProductoCarrito.innerText  =`Suma parcial: $${e.precio*e.cantidad}`;

    seccionBodyCarrito.appendChild(cardCarrito);

    cardCarrito.appendChild(nameProductoCarrito);
    if (e.eleccion){
        cardCarrito.appendChild(variedadProductoCarrito);
    }
    cardCarrito.appendChild(precioProductoCarrito);
    cardCarrito.appendChild(cantProductoCarrito);    
    cardCarrito.appendChild(sumaProductoCarrito);
}
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
        botonEnviar.style.display = 'none';
    }else {
        carritoVacio.style.display = 'none';
        totalCarrito.style.display = 'block';
        botonEnviar.style.display = 'block';
    }
};

const botonRegistro = document.querySelector('.boton-registro');
botonRegistro.onclick = async () => {
    const inputNombre = (await fetch("//api.ipify.org?format=json"));
    const usuario = await inputNombre.json();
    const { value: nombre } = await Swal.fire({
    title: 'Bienvenido!\nCon quien tenemos el gusto?',
    input: "text",
    inputLabel: "Nombre y apellido",
    showCancelButton: true,
    inputValidator: (value) => {
        if (!value) return "Por favor ingrese una manera de identificarlo";            }
    });
    if (nombre) Swal.fire(`Usted se registro como: ${nombre}`);
}
const botonProductos = document.querySelector('.boton-productos');
botonProductos.onclick = () => {
    seccionCardProductos.innerHTML = "";
    // Saco el activo de todos
    document.querySelectorAll('.boton-categoria')
        .forEach(b => b.classList.remove("activo"));
    // muestra todos los productos
    actualizarProductos(productos);
    
}

// Uso de libreria - Envio de pedido
botonEnviar.onclick = () => {
    // Cartel de confirmacion
    Swal.fire({
        title: "Estás por enviar el pedido",
        text: "¿Ya está listo?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#4c8743",
        cancelButtonColor: "#b38158",
        confirmButtonText: "Confirmar!"
    }).then((result) => {
        if (result.isConfirmed) Swal.fire({
            title: "Pedido enviado",
            text: "Gracias!! Te contactaremos a la brevedad para el pago y la entrega",
            icon: "success"
        });
        // Limpieza de carrito y storage pero despues de confirmar 
        localStorage.setItem("carrito", JSON.stringify([]));
        carrito = [];
        actualizarCarrito();

});
    
};

////// Comienzo de codigo ------------------------
// Actualizacion de pagina
actualizarCarrito()
actualizarProductos(productosAMostrar);



