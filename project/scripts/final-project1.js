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
