export function initDropdown() {

    const dropdown =
        document.querySelector(".dropdown");


    if (!dropdown) {
        return;
    }


    const trigger =
        dropdown.querySelector(".dropdown__trigger");


    const menu =
        dropdown.querySelector(".dropdown__menu");


    if (!trigger || !menu) {
        return;
    }


    trigger.addEventListener("click", () => {

        dropdown.classList.toggle("is-open");


        const isOpen =
            dropdown.classList.contains("is-open");


        trigger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    document.addEventListener("click", (event) => {

        if (!dropdown.contains(event.target)) {

            dropdown.classList.remove("is-open");


            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            dropdown.classList.remove("is-open");


            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}