// =========================
// DISPLAY REVIEW COUNT
// =========================

const reviewCount =
    localStorage.getItem("reviewCount") || 0;

document.getElementById("reviewCount").textContent =
    reviewCount;


// =========================
// FOOTER
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;