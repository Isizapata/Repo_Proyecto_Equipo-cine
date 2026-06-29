document.addEventListener("DOMContentLoaded", function () {
    const tracks = document.querySelectorAll(".carrusel-track");

    tracks.forEach(function (track) {
        const imagenesOriginales = Array.from(track.children).map(function (img) {
            return img.cloneNode(true);
        });

        track.innerHTML = "";

        while (track.scrollWidth < window.innerWidth * 1.5) {
            imagenesOriginales.forEach(function (img) {
                track.appendChild(img.cloneNode(true));
            });
        }

        const copia = Array.from(track.children).map(function (img) {
            return img.cloneNode(true);
        });

        copia.forEach(function (img) {
            track.appendChild(img);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sobres = document.querySelectorAll(".sobre-card");

    sobres.forEach(function (sobre) {
        const boton = sobre.querySelector(".boton-sobre");

        boton.addEventListener("click", function () {
            const yaEstaAbierto = sobre.classList.contains("abierto");

            sobres.forEach(function (otroSobre) {
                otroSobre.classList.remove("abierto");
            });

            if (!yaEstaAbierto) {
                sobre.classList.add("abierto");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tickets = document.querySelectorAll(".ticket-info");

    const modal = document.getElementById("modalTicket");
    const tituloModal = document.getElementById("modalTicketTitulo");
    const textoModal = document.getElementById("modalTicketTexto");
    const botonCerrar = document.querySelector(".modal-ticket-cerrar");
    const fondoModal = document.querySelector("[data-cerrar-modal]");

    if (!modal || !tituloModal || !textoModal || !botonCerrar || !fondoModal) {
        return;
    }

    function abrirModal(ticket) {
        tituloModal.textContent = ticket.dataset.titulo;
        textoModal.textContent = ticket.dataset.texto;

        modal.hidden = false;
    }

    function cerrarModal() {
        modal.hidden = true;
    }

    tickets.forEach(function (ticket) {
        ticket.addEventListener("click", function () {
            abrirModal(ticket);
        });
    });

    botonCerrar.addEventListener("click", cerrarModal);
    fondoModal.addEventListener("click", cerrarModal);

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && !modal.hidden) {
            cerrarModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bloqueImpacto = document.getElementById("bloqueImpactoOscar");
    const numeroImpacto = document.getElementById("numeroImpactoOscar");
    const subrayadoImpacto = document.getElementById("subrayadoImpactoOscar");

    if (!bloqueImpacto || !numeroImpacto) {
        return;
    }

    let animacionEjecutada = false;

    function generarNumeroTresCifras() {
        return Math.floor(Math.random() * 900) + 100;
    }

    function generarNumeroDosCifras() {
        return Math.floor(Math.random() * 90) + 10;
    }

    function animarNumeroImpacto() {
        const duracionTotal = 2400;
        const inicio = performance.now();

        numeroImpacto.classList.add("animando");

        if (subrayadoImpacto) {
            subrayadoImpacto.classList.remove("subrayado-activo");
        }

        function actualizar(tiempoActual) {
            const progreso = Math.min((tiempoActual - inicio) / duracionTotal, 1);

            if (progreso < 0.55) {
                numeroImpacto.textContent = generarNumeroTresCifras();
            } else if (progreso < 0.9) {
                numeroImpacto.textContent = generarNumeroDosCifras();
            } else {
                numeroImpacto.textContent = "44";
            }

            if (progreso < 1) {
                requestAnimationFrame(actualizar);
            } else {
                numeroImpacto.textContent = "44";

                numeroImpacto.classList.remove("animando");
                numeroImpacto.classList.remove("animacion-terminada");

                /*
                Esta línea fuerza al navegador a reiniciar
                la animación del golpe final.
                */
                void numeroImpacto.offsetWidth;

                numeroImpacto.classList.add("animacion-terminada");

                /*
                El subrayado aparece después de que el 44
                hace su golpe final.
                */
                if (subrayadoImpacto) {
                    setTimeout(function () {
                        subrayadoImpacto.classList.add("subrayado-activo");
                    }, 550);
                }
            }
        }

        requestAnimationFrame(actualizar);
    }

    const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting && !animacionEjecutada) {
                animacionEjecutada = true;
                animarNumeroImpacto();
                observador.unobserve(bloqueImpacto);
            }
        });
    }, {
        threshold: 0.55
    });

    observador.observe(bloqueImpacto);
});

document.addEventListener("DOMContentLoaded", function () {
    const comparador = document.getElementById("comparadorProductoras");
    const boton = document.getElementById("botonComparaProductoras");
    const etiqueta = document.getElementById("etiquetaComparadorProductoras");

    if (!comparador || !boton || !etiqueta) {
        return;
    }

    boton.addEventListener("click", function () {
        const mostrandoTaquilla = comparador.classList.toggle("mostrando-taquilla");

        if (mostrandoTaquilla) {
            etiqueta.textContent = "Taquilla";
        } else {
            etiqueta.textContent = "Premios Oscar";
        }
    });
});