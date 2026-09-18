function openModal(modal) {

    modal.classList.add("is-open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    modal.classList.remove("is-open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


export function initModal() {

    const modalOpenButtons =
        document.querySelectorAll("[data-modal-open]");


    const modals =
        document.querySelectorAll(".modal");


    if (!modalOpenButtons.length || !modals.length) {
        return;
    }


    /* ------------------------------------------------------
       ABRIR MODAL
       ------------------------------------------------------ */

    modalOpenButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const modalId =
                button.dataset.modalOpen;


            const modal =
                document.getElementById(modalId);


            if (!modal) {
                return;
            }


            openModal(modal);

        });

    });


    /* ------------------------------------------------------
       CERRAR MODAL
       ------------------------------------------------------ */

    modals.forEach((modal) => {

        const closeButton =
            modal.querySelector(".modal__close");


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                () => {

                    closeModal(modal);

                }
            );

        }


        /* --------------------------------------------------
           CERRAR HACIENDO CLIC EN EL FONDO
           -------------------------------------------------- */

        modal.addEventListener("click", (event) => {

            if (event.target === event.currentTarget) {

                closeModal(modal);

            }

        });

    });


    /* ------------------------------------------------------
       CERRAR CON ESCAPE
       ------------------------------------------------------ */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }


        modals.forEach((modal) => {

            if (modal.classList.contains("is-open")) {

                closeModal(modal);

            }

        });

    });

}