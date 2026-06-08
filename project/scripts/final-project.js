// =========================
// HAMBURGER MENU
// =========================

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// =========================
// FOOTER
// =========================

document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
