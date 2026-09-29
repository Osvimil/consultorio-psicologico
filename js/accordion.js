/* ==========================================================
   ABRIR UN ELEMENTO DEL ACCORDION
   ========================================================== */

   function openAccordion(item, button, answer) {

    /* ------------------------------------------------------
       AGREGAR ESTADO VISUAL DE ELEMENTO ABIERTO
       ------------------------------------------------------ */

    item.classList.add("is-open");


    /* ------------------------------------------------------
       ACTUALIZAR ARIA
       ------------------------------------------------------ */

    button.setAttribute(
        "aria-expanded",
        "true"
    );


    /* ------------------------------------------------------
       MOSTRAR RESPUESTA
       ------------------------------------------------------ */

    answer.hidden = false;

}


/* ==========================================================
   CERRAR UN ELEMENTO DEL ACCORDION
   ========================================================== */

function closeAccordion(item, button, answer) {

    /* ------------------------------------------------------
       ELIMINAR ESTADO VISUAL DE ELEMENTO ABIERTO
       ------------------------------------------------------ */

    item.classList.remove("is-open");


    /* ------------------------------------------------------
       ACTUALIZAR ARIA
       ------------------------------------------------------ */

    button.setAttribute(
        "aria-expanded",
        "false"
    );


    /* ------------------------------------------------------
       OCULTAR RESPUESTA
       ------------------------------------------------------ */

    answer.hidden = true;

}


/* ==========================================================
   INICIALIZAR ACCORDION
   ========================================================== */

export function initAccordion() {

    const accordionItems =
        document.querySelectorAll(".faq__item");


    /* ------------------------------------------------------
       COMPROBAR SI EXISTEN ELEMENTOS
       ------------------------------------------------------ */

    if (!accordionItems.length) {

        return;

    }


    /* ------------------------------------------------------
       RECORRER TODOS LOS ELEMENTOS
       ------------------------------------------------------ */

    accordionItems.forEach((item) => {

        const button =
            item.querySelector(".faq__question");


        const answer =
            item.querySelector(".faq__answer");


        /* --------------------------------------------------
           COMPROBAR ESTRUCTURA
           -------------------------------------------------- */

        if (!button || !answer) {

            return;

        }


        /* --------------------------------------------------
           EVENTO CLICK
           -------------------------------------------------- */

        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains("is-open");


                /* ------------------------------------------
                   CERRAR SI YA ESTÁ ABIERTO
                   ------------------------------------------ */

                if (isOpen) {

                    closeAccordion(
                        item,
                        button,
                        answer
                    );

                    return;

                }


                /* ------------------------------------------
                   CERRAR LOS DEMÁS ELEMENTOS
                   ------------------------------------------ */

                accordionItems.forEach(
                    (otherItem) => {

                        if (
                            otherItem === item
                        ) {

                            return;

                        }


                        const otherButton =
                            otherItem.querySelector(
                                ".faq__question"
                            );


                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq__answer"
                            );


                        if (
                            !otherButton ||
                            !otherAnswer
                        ) {

                            return;

                        }


                        closeAccordion(
                            otherItem,
                            otherButton,
                            otherAnswer
                        );

                    }
                );


                /* ------------------------------------------
                   ABRIR ELEMENTO SELECCIONADO
                   ------------------------------------------ */

                openAccordion(
                    item,
                    button,
                    answer
                );

            }
        );

    });


    console.log(
        "Accordion iniciado correctamente"
    );

}