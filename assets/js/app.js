/* Banderas */

var mostrar = false;

/* Elementos */

var btnMostrar = document.getElementById("btnMenu");
var menu = document.getElementById("menuEscondido");
var pag = document.getElementById("container");

/* Eventos */

btnMostrar.addEventListener("click", function() {
    mostrar = !mostrar;
    mostrarMenu();
});

/* Funciones */

function mostrarMenu() {
    if (mostrar) {
        menu.classList.remove("d-none");
        menu.classList.add("d-flex");
        pag.classList.add("fondoDegradado");
    } else {
        menu.classList.remove("d-flex");
        menu.classList.add("d-none");
        pag.classList.remove("fondoDegradado");
    }
}