/* ==========================================================
   ANIMAR UN CONTADOR
   ========================================================== */

   function animateCounter(counter) {

    const target =
        parseInt(
            counter.dataset.counter,
            10
        );


    /* ------------------------------------------------------
       COMPROBAR SI EL VALOR ES VÁLIDO
       ------------------------------------------------------ */

    if (
        Number.isNaN(target) ||
        target < 0
    ) {

        return;

    }


    const duration = 2000;

    const startTime = performance.now();


    /* ------------------------------------------------------
       ACTUALIZAR EL CONTADOR
       ------------------------------------------------------ */

    function updateCounter(currentTime) {

        const elapsedTime =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsedTime / duration,
                1
            );


        const currentValue =
            Math.floor(
                progress * target
            );


        counter.textContent =
            currentValue.toLocaleString("es-MX");


        /* --------------------------------------------------
           CONTINUAR ANIMACIÓN
           -------------------------------------------------- */

        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


/* ==========================================================
   INICIALIZAR CONTADORES
   ========================================================== */

export function initCounter() {

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    /* ------------------------------------------------------
       COMPROBAR SI EXISTEN CONTADORES
       ------------------------------------------------------ */

    if (!counters.length) {

        return;

    }


    /* ------------------------------------------------------
       COMPROBAR SOPORTE DEL NAVEGADOR
       ------------------------------------------------------ */

    if (
        !("IntersectionObserver" in window)
    ) {

        counters.forEach((counter) => {

            const target =
                parseInt(
                    counter.dataset.counter,
                    10
                );


            if (
                !Number.isNaN(target)
            ) {

                counter.textContent =
                    target.toLocaleString("es-MX");

            }

        });


        return;

    }


    /* ------------------------------------------------------
       CREAR OBSERVER
       ------------------------------------------------------ */

    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {

                        return;

                    }


                    const counter =
                        entry.target;


                    animateCounter(counter);


                    observerInstance.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: 0.5
            }
        );


    /* ------------------------------------------------------
       OBSERVAR TODOS LOS CONTADORES
       ------------------------------------------------------ */

    counters.forEach((counter) => {

        observer.observe(counter);

    });


    console.log(
        "Contadores iniciados correctamente"
    );

}