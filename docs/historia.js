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
