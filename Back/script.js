import { arrayProyectosGraficos } from './proyectos_graficos.js';
import { arrayProyectosWebs } from './proyectos_webs.js';
import { arrayProyectosUiUx } from './proyectos_uiux.js';

// Lógica para mostrar los proyectos
let contenedorProyectosGraficos = document.querySelector("#informacion_grafico");
let contenedorProyectosWebs = document.querySelector("#informacion_web");
let contenedorProyectosUiUx = document.querySelector("#informacion_uiux");


//INICIAR
mostrarProyectosGraficos();
mostrarProyectosWebs();
mostrarProyectosUiUx();

//FUNCIONES
function mostrarProyectosGraficos() {
   contenedorProyectosGraficos.innerHTML = "";

   arrayProyectosGraficos.forEach(proyecto => {
       contenedorProyectosGraficos.innerHTML +=
           `
           <article class="align-left fade-in modal-btn image-container">
           <a href="../Front/grafico.html?id=${proyecto.id}"><div class="image-wrapper">
                           <img src="${proyecto.img[0]}" alt="">
                       </div></a>
                   </article>
                `;
   });
}

function mostrarProyectosWebs() {
    contenedorProyectosWebs.innerHTML = "";
 
    arrayProyectosWebs.forEach(proyecto => {
        contenedorProyectosWebs.innerHTML +=
            `
                    <article class="align-left fade-in modal-btn image-container">
                    <a href="../Front/web.html?id=${proyecto.id}"><div class="image-wrapper">
                            <img src="${proyecto.img[0]}" alt="">
                        </div></a>
                    </article>
                 `;
    });
 }

 
 function mostrarProyectosUiUx() {
    contenedorProyectosUiUx.innerHTML = "";
 
    arrayProyectosUiUx.forEach(proyecto => {
        contenedorProyectosUiUx.innerHTML +=
            `<article class="align-left fade-in modal-btn image-container">
            <a href="../Front/ui_ux.html?id=${proyecto.id}"><div class="image-wrapper">
            <img src="${proyecto.img[0]}" alt="">
            </div></a>
        </article>
     `;
    });
 }
 


/*ENTRADA PROYECTOS*/

document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    articles.forEach(article => {
        observer.observe(article);
    });
});



