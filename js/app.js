import { initNavbar } from "./navbar.js";
import { initDropdown } from "./dropdown.js";
import { initModal } from "./modal.js";
import { initToast } from "./toast.js";
import { initTabs } from "./tabs.js";
import { initTooltip } from "./tooltip.js";
import { initCarousel } from "./carousel.js";
import { initParallax } from "./parallax.js";
import { initAccordion } from "./accordion.js";
import { initCounter } from "./counter.js";
import { initScrollSpy } from "./scrollspy.js";
document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initDropdown();
    initModal();
    initToast();
    initTabs();
    initTooltip();
    initCarousel();
    initParallax();
    initAccordion();
    initCounter();
    initScrollSpy();
});