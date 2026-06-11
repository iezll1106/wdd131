// =========================
// REVIEW COUNTER
// =========================

// Get current count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// When form is submitted
document.querySelector("form").addEventListener("submit", () => {

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

});

// =========================
// FOOTER
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;