
document.addEventListener('DOMContentLoaded', () => {
    cargarProductosCarrito();
});


// 1. Cargar y renderizar los productos del carrito

function cargarProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
    const tabla = document.querySelector('#tabla_carrito');

    let subtotal = 0;

    // Limpiar la tabla antes de dibujar los productos
    tabla.innerHTML = '';

    if (carrito.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 20px;">
                    Tu carrito está vacío. Agregá productos desde la
                    <a href="tienda.html">tienda</a> o desde el
                    <a href="../index.html">home</a>.
                </td>
            </tr>`;
    } else {
        carrito.forEach(producto => {
            tabla.innerHTML += creaFilaProducto(producto);
            subtotal += producto.price * producto.cantidad;
        });
    }

    actualizarTotal(subtotal);
    adjuntarEventosCarrito();
}


// 2. Generar el HTML de una fila de la tabla

function creaFilaProducto(producto) {
    const subtotalProducto = producto.price * producto.cantidad;
    const titulo = producto.title.length > 20
        ? producto.title.substring(0, 20) + '...'
        : producto.title;

    return `
        <tr>
            <td>
                <button class="remove-btn"
                        data-id="${producto.id}"
                        aria-label="Eliminar producto">
                    <i class="far fa-times-circle"></i>
                </button>
            </td>
            <td>
                <img src="${producto.image}"
                     alt="${producto.title}"
                     style="height:80px; width:auto; object-fit:contain;">
            </td>
            <td>${titulo}</td>
            <td>$${producto.price.toFixed(2)}</td>
            <td>
                <input type="number"
                       value="${producto.cantidad}"
                       min="1"
                       step="1"
                       class="cantidad-producto"
                       data-id="${producto.id}">
            </td>
            <td>$${subtotalProducto.toFixed(2)}</td>
        </tr>
    `;
}


// 3. Actualizar el subtotal y el total del carrito

function actualizarTotal(subtotal) {
    document.getElementById('subtotal-carrito').textContent =
        `$${subtotal.toFixed(2)}`;

    document.getElementById('total').textContent =
        `$${subtotal.toFixed(2)}`;
}


// 4. Adjuntar eventos a los botones y cantidades

function adjuntarEventosCarrito() {

    const botonesEliminar = document.querySelectorAll('.remove-btn');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            const id = Number(boton.dataset.id);
            eliminarProducto(id);
        });
    });

    const camposCantidad = document.querySelectorAll('.cantidad-producto');

    camposCantidad.forEach(campo => {
        campo.addEventListener('change', () => {
            const id = Number(campo.dataset.id);
            const cantidad = Number(campo.value);

            modificarCantidad(id, cantidad);
        });
    });
}


// 5. Eliminar un producto del carrito

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    carrito = carrito.filter(producto => producto.id !== id);

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));

    cargarProductosCarrito();
}


// 6. Modificar la cantidad de un producto

function modificarCantidad(id, cantidad) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    if (!Number.isInteger(cantidad) || cantidad < 1) {
        cantidad = 1;
    }

    const producto = carrito.find(item => item.id === id);

    if (producto) {
        producto.cantidad = cantidad;
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));

    cargarProductosCarrito();
}
