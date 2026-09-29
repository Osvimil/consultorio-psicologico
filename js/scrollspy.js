/* ==========================================================
   ACTIVAR ENLACE DE NAVEGACIÓN
   ========================================================== */

   function activateLink(
    links,
    activeId
) {

    links.forEach((link) => {

        const href =
            link.getAttribute("href");


        const isActive =
            href === `#${activeId}`;


        link.classList.toggle(
            "is-active",
            isActive
        );


        if (isActive) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );

        }

    });

}


/* ==========================================================
   INICIALIZAR SCROLLSPY
   ========================================================== */

export function initScrollSpy() {

    const links =
        document.querySelectorAll(
            '.navbar__link[href^="#"]'
        );


    /* ------------------------------------------------------
       COMPROBAR ENLACES
       ------------------------------------------------------ */

    if (!links.length) {

        return;

    }


    /* ------------------------------------------------------
       OBTENER IDs DE LAS SECCIONES
       ------------------------------------------------------ */

    const sections = [];


    links.forEach((link) => {

        const href =
            link.getAttribute("href");


        if (!href || href === "#") {

            return;

        }


        const section =
            document.querySelector(href);


        if (!section) {

            return;

        }


        sections.push(section);

    });


    /* ------------------------------------------------------
       COMPROBAR SECCIONES
       ------------------------------------------------------ */

    if (!sections.length) {

        return;

    }


    /* ------------------------------------------------------
       COMPROBAR SOPORTE
       ------------------------------------------------------ */

    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    /* ------------------------------------------------------
       CREAR OBSERVER
       ------------------------------------------------------ */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    activateLink(
                        links,
                        entry.target.id
                    );

                });

            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0
            }
        );


    /* ------------------------------------------------------
       OBSERVAR SECCIONES
       ------------------------------------------------------ */

    sections.forEach((section) => {

        observer.observe(section);

    });


    console.log(
        "ScrollSpy iniciado correctamente"
    );

}