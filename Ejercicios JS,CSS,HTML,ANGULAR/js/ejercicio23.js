document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("formulario");
    let enviarBtn = document.getElementById("enviar");
    let resultadoDiv = document.getElementById("resultado");
    let mensajeErrorDiv = document.getElementById("mensajeError");

    enviarBtn.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let provincia = document.getElementById("provincia").value

        if (nombre.length > 20 || !nombre.startsWith("ANTONIO")) {
            mostrarError("Los datos del formulario no son correctos");
            return;
        }

        if (!correo || !provincia ) {
            mostrarError("Los datos del formulario no son correctos");
            return;
        }

        resultadoDiv.innerHTML = `
            <p>Nombre: ${nombre}</p>
            <p>Email: ${correo}</p>
            <p>Provincia ${provincia}</p>
        `;
        mensajeErrorDiv.innerHTML = "";
    });

    formulario.addEventListener("input", function() {
        mensajeErrorDiv.innerHTML = "";
    });

    function mostrarError(mensaje) {
        mensajeErrorDiv.innerHTML = mensaje;
    }
});