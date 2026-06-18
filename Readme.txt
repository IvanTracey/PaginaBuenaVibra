Readme del proyecto e-commerce Buenas Vibras.

/// FUNCIONALIDAD Y DESCRIPCIÓN

La funcionalidad de dicha página es poder crear un pedido de compra. Es un e-commerce donde armas tu carrito, pero que al confirmarlo no se solicita una compra, sino que se realiza el listado de lo seleccionado junto con la información del solicitante. La intensión es que se envíe al vendedor pero eso quedará pendiente siendo que excede lo aprendido al curso. 

Se simula una base de datos con un archivo .json, el cual contiene todos los productos con las siguientes variables: id, nombre, imagen, descripción, precio, categorías. Si el producto tiene alternativas en ese mismo precio tiene "variedades" en la cual se discrimina "nombre" y "stock"; y si el producto es único, solo posee "stock".

En el header se muestra el nombre, el logo y un botón para que el usuario se registre y le brinde su información básica al vendedor. Por indicación de Coderhouse tiene un nombre sugerido.
Con respecto al body, hay dos secciones principales:
	Del lado izquierdo se encuentra todo lo que respecta a los productos: Título, botones para poder filtrar por categorías y  todas las cards del stock. En las mismas se encuentra el nombre del producto, una imagen ilustrativa, las categorías a la que corresponde, una breve descripción, su precio y el botón para agregar al carrito. En el caso de existir variedades de un mismo producto, también se encuentra un desplegable para elegir la alternativa deseada.
	Del lado derecho se encuentra el carrito, con su titulo, un botón de "Eliminar todo" y, por debajo, su contenido. Cuando está vacío, existe un cartel que lo indica. Al agregar productos nuevos, se generan cards y cuando se incorporan existentes, se ve reflejado en la variable "Cantidad" de su correspondiente tarjeta. Cada card tiene el botón "x" que elimina dicho producto del carrito, el botón "+" que incrementa su cantidad en uno hasta llegar al valor de stock disponible, y un botón "-" que resta de a una unidad hasta que al llegar a cero lo borra del carrito. Se muestran notificaciones al suceder los siguientes eventos: añadir un producto por primera vez, al querer superar la cantidad en stock de un elemento, al retirar un producto o al eliminar la totalidad del carrito. Por último, cuando existen items seleccionados, se muestra su valor total que se va actualizando cada vez que hay una interacción nueva, junto con un boton de "Enviar pedido". Al presionarlo constata que la persona se haya registrado, de no haberlo hecho se lo solicita, y luego pide una confirmación para el envío. Al aceptar esto último, aquí se termina el proyecto, queda para otra instancia el como se arma el pedido y la manera de comunicarse con el vendedor.
En el footer se nombra los términos y condiciones, junto con compartir las redes sociales del sitio.

Se hace uso de local storage al registrarse alguien y con el estado del carrito. De esta manera, no perderás dicha información al cerrar el navegador o apagar la computadora.


/// Funciones, métodos y manejadores de eventos utilizados:

- registrar() Función asincrónica para el registro del usuario usando la librería Sweetalert y guardando la información en local storage.

- actualizarRegistro() Se encarga de darle valor al boton de registro dependiendo de si el usuario ya cargo su información o no.

- filtro.oninput Realiza el filtrado a partir de ingresar caracteres en el textbox correspondiente a la busqueda.

- categorias.forEach() Creación de botones de las categorías y de la funcionalidad de cada botón. Según cual se elija, define la categoría de los productos que se mostraran en pantalla.

- filtrarPorCategoria() Muestra las categorías que indique en su variable. De no haber productos de ese tipo, muestra un mensaje indicándolo.

- crearCard() Se crea la estructura de la tarjeta del producto y el botón de "Agregar al carrito" con su manejador de evento al clickearlo.

- deteccionStock() A partir de agregar un elemento al carrito, esta funcionalidad detecta el stock del producto en cuestión con el objetivo de usarlo para limitar el contador del carrito.

- mostrarAlert() Usa la librería Toastify para notificar un texto de un color que se le ingrese. Se usa en los ingresos o las quitas hechas en el carrito.

- agregarCarrito() A partir de querer agregar un elemento al carrito contrasta si aún no se llegó al limite de stock, y si no es el caso, aumenta la cantidad en uno. En ambos casos, se muestra una notificación indicando lo hecho. También detecta de que variedad se trata el producto, si es necesario.

- crearCardCarrito() Se crea la estructura de las tarjetas en el carrito, junto con los botones y el manejo del evento al clickearlos.

- actualizarCarrito() Borra y escribe nuevamente la información de la sección del carrito. También mantiene actualizado el valor del total.

- borrarCarrito.onclick Limpia tanto la variable carrito como el local storage. Muestra una notificación.

-botonTop.onclick Lleva la página al principio, donde está a la vista el header.

- botonCarrito.onclick El botón existe en el responsive para teléfonos donde la sección del carrito no está visible. Al apretar dicho botón la hace visible y a partir de CSS se crea la experiencia.

-cerrarCarrito() Función que hace que la sección del carrito vuelva a estar no visible en el responsive para teléfonos.

- overlay.onclick Al tocar la pantalla por fuera de la sección del carrito en el responsive para teléfonos, llama a la función que oculta el carrito.

-botonEnviar.onclick Cuando se elige enviar el pedido al apretar dicho botón, se usa sweetalert para gestionar la experiencia: De no estar registrado te pide que lo hagas y lleva la página al inicio para que esté visible el botón de registro. Pide confirmación a la hora de enviarla, y luego de hacerlo, borra el carrito. (La funcionalidad de enviar el pedido no se realiza en este proyecto, solo lo simula). 

