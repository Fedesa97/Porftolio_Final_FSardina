import { arrayProyectosGraficos } from './proyectos_graficos.js';

document.addEventListener('DOMContentLoaded', function() {
    const contenedorInfo = document.querySelector(".contenedor_grafico");
    const h2 = document.querySelector("#titulo_detalle");
    const h3 = document.querySelector("#fecha");
    const pInfo = document.querySelector("#descripcion");
    const fotosCarrusel = document.querySelector(".carousel");
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPosition = 0; // Posición inicial del carrusel
    let proyectoElegido;

    // Obtener ID del proyecto de la URL
    const parametros = new URLSearchParams(window.location.search);
    const idRecibido = Number(parametros.get("id"));

    // Función para obtener el proyecto seleccionado
    function obtenerProyecto(id) {
        return arrayProyectosGraficos.find(proyecto => proyecto.id === id);
    }

    // Función para mostrar los detalles del proyecto
    function mostrarDetalleProyecto(proyecto) {
        if (proyecto) {
            h2.textContent = proyecto.nombre;
            h3.textContent = proyecto.fecha;
            pInfo.textContent = proyecto.descripcion;

            cargarImagenes(proyecto);
        } else {
            // Manejar caso donde no se encuentra el proyecto
            contenedorInfo.innerHTML = "<p>El proyecto seleccionado no existe.</p>";
        }
    }

    // Función para cargar las imágenes del carrusel
    function cargarImagenes(proyecto) {
        fotosCarrusel.innerHTML = proyecto.img.map(imgSrc => `<img src="${imgSrc}" alt="">`).join('');
    }

    // Función para mostrar la siguiente imagen en el carrusel
    function nextSlide() {
        currentPosition += fotosCarrusel.offsetWidth; // Aumenta la posición por el ancho del carrusel
        if (currentPosition > fotosCarrusel.scrollWidth - fotosCarrusel.offsetWidth) {
            currentPosition = 0; // Vuelve al inicio si alcanza el final del carrusel
        }
        fotosCarrusel.scrollTo({
            left: currentPosition,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    // Función para mostrar la imagen anterior en el carrusel
    function prevSlide() {
        currentPosition -= fotosCarrusel.offsetWidth; // Disminuye la posición por el ancho del carrusel
        if (currentPosition < 0) {
            currentPosition = fotosCarrusel.scrollWidth - fotosCarrusel.offsetWidth; // Vuelve al final si alcanza el inicio del carrusel
        }
        fotosCarrusel.scrollTo({
            left: currentPosition,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    // Event listeners para los botones de navegación del carrusel
    prevBtn.addEventListener('click', nextSlide);
    nextBtn.addEventListener('click', prevSlide);

    // Obtener y mostrar el proyecto seleccionado
    proyectoElegido = obtenerProyecto(idRecibido);
    mostrarDetalleProyecto(proyectoElegido);
});