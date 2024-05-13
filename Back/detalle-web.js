import { arrayProyectosWebs } from './proyectos_webs.js';

document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.querySelector("#titulo_detalle");
    const h3 = document.querySelector("#fecha");
    const pInfo = document.querySelector("#descripcion");
    const contenedorProyectosWebs = document.querySelector(".contenedor_web");
    const contenedorAudiovisual = document.querySelector(".audiovisual");

    // Obtener ID del proyecto de la URL
    const parametros = new URLSearchParams(window.location.search);
    const idRecibido = Number(parametros.get("id"));

    // Función para obtener el proyecto seleccionado
    function obtenerProyecto(id) {
        return arrayProyectosWebs.find(proyecto => proyecto.id === id);
    }

    // Función para mostrar los detalles del proyecto
    function mostrarDetalleProyecto(proyecto) {
        if (proyecto) {
            h2.textContent = proyecto.nombre;
            h3.textContent = proyecto.fecha;
            pInfo.textContent = proyecto.descripcion;

            cargarImagenes(proyecto);

            // Crear el artículo para la sección de audiovisuales
            contenedorAudiovisual.innerHTML +=
                `
                        

                        <video controls class="video">
                            <source src="${proyecto.video}" type="video/mp4">
                        </video>
                `;
        } else {
            // Manejar caso donde no se encuentra el proyecto
            contenedorProyectosWebs.innerHTML = "<p>El proyecto seleccionado no existe.</p>";
        }
    }

    // Cargar imágenes del proyecto
    function cargarImagenes(proyecto) {
    }

    // Obtener y mostrar el proyecto seleccionado
    const proyectoElegido = obtenerProyecto(idRecibido);
    mostrarDetalleProyecto(proyectoElegido);
});