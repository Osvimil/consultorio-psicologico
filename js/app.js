import { initNavbar } from "./navbar.js";
import { initDropdown } from "./dropdown.js";
import { initModal } from "./modal.js";
import { initToast } from "./toast.js";

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initDropdown();
    initModal();
    initToast();

});