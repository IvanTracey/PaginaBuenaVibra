// Las variables van en castellano expecto CARD
// Las secciones es section-<correspondiente> y cuando es la variable es sectionCorrespondiente
// JSON no admite comentarios, comas finales y usa comillas dobles 

// Sector de variables --------------------
let productos = [];
let productosAMostrar = [];

fetch ('./data/productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
        productosAMostrar = productos;
        //throw error;
        actualizarCarrito();
        actualizarProductos(productosAMostrar);
    })
    .catch(error => {
       Swal.fire({
            title: "Ocurrió un error al cargar los productos",
            text: "Por favor comuniquese con nosotros",
            icon: "error"
        });
    });

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
}

let cliente = [];
try{
    cliente=JSON.parse(localStorage.getItem("cliente"));
    if(!cliente){
        cliente = [];
    };
} catch(e){
    cliente = [];
}

/* Variables globales del DOM y conexion de nodos -----------------------
 main -> section-product -> (section-categorias y section-cardproduct)
      -> section-carrito -> (section- header/body/footer -carrito)
*/
const header = document.querySelector('header');
    const tituloPagina = document.createElement("p");
    tituloPagina.className = "titulo";
    tituloPagina.innerText = "Buena vibra";
    const logo = document.createElement("img");
    logo.className = "logo-colibri";
    logo.src = "img/logo_colibri.webp";
    logo.alt = "Imagen de un colibri en colores vivos. Logo del emprendimiento"
    const seccionRegistro = document.createElement("section");
    seccionRegistro.className = "seccion-registro";
    const botonRegistro = document.createElement("button");
    botonRegistro.className = "boton-registro";
    botonRegistro.innerText = "Registrese";
const main = document.querySelector('main');
    const seccionProductos = document.createElement("section");
    seccionProductos.className = "section-product";
    const titulo = document.createElement("h1");
    titulo.innerText = "Productos";
        const seccionCategorias = document.createElement("section");
        seccionCategorias.className = "section-categorias";
        const seccionCardProductos = document.createElement("section");
        seccionCardProductos.className = "section-cardproduct";
        const seccionCarrito = document.createElement("section");
        seccionCarrito.className = "section-carrito";
        const seccionHeaderCarrito = document.createElement("section");
        seccionHeaderCarrito.className = "header-carrito";
        const tituloCarrito = document.createElement("h2");
        tituloCarrito.innerText = "Carrito";
        const seccionBodyCarrito = document.createElement("section");
        seccionBodyCarrito.className = "body-carrito";
        const seccionFooterCarrito = document.createElement("section");
        seccionFooterCarrito.className = "footer-carrito";

// Total del carrito ----------------------
const total = carrito.reduce((acc, e) => acc + e.precio*e.cantidad, 0);
const totalCarrito = document.createElement("article");
totalCarrito.className = "card-carrito-mensaje";
totalCarrito.innerText = `TOTAL: $${total}`;

// Mensaje de carrito vacio ----------------------
const carritoVacio = document.createElement("article");
carritoVacio.className = "card-carrito-mensaje";
carritoVacio.innerText = "Carrito vacío";

// Boton de envio de pedido
botonEnviar = document.createElement("button");
botonEnviar.innerText = "Enviar pedido";
botonEnviar.className = "boton-enviar";

header.appendChild(tituloPagina); 
header.appendChild(logo);
header.appendChild(seccionRegistro);
    seccionRegistro.appendChild(botonRegistro);
main.appendChild(seccionProductos);
    seccionProductos.appendChild(titulo);
    seccionProductos.appendChild(seccionCategorias);
    seccionProductos.appendChild(seccionCardProductos);
main.appendChild(seccionCarrito);
    seccionCarrito.appendChild(seccionHeaderCarrito);
        seccionHeaderCarrito.appendChild(tituloCarrito);
    seccionCarrito.appendChild(seccionBodyCarrito);
    seccionCarrito.appendChild(seccionFooterCarrito);
        seccionFooterCarrito.appendChild(carritoVacio);
        seccionFooterCarrito.appendChild(totalCarrito);
        seccionFooterCarrito.appendChild(botonEnviar);
// VACIAR CARRITO ----------------------
borrarCarrito = document.createElement("button");
borrarCarrito.innerText = "Borrar";
borrarCarrito.className = "boton-borrar";
seccionHeaderCarrito.appendChild(borrarCarrito);

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
            if (variedad.stock) {
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
            carrito=carrito.map(e => {
                if (e.id === productoConVariedad.id && e.eleccion === productoConVariedad.eleccion){
                    return{
                        ...e,
                        cantidad: e.cantidad+1,
                    };
                }else{
                    return e;    
                }
            });     
        }else{
            carrito.push({...productoConVariedad, cantidad: 1});
        };
    }
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

