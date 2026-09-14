export function initNavbar() {

    const toggle = document.querySelector(".navbar__toggle");

    const menu = document.querySelector(".navbar__menu");


    if (!toggle || !menu) {

        return;

    }


    toggle.addEventListener("click", () => {

        menu.classList.toggle("is-open");

    });

}