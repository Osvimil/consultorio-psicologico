let toast = null;

let toastMessage = null;

let toastTimeout = null;


/* ==========================================================
   MOSTRAR TOAST
   ========================================================== */

export function showToast(message) {

    if (!toast || !toastMessage) {
        return;
    }


    toastMessage.textContent = message;


    toast.classList.add("is-visible");


    clearTimeout(toastTimeout);


    toastTimeout = setTimeout(() => {

        toast.classList.remove("is-visible");

    }, 4000);

}


/* ==========================================================
   INICIALIZAR TOAST
   ========================================================== */

export function initToast() {

    toast =
        document.querySelector("#toast");


    if (!toast) {
        return;
    }


    toastMessage =
        toast.querySelector(".toast__message");


    if (!toastMessage) {
        return;
    }


    console.log("Toast iniciado correctamente");

}