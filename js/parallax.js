/* ==========================================================
   ACTUALIZAR PARALLAX
   ========================================================== */

   function updateParallax(elements) {

    const scrollPosition =
        window.scrollY;


    elements.forEach((element) => {

        const speed =
            parseFloat(
                element.dataset.parallax
            ) || 0.2;


        const maxOffset =
            parseFloat(
                element.dataset.parallaxMax
            ) || 150;


        const offset =
            Math.min(
                scrollPosition * speed,
                maxOffset
            );


        element.style.transform =
            `translateY(${offset}px)`;

    });

}


/* ==========================================================
   INICIALIZAR PARALLAX
   ========================================================== */

export function initParallax() {

    const elements =
        document.querySelectorAll(
            "[data-parallax]"
        );


    if (!elements.length) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {
        return;
    }


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) {
                return;
            }


            requestAnimationFrame(() => {

                updateParallax(elements);


                ticking = false;

            });


            ticking = true;

        },
        {
            passive: true
        }
    );


    updateParallax(elements);


    console.log(
        "Parallax iniciado correctamente"
    );

}