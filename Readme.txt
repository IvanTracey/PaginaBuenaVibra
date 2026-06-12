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


/// FUNCIONES UTILIZADAS




- en cartel que pide registrarse al enviar el pedido, usar la palabra "registrarse".
- al registrarse pedir el numero de teléfono y o mail.
- evaluar si uso un textbox para comentarios en la sección carritos
- crear un div para el desplegable de variables asi se alinea?
- si el stock de algo es 0, lo muestra? se q en variedades no, pero cuando es solo un producto tengo duda. ver y arreglar