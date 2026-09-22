/* ==========================================================
   INICIALIZAR TOOLTIPS
   ========================================================== */

   export function initTooltip() {

    const tooltips =
        document.querySelectorAll("[data-tooltip]");


    if (!tooltips.length) {
        return;
    }


    tooltips.forEach((tooltip) => {

        const message =
            tooltip.dataset.tooltip;


        if (!message || !message.trim()) {
            return;
        }

    });


    console.log("Tooltips iniciados correctamente");

}