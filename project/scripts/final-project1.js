// =========================
// GUIMARAS ARRAY
// =========================

const festivals = [

  {
    festivalName: "Manggahan Festival",
    location: "Guimaras, Philippines",
    imageUrl: "images/manggahan1.jpg"
  },

  {
    festivalName: "Guisi Lighthouse",
    location: "Nueva Valencia, Guimaras",
    imageUrl: "images/guisi.jpg"
  },

  {
    festivalName: "Alubihod Beach",
    location: "Jordan, Guimaras",
    imageUrl: "images/alubihod.jpg"
  },

  {
    festivalName: "Mango Plantation",
    location: "Guimaras, Philippines",
    imageUrl: "images/mango.jpg"
  },

  {
    festivalName: "Island Hopping",
    location: "Guimaras Islands",
    imageUrl: "images/island.jpg"
  }

];

// =========================
// SELECT ELEMENTS
// =========================

const gallery = document.querySelector(".gallery");

const heading = document.querySelector("main h2");

const menuButton = document.querySelector("#menu-button");

const navMenu = document.querySelector("#nav-menu");

// =========================
// HAMBURGER MENU
// =========================

menuButton.addEventListener("click", () => {

  navMenu.classList.toggle("open");

});

// =========================
// DISPLAY CARDS
// =========================

function displayFestivals(festivalList) {

  gallery.innerHTML = "";

  festivalList.forEach((festival) => {

    const card = document.createElement("section");

    card.innerHTML = `

      <h3>${festival.festivalName}</h3>

      <p><strong>Location:</strong> ${festival.location}</p>

      <img src="${festival.imageUrl}" 
           alt="${festival.festivalName}"
           loading="lazy">

    `;

    gallery.appendChild(card);

  });

}

// =========================
// INITIAL DISPLAY
// =========================

displayFestivals(festivals);

// =========================
// NAVIGATION
// =========================

// HOME
document.querySelector("#home").addEventListener("click", (e) => {

  e.preventDefault();

  heading.textContent = "Guimaras Highlights";

  displayFestivals(festivals);

});

// TOURIST SPOTS
document.querySelector("#tourist-spots").addEventListener("click", (e) => {

  e.preventDefault();

  heading.textContent = "Tourist Spots";

  const touristSpots = festivals.filter((festival) =>
    festival.festivalName !== "Manggahan Festival"
  );

  displayFestivals(touristSpots);

});

// FOOD & FESTIVALS
document.querySelector("#food-festivals").addEventListener("click", (e) => {

  e.preventDefault();

  heading.textContent = "Food & Festivals";

  const foodFestivals = festivals.filter((festival) =>
    festival.festivalName === "Manggahan Festival" ||
    festival.festivalName === "Mango Plantation"
  );

  displayFestivals(foodFestivals);

});

// CONTACT
document.querySelector("#contact").addEventListener("click", (e) => {

  e.preventDefault();

  heading.textContent = "Contact Information";

  gallery.innerHTML = `

    <section class="contact-card">

      <h3>Contact Us</h3>

      <p>Email: guimarastourism@gmail.com</p>

      <p>Phone: +63 912 345 6789</p>

      <p>Location: Guimaras, Philippines</p>

    </section>

  `;

});

// =========================
// FOOTER
// =========================

document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;