// MOSTRAR CARRITO ----------------------
function mostrarCarrito(e){
    const cardCarrito = document.createElement("article");
    cardCarrito.className = "card-carrito";
        const divInfo = document.createElement("div");
        divInfo.className = "div-info";
            const nameProductoCarrito = document.createElement("h4");
            const precioProductoCarrito = document.createElement("p"); 
            precioProductoCarrito.className = "p-carrito";
            const cantProductoCarrito = document.createElement("p"); 
            cantProductoCarrito.className = "p-carrito";
            const sumaProductoCarrito = document.createElement("p"); 
            sumaProductoCarrito.className = "p-carrito";
        const divBotones = document.createElement("div");
        divBotones.className = "div-botones";
            const botonX = document.createElement("button");
            botonX.className = "boton-eliminar";
            botonX.innerText = "X";
            const botonMas = document.createElement("button");
            botonMas.className = "boton-carrito";
            botonMas.innerText = "+";
            const botonMenos = document.createElement("button");
            botonMenos.className = "boton-carrito";
            botonMenos.innerText = "-";
    
    nameProductoCarrito.innerText = e.nombre;
    precioProductoCarrito.innerText = `Precio unitario: $${e.precio}`;
    cantProductoCarrito.innerText = `Cantidad: ${e.cantidad}`;
    sumaProductoCarrito.innerText  =`Suma parcial: $${e.precio * e.cantidad}`;
        
    seccionBodyCarrito.appendChild(cardCarrito);
    cardCarrito.appendChild(divInfo);
        divInfo.appendChild(nameProductoCarrito);
        divInfo.appendChild(precioProductoCarrito);
        if (e.eleccion){
            const variedadProductoCarrito = document.createElement("p"); 
            variedadProductoCarrito.className = "p-carrito";
            variedadProductoCarrito.innerText = `Eleccion: ${e.eleccion}`;
            divInfo.appendChild(variedadProductoCarrito);
        }
        divInfo.appendChild(cantProductoCarrito);    
        divInfo.appendChild(sumaProductoCarrito);
        cardCarrito.appendChild(divBotones);
        divBotones.appendChild(botonX);
        divBotones.appendChild(botonMas);            
        divBotones.appendChild(botonMenos);
    
    botonX.onclick = () => {
        const indice = carrito.findIndex(el => el.id === e.id && el.eleccion === e.eleccion);
        carrito.splice(indice, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();         
        Toastify({
            text: "Producto eliminado del carrito",
            gravity: "bottom",  
            position: "right",  
            duration: 2000,
            className: "toast-agregado",
            style: {
                background: "#A38A75",
                color: "#052b20",
                borderRadius: "10px",
        }
        }).showToast();
    }
    
    botonMas.onclick = () => {
        let vector = [];
        let numero = 5;
        if(e.eleccion){
            vector = carrito.find(el =>
                el.id === e.id && el.eleccion === e.eleccion);
            console.log("Vector: ", vector);
            

        }else{
            
        }
        carrito = carrito.map(el => {
            if(el.id === e.id && el.eleccion === e.eleccion){
        // No incrementar por encima del stock
                if(el.cantidad === numero){
                    return{
                    ...el,
                    }
                }else{
                    return{
                    ...el,
                    cantidad: el.cantidad +1,    
                    }
                    }
            }else{
                return el;
            }
        });
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    };
    
    botonMenos.onclick = () => {
        const indice = carrito.findIndex(el => el.id === e.id && el.eleccion === e.eleccion);
        carrito = carrito.map(el => {
            if(el.id === e.id && el.eleccion === e.eleccion){
                if(el.cantidad > 1){
                    return{
                        ...el,
                        cantidad: el.cantidad -1,  
                    }
                };
            }else{
                return el;
            }
        });
        if(e.cantidad === 1){
            carrito.splice(indice, 1);            
            Toastify({
                text: "Producto eliminado del carrito",
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
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    }
}
// ACTUALIZACION DE CARRITO ----------------------
function actualizarCarrito(){
// Cada vez que algo se agregar al carrito, debo actualizar el carrito, se debe limpiar el DOM y cargar nuevamente
    // Limpio lo que habia del carrito
    seccionBodyCarrito.innerHTML= "";
    // Cargo nuevamente el carrito
    carrito.forEach(e => mostrarCarrito(e));
    const total= carrito.reduce((acc, e) => acc + e.precio * e.cantidad, 0);
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

function actualizarRegistro() {
    if (!cliente || cliente.length <= 0) {
        //Si cliente no existe o esta vacio, boton para registrarse
        seccionRegistro.innerHTML = `<button class="boton-registro">Registrese</button>`;
        // como innerHTML regenera el botón, hay que reasignar el evento
        document.querySelector('.boton-registro').onclick = registrar;
    } else {
        //Si ya dio su nombre, lo saludo y creo un boton
        seccionRegistro.innerHTML = `
            <p>Hola, ${cliente}!</p>
            <button class="boton-borrarRegistro" heigth=auto> X </button>
        `;
        // Le doy la funcionalidad de borrar los datos y llamo nuevamente a la funcion para que coloque el boton para registrarse
        document.querySelector('.boton-borrarRegistro').onclick = () => {
            localStorage.removeItem("cliente");
            cliente = [];
            actualizarRegistro();
        };
    }
}
// Funcionalidades OnClick
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

// Funcion asincronica correspondiente al boton de registrarse
async function registrar() {
    const { value: nombreCliente } = await Swal.fire({
        title: '¿Con quien tenemos el gusto?',
        input: "text",
        inputLabel: "Nombre y apellido",
        inputValue: "Cody",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) return "Por favor ingrese una manera de identificarlo";
        }
    });
    if (nombreCliente) {
        localStorage.setItem("cliente", JSON.stringify(nombreCliente));
        cliente = nombreCliente;
        actualizarRegistro();
    }
}

// Uso de libreria - Envio de pedido
botonEnviar.onclick = () => {
    if(cliente.length > 0){
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
    }else{
        Swal.fire("Por favor, ingrese su nombre para poder enviar el pedido");
    }
};

////// Comienzo de codigo ------------------------
// Actualizacion de pagina
actualizarCarrito()
actualizarProductos(productosAMostrar);
actualizarRegistro();

Swal.fire({
  position: "center",
  title: "Bienvenidos a Buena vibra",
  showConfirmButton: false,
  timer: 1500
});


