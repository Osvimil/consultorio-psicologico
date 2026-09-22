function activateTab(
    selectedTab,
    tabs,
    panels
) {

    /* ------------------------------------------------------
       DESACTIVAR TODOS LOS TABS
       ------------------------------------------------------ */

    tabs.forEach((tab) => {

        tab.setAttribute(
            "aria-selected",
            "false"
        );

    });


    /* ------------------------------------------------------
       OCULTAR TODOS LOS PANELES
       ------------------------------------------------------ */

    panels.forEach((panel) => {

        panel.hidden = true;

    });


    /* ------------------------------------------------------
       ACTIVAR TAB SELECCIONADO
       ------------------------------------------------------ */

    selectedTab.setAttribute(
        "aria-selected",
        "true"
    );


    /* ------------------------------------------------------
       ENCONTRAR PANEL CORRESPONDIENTE
       ------------------------------------------------------ */

    const panelId =
        selectedTab.getAttribute("aria-controls");


    const selectedPanel =
        document.getElementById(panelId);


    if (!selectedPanel) {
        return;
    }


    /* ------------------------------------------------------
       MOSTRAR PANEL
       ------------------------------------------------------ */

    selectedPanel.hidden = false;

}


/* ==========================================================
   INICIALIZAR TABS
   ========================================================== */

export function initTabs() {

    const tabs =
        document.querySelectorAll('[role="tab"]');


    const panels =
        document.querySelectorAll('[role="tabpanel"]');


    if (!tabs.length || !panels.length) {
        return;
    }


    /* ------------------------------------------------------
       CLICK
       ------------------------------------------------------ */

    tabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            activateTab(
                tab,
                tabs,
                panels
            );

        });


        /* --------------------------------------------------
           TECLADO
           -------------------------------------------------- */

        tab.addEventListener("keydown", (event) => {

            const currentIndex =
                Array.from(tabs).indexOf(tab);


            let newIndex = currentIndex;


            switch (event.key) {

                case "ArrowRight":

                    newIndex =
                        (currentIndex + 1)
                        % tabs.length;

                    break;


                case "ArrowLeft":

                    newIndex =
                        (
                            currentIndex
                            - 1
                            + tabs.length
                        )
                        % tabs.length;

                    break;


                case "Home":

                    newIndex = 0;

                    break;


                case "End":

                    newIndex =
                        tabs.length - 1;

                    break;


                case "Enter":

                case " ":

                    activateTab(
                        tab,
                        tabs,
                        panels
                    );

                    return;


                default:

                    return;

            }


            event.preventDefault();


            tabs[newIndex].focus();


            activateTab(
                tabs[newIndex],
                tabs,
                panels
            );

        });

    });


    console.log("Tabs iniciado correctamente");

}