const touristSpots = [
    {
        name: "Alubihod Beach",
        type: "Beach",
        location: "Nueva Valencia",
        image: "images/tourist-spot/alubihod.webp",
        description: "A famous white-sand beach known for its crystal-clear waters and island-hopping adventures."
    },
    {
        name: "Taklong Island",
        type: "Island",
        location: "Jordan",
        image: "images/tourist-spot/taklong_island.webp",
        description: "A protected marine reserve rich in biodiversity and scenic coastal landscapes."
    },
    {
        name: "Guisi Lighthouse",
        type: "Historical Site",
        location: "Nueva Valencia",
        image: "images/tourist-spot/guise_lighthouse.webp",
        description: "A historic Spanish-era lighthouse offering spectacular views of the coastline."
    },
    {
        name: "Tatlong Pulo",
        type: "Island",
        location: "Jordan",
        image: "images/tourist-spot/tatlongpulo1.webp",
        description: "A cluster of picturesque islets surrounded by clear waters and coral reefs."
    },
    {
        name: "Magic Island",
        type: "Island",
        location: "Nueva Valencia",
        image: "images/tourist-spot/magic_island.webp",
        description: "An enchanting island known for its vibrant marine life and stunning sunsets, perfect for snorkeling and relaxation."
    },
    {
        name: "Natago Beach",
        type: "Beach",
        location: "Jordan",
        image: "images/tourist-spot/natago4.webp",
        description: "A quite beach with clear waters and a peaceful atmosphere, ideal for swimming and relaxing."
    }
];

function displayTouristSpots(spots) {

    const container = document.querySelector("#featured-spots");

    if (!container) return;

    container.innerHTML = "";

    spots.forEach((spot) => {

        container.innerHTML += `
            <section class="spot-card">

                <img src="${spot.image}" alt="${spot.name}" loading="lazy">

                <h3>${spot.name}</h3>

                <p><strong>Type:</strong> ${spot.type}</p>

                <p><strong>Location:</strong> ${spot.location}</p>

                <p>${spot.description}</p>

            </section>
        `;
    });
}

displayTouristSpots(touristSpots);

const today = new Date();
const hour = today.getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning! Welcome to Guimaras Island.";
}
else if (hour < 18) {
    greeting = "Good Afternoon! Explore the beauty of Guimaras.";
}
else {
    greeting = "Good Evening! Enjoy the peaceful charm of Guimaras.";
}

document.querySelector("#greeting").textContent = greeting;

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
