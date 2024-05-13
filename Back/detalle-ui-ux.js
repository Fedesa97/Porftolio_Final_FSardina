import { arrayProyectosUiUx } from './proyectos_uiux.js';

document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.querySelector("#titulo_detalle");
    const h3 = document.querySelector("#fecha");
    const pInfo = document.querySelector("#descripcion");
    const contenedorProyectosUiUx = document.querySelector(".contenedor_uiux");
    const contenedorImagen = document.querySelector(".imagenes_uiux");

    // Obtener ID del proyecto de la URL
    const parametros = new URLSearchParams(window.location.search);
    const idRecibido = Number(parametros.get("id"));

    // Función para obtener el proyecto seleccionado
    function obtenerProyecto(id) {
        return arrayProyectosUiUx.find(proyecto => proyecto.id === id);
    }

    // Función para mostrar los detalles del proyecto
    function mostrarDetalleProyecto(proyecto) {
        if (proyecto) {
            h2.textContent = proyecto.nombre;
            h3.textContent = proyecto.fecha;
            pInfo.textContent = proyecto.descripcion;

            cargarImagenes(proyecto);

            // Crear el artículo para la sección de audiovisuales
            contenedorImagen.innerHTML +=
                `
                <img src="${proyecto.img[1]}" alt="">
                `;
        } else {
            // Manejar caso donde no se encuentra el proyecto
            contenedorProyectosUiUx.innerHTML = "<p>El proyecto seleccionado no existe.</p>";
        }
    }

    // Cargar imágenes del proyecto
    function cargarImagenes(proyecto) {
    }

    // Obtener y mostrar el proyecto seleccionado
    const proyectoElegido = obtenerProyecto(idRecibido);
    mostrarDetalleProyecto(proyectoElegido);
});