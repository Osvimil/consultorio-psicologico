/* ==========================================================
   CONSTANTES
   ========================================================== */

   const STORAGE_KEY =
   "psicobalance-theme";


const THEMES = {
   LIGHT: "light",
   DARK: "dark"
};


/* ==========================================================
  OBTENER TEMA DEL SISTEMA
  ========================================================== */

function getSystemTheme() {

   const prefersDark =
       window.matchMedia(
           "(prefers-color-scheme: dark)"
       ).matches;


   return prefersDark
       ? THEMES.DARK
       : THEMES.LIGHT;

}


/* ==========================================================
  OBTENER TEMA GUARDADO
  ========================================================== */

function getSavedTheme() {

   try {

       return localStorage.getItem(
           STORAGE_KEY
       );

   } catch (error) {

       return null;

   }

}


/* ==========================================================
  GUARDAR TEMA
  ========================================================== */

function saveTheme(theme) {

   try {

       localStorage.setItem(
           STORAGE_KEY,
           theme
       );

   } catch (error) {

       console.warn(
           "No fue posible guardar el tema."
       );

   }

}


/* ==========================================================
  APLICAR TEMA
  ========================================================== */

function applyTheme(
   theme,
   toggleButton
) {

   document.documentElement.setAttribute(
       "data-theme",
       theme
   );


   const isDark =
       theme === THEMES.DARK;


   if (toggleButton) {

       toggleButton.setAttribute(
           "aria-pressed",
           String(isDark)
       );


       toggleButton.setAttribute(
           "aria-label",
           isDark
               ? "Activar modo claro"
               : "Activar modo oscuro"
       );


       const icon =
           toggleButton.querySelector(
               ".theme-toggle__icon"
           );


       if (icon) {

           icon.textContent =
               isDark
                   ? "☀️"
                   : "🌙";

       }

   }

}


/* ==========================================================
  OBTENER TEMA INICIAL
  ========================================================== */

function getInitialTheme() {

   const savedTheme =
       getSavedTheme();


   if (
       savedTheme === THEMES.LIGHT ||
       savedTheme === THEMES.DARK
   ) {

       return savedTheme;

   }


   return getSystemTheme();

}


/* ==========================================================
  INICIALIZAR DARK MODE
  ========================================================== */

export function initDarkMode() {

   const toggleButton =
       document.querySelector(
           ".theme-toggle"
       );


   const initialTheme =
       getInitialTheme();


   applyTheme(
       initialTheme,
       toggleButton
   );


   if (!toggleButton) {

       return;

   }


   /* ------------------------------------------------------
      CAMBIAR TEMA
      ------------------------------------------------------ */

   toggleButton.addEventListener(
       "click",
       () => {

           const currentTheme =
               document.documentElement
                   .getAttribute("data-theme");


           const newTheme =
               currentTheme === THEMES.DARK
                   ? THEMES.LIGHT
                   : THEMES.DARK;


           applyTheme(
               newTheme,
               toggleButton
           );


           saveTheme(newTheme);

       }
   );


   console.log(
       "Dark Mode iniciado correctamente"
   );

}