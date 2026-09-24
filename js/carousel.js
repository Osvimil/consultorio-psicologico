/* ==========================================================
   INICIALIZAR UN CAROUSEL
   ========================================================== */

function initSingleCarousel(carousel) {

    const track =
        carousel.querySelector(".carousel__track");


    const slides =
        carousel.querySelectorAll(".carousel__slide");


    const previousButton =
        carousel.querySelector("[data-carousel-prev]");


    const nextButton =
        carousel.querySelector("[data-carousel-next]");


    const dots =
        carousel.querySelectorAll("[data-carousel-dot]");


    if (!track || !slides.length) {
        return;
    }


    /* ------------------------------------------------------
       ESTADO DEL CAROUSEL
       ------------------------------------------------------ */

    let currentIndex = 0;

    let autoplayInterval = null;


    /* ------------------------------------------------------
       ACTUALIZAR CAROUSEL
       ------------------------------------------------------ */

    function updateCarousel() {

        const offset =
            currentIndex * 100;


        track.style.transform =
            `translateX(-${offset}%)`;


        slides.forEach((slide, index) => {

            const isActive =
                index === currentIndex;


            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );

        });


        dots.forEach((dot, index) => {

            const isActive =
                index === currentIndex;


            dot.classList.toggle(
                "is-active",
                isActive
            );


            dot.setAttribute(
                "aria-current",
                String(isActive)
            );

        });

    }


    /* ------------------------------------------------------
       IR A UN SLIDE ESPECÍFICO
       ------------------------------------------------------ */

    function goToSlide(index) {

        currentIndex = index;


        updateCarousel();

    }


    /* ------------------------------------------------------
       SIGUIENTE SLIDE
       ------------------------------------------------------ */

    function nextSlide() {

        currentIndex =
            (currentIndex + 1)
            % slides.length;


        updateCarousel();

    }


    /* ------------------------------------------------------
       SLIDE ANTERIOR
       ------------------------------------------------------ */

    function previousSlide() {

        currentIndex =
            (
                currentIndex
                - 1
                + slides.length
            )
            % slides.length;


        updateCarousel();

    }


    /* ------------------------------------------------------
       DETENER AUTOPLAY
       ------------------------------------------------------ */

    function stopAutoplay() {

        if (autoplayInterval === null) {
            return;
        }


        clearInterval(
            autoplayInterval
        );


        autoplayInterval = null;

    }


    /* ------------------------------------------------------
       INICIAR AUTOPLAY
       ------------------------------------------------------ */

    function startAutoplay() {

        stopAutoplay();


        autoplayInterval =
            setInterval(() => {

                nextSlide();

            }, 5000);

    }


    /* ------------------------------------------------------
       BOTÓN ANTERIOR
       ------------------------------------------------------ */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                previousSlide();

                startAutoplay();

            }
        );

    }


    /* ------------------------------------------------------
       BOTÓN SIGUIENTE
       ------------------------------------------------------ */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                nextSlide();

                startAutoplay();

            }
        );

    }


    /* ------------------------------------------------------
       INDICADORES
       ------------------------------------------------------ */

    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                goToSlide(index);

                startAutoplay();

            }
        );

    });


    /* ------------------------------------------------------
       PAUSAR AL PASAR EL MOUSE
       ------------------------------------------------------ */

    carousel.addEventListener(
        "mouseenter",
        () => {

            stopAutoplay();

        }
    );


    /* ------------------------------------------------------
       REANUDAR AL SALIR
       ------------------------------------------------------ */

    carousel.addEventListener(
        "mouseleave",
        () => {

            startAutoplay();

        }
    );


    /* ------------------------------------------------------
       NAVEGACIÓN CON TECLADO
       ------------------------------------------------------ */

    carousel.addEventListener(
        "keydown",
        (event) => {

            switch (event.key) {

                case "ArrowLeft":

                    event.preventDefault();

                    previousSlide();

                    startAutoplay();

                    break;


                case "ArrowRight":

                    event.preventDefault();

                    nextSlide();

                    startAutoplay();

                    break;


                case "Home":

                    event.preventDefault();

                    goToSlide(0);

                    startAutoplay();

                    break;


                case "End":

                    event.preventDefault();

                    goToSlide(
                        slides.length - 1
                    );

                    startAutoplay();

                    break;

            }

        }
    );


    /* ------------------------------------------------------
       DETENER AUTOPLAY AL SALIR DE LA PÁGINA
       ------------------------------------------------------ */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                stopAutoplay();

            } else {

                startAutoplay();

            }

        }
    );


    /* ------------------------------------------------------
       ESTADO INICIAL
       ------------------------------------------------------ */

    updateCarousel();


    startAutoplay();

}


/* ==========================================================
   INICIALIZAR TODOS LOS CAROUSELES
   ========================================================== */

export function initCarousel() {

    const carousels =
        document.querySelectorAll("[data-carousel]");


    if (!carousels.length) {
        return;
    }


    carousels.forEach((carousel) => {

        initSingleCarousel(carousel);

    });


    console.log(
        "Carouseles iniciados correctamente"
    );

}