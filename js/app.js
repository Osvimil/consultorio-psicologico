import { initNavbar } from "./navbar.js";
import { initDropdown } from "./dropdown.js";
import { initModal } from "./modal.js";
import { initToast } from "./toast.js";
import { initTabs } from "./tabs.js";
import { initTooltip } from "./tooltip.js";
document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initDropdown();
    initModal();
    initToast();
    initTabs();
    initTooltip();
});