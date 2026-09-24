/* =========================
   CONFIGURACIÓN
========================= */

const botones = document.querySelectorAll("[data-seccion]");
const secciones = document.querySelectorAll("main section");
const main = document.querySelector("main");


/* =========================
   MOSTRAR SECCIÓN
========================= */

function mostrarSeccion(id) {

    const seccion = document.getElementById(id);

    if (!seccion) return;


    /* Quitar sección activa */

    secciones.forEach((elemento) => {
        elemento.classList.remove("seccion-activa");
    });


    /* Quitar botón activo */

    botones.forEach((boton) => {
        boton.classList.remove("boton-activo");
    });


    /* Activar sección */

    seccion.classList.add("seccion-activa");


    /* Activar botones correspondientes */

    document
        .querySelectorAll(`[data-seccion="${id}"]`)
        .forEach((boton) => {
            boton.classList.add("boton-activo");
        });


    /*
        Esperamos a que el navegador
        aplique la clase activa.
    */

    requestAnimationFrame(() => {
        ajustarAlturaMain();
    });
}


/* =========================
   AJUSTAR ALTURA DEL MAIN
========================= */

function ajustarAlturaMain() {

    const seccionActiva = document.querySelector(
        "main section.seccion-activa"
    );

    if (!seccionActiva) {
        main.style.height = "0px";
        return;
    }


    const altura =
        seccionActiva.getBoundingClientRect().height;


    main.style.height = `${altura}px`;
}


/* =========================
   BOTONES
========================= */

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const id = boton.dataset.seccion;

        mostrarSeccion(id);

    });

});


/* =========================
   SECCIÓN INICIAL
========================= */

mostrarSeccion("sobre-mi");


/* =========================
   REDIMENSIONAR
========================= */

window.addEventListener("resize", () => {

    ajustarAlturaMain();

});


/* =========================
   CUANDO CARGA LA PÁGINA
========================= */

window.addEventListener("load", () => {

    ajustarAlturaMain();

});


/* =========================
   EFECTO EN PROYECTOS
========================= */

const proyectos = document.querySelectorAll(
    "#proyectos article"
);

proyectos.forEach((proyecto) => {

    proyecto.addEventListener("mouseenter", () => {

        proyecto.style.transform =
            "translateY(-5px)";

    });


    proyecto.addEventListener("mouseleave", () => {

        proyecto.style.transform =
            "translateY(0)";

    });

});


/* =========================
   BOTÓN PRINCIPAL
========================= */

const botonPrincipal =
    document.querySelector(".boton-principal");

if (botonPrincipal) {

    botonPrincipal.addEventListener("click", () => {

        const destino =
            botonPrincipal.dataset.seccion;

        mostrarSeccion(destino);

    });

}


/* =========================
   EFECTO EN FOTO
========================= */

const foto =
    document.querySelector(".foto-container");

if (foto) {

    foto.addEventListener("mouseenter", () => {

        foto.style.transform =
            "scale(1.03)";

    });


    foto.addEventListener("mouseleave", () => {

        foto.style.transform =
            "scale(1)";

    });

}


/* =========================
   EFECTO DE CLIC
========================= */

botones.forEach((boton) => {

    boton.addEventListener("mousedown", () => {

        boton.style.transform =
            "scale(0.95)";

    });


    boton.addEventListener("mouseup", () => {

        boton.style.transform =
            "scale(1)";

    });

});
