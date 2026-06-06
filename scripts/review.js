let reviewCount =
        Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#counter").textContent =
    localStorage.getItem("reviewCount");