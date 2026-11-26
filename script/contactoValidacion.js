const formulario = document.getElementById('formularioContacto');

const nombre = document.getElementById('tuNombre');
const correo = document.getElementById('tuCorreo');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('tuMensaje');

// reemplazando false por true en formulario.noValidate
// desactiva los mensajes automáticos del navegador
// para mostrar nuestros propios mensajes.
formulario.noValidate = true; 

formulario.addEventListener('submit', function(evento) {

    let formularioValido = true;

    limpiarErrores();

    // Validar nombre
    if (nombre.value.trim().length < 3) {
        mostrarError(nombre, 'Ingresá un nombre válido.');
        formularioValido = false;
    }

    // Validar correo electrónico
    // Validar correo electrónico
if (correo.value.trim() === '') {
    mostrarError(correo, 'El correo electrónico es obligatorio.');
    formularioValido = false;

} else if (!correo.validity.valid) {
    mostrarError(correo, 'Ingresá un correo válido. Ejemplo: usuario@gmail.com');
    formularioValido = false;
}

    // Validar asunto
    if (asunto.value.trim().length < 5) {
        mostrarError(asunto, 'El asunto debe tener al menos 5 caracteres.');
        formularioValido = false;
    }

    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        mostrarError(mensaje, 'El mensaje debe tener al menos 10 caracteres.');
        formularioValido = false;
    }

    // Verificar también las restricciones del HTML
    if (!formulario.checkValidity()) {
        formularioValido = false;
    }

    // Impedir el envío si hay errores
    if (!formularioValido) {
        evento.preventDefault();
    }

});


// Función para mostrar errores
function mostrarError(campo, texto) {

    const contenedor = campo.parentElement;
    const textoError = contenedor.querySelector('.texto-error');

    textoError.textContent = texto;
    textoError.style.display = 'block';
    textoError.style.visibility = 'visible';
    textoError.style.color = 'red';

    campo.classList.add('campo-error');

}


// Función para limpiar errores anteriores
function limpiarErrores() {

    document.querySelectorAll('.texto-error').forEach(error => {
        error.textContent = '';
    });

    document.querySelectorAll('.campo-error').forEach(campo => {
        campo.classList.remove('campo-error');
    });

}