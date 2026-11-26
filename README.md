# 🛒 Talento Tech Ecommerce

Proyecto de entrega final del curso **Front-End JavaScript de Talento Tech**.

## 📖 Descripción

Tienda virtual desarrollada con HTML5, CSS3 y JavaScript puro (Vanilla JavaScript). Permite consultar un catálogo de productos obtenido desde una API externa, visualizar sus detalles, agregar productos al carrito de compras y completar un formulario de contacto con validaciones personalizadas.

El proyecto tiene fines educativos y busca aplicar los conocimientos adquiridos durante el curso mediante el desarrollo de una aplicación web interactiva y adaptable a diferentes dispositivos.

## 🎯 Objetivos

- Desarrollar una interfaz web organizada y adaptable a dispositivos móviles.
- Consumir una API REST mediante Fetch API.
- Manipular el DOM y gestionar eventos con JavaScript.
- Implementar un carrito de compras con persistencia local.
- Validar formularios y brindar información clara al usuario.
- Organizar el código separando HTML, CSS y JavaScript.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| HTML5 | Estructura y formularios |
| CSS3 | Diseño, estilos y adaptación a pantallas |
| JavaScript (ES6+) | Lógica, eventos y manipulación del DOM |
| Fetch API | Solicitudes HTTP para obtener productos |
| Fake Store API | Catálogo externo de productos |
| LocalStorage | Persistencia del carrito de compras |
| Font Awesome | Iconos de la interfaz |
| Google Maps | Mapa integrado en la página de contacto |
| Formspree | Servicio previsto para el envío del formulario (pendiente de configurar) |
| Git y GitHub | Control de versiones y alojamiento del código fuente |

## ✨ Funcionalidades

### Inicio

- Página principal con presentación de ofertas y acceso a la tienda.
- Menú de navegación adaptable, con apertura y cierre en dispositivos móviles.

### Tienda

- Obtención de productos mediante `fetch()`.
- Generación dinámica de tarjetas con imagen, título, categoría y precio.
- Ventana modal para consultar la descripción completa del producto.
- Incorporación de productos al carrito y aumento de cantidad cuando se agrega un producto existente.
- Manejo de errores cuando no se puede cargar el catálogo.

### Carrito de compras

- Almacenamiento de productos en `localStorage`, mediante la clave `carritoDeCompras`.
- Conservación del carrito al recargar la página en el mismo navegador.
- Modificación de cantidades y eliminación de productos.
- Validación de cantidades enteras positivas.
- Cálculo automático del subtotal por producto y del total de la compra.
- Mensaje informativo cuando el carrito está vacío.

### Contacto

- Formulario con nombre, correo electrónico, asunto y mensaje.
- Validación de campos obligatorios y formato de correo electrónico.
- Validación de longitud mínima: nombre de 3 caracteres, asunto de 5 y mensaje de 10.
- Mensajes de error personalizados debajo de los campos.
- Ejemplo de formato de correo válido: `usuario@gmail.com`.
- Resaltado visual de los campos incorrectos e impedimento del envío si existen errores.
- Mapa de ubicación integrado mediante un iframe de Google Maps.

## 📂 Estructura del proyecto

```text
entregaFinal_frontEndJs/
├── index.html
├── styles.css
├── README.md
├── img/
├── pages/
│   ├── tienda.html
│   ├── carrito.html
│   └── contacto.html
├── estilos/
│   ├── tienda.css
│   ├── carrito.css
│   └── contacto.css
└── script/
    ├── script.js
    ├── tienda.js
    ├── carrito.js
    └── contactoValidacion.js
```

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/eduarkim/entregaFinal_frontEndJs.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd entregaFinal_frontEndJs
   ```

3. Abrir la carpeta con Visual Studio Code.
4. Abrir `index.html` con la extensión Live Server (recomendado) o directamente en el navegador.

No se requiere instalar dependencias con npm ni configurar una base de datos. Se necesita conexión a Internet para consultar la API y los recursos externos.

## 🌐 API utilizada

El catálogo se obtiene de [Fake Store API](https://fakestoreapi.com/), mediante el siguiente endpoint:

```javascript
const API_URL = 'https://fakestoreapi.com/products';
```

Cada producto incluye campos como `id`, `title`, `price`, `description`, `category` e `image`. Los datos se utilizan para generar las tarjetas de la tienda y gestionar el carrito.

## 🧪 Pruebas manuales sugeridas

- Abrir la tienda y comprobar que se carguen los productos.
- Abrir y cerrar el modal de descripción.
- Agregar dos veces un mismo producto y comprobar su cantidad en el carrito.
- Modificar una cantidad y verificar el nuevo total.
- Eliminar productos y comprobar que el total se actualice.
- Recargar la página y verificar la persistencia del carrito.
- Enviar el formulario vacío y comprobar los mensajes de error.
- Ingresar un correo incorrecto y verificar el mensaje con un ejemplo de formato válido.
- Probar el menú en una pantalla de tamaño reducido.

## 📌 Estado del proyecto y mejoras futuras

El proyecto es una demostración educativa de comercio electrónico del lado del cliente. No procesa pagos reales ni administra pedidos mediante un servidor.

- Configurar una URL real de Formspree en `pages/contacto.html` para habilitar el envío de mensajes.
- Revisar las referencias a `contactoStorage.js` y `toast.js`, archivos que no están incluidos en la versión actual del proyecto.
- Implementar notificaciones al agregar productos al carrito.
- Incorporar búsqueda y filtros por categoría.
- Personalizar el catálogo con una API de productos coreanos (ramen, snacks, golosinas y bebidas).
- Implementar cupones, suscripción al newsletter y proceso de pago.
- Mejorar la accesibilidad y realizar pruebas en distintos navegadores.

## 👨‍💻 Repositorio

[entregaFinal_frontEndJs — GitHub](https://github.com/eduarkim/entregaFinal_frontEndJs)

Proyecto académico desarrollado en el marco del curso Front-End JavaScript de **Talento Tech**.
