//store the selected elements we are using
const mainNav = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

// Add a click event to hamburger button to toggle the 'open' class on the navigation menu
hambutton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const units = [
  {
    Type: "Studio",
    Model: "Berri",
    Size: 410,
    imageUrl: "images/units/gallery_1920x1440_Studio_1.webp",
  },
  {
    Type: "Studio",
    Model: "Atwater",
    Size: 430,
    imageUrl: "images/units/gallery_1920x1440_Studio_2.webp",
  },
  {
    Type: "Studio",
    Model: "Papineau",
    Size: 410,
    imageUrl: "images/units/gallery_1920x1440_Studio_3.webp",
  },
  {
    Type: "Studio",
    Model: "St-Denis",
    Size: 455,
    imageUrl: "images/units/gallery_1920x1440_Studio_4.webp",
  },
  {
    Type: "Studio",
    Model: "Crémazie",
    Size: 480,
    imageUrl: "images/units/gallery_1920x1440_Studio_5.webp",
  },
  {
    Type: "Studio",
    Model: "Beaubien",
    Size: 430,
    imageUrl: "images/units/gallery_1920x1440_Studio_6.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Laurier",
    Size: 585,
    imageUrl: "images/units/gallery_1920x1440_1b_1.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Viau",
    Size: 620,
    imageUrl: "images/units/gallery_1920x1440_1b_2.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Rosemont",
    Size: 585,
    imageUrl: "images/units/gallery_1920x1440_1b_3.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Frontenac",
    Size: 640,
    imageUrl: "images/units/gallery_1920x1440_1b_4.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Parc",
    Size: 675,
    imageUrl: "images/units/gallery_1920x1440_1b_5.webp",
  },
  {
    Type: "1 Bedroom",
    Model: "Jarry",
    Size: 620,
    imageUrl: "images/units/gallery_1920x1440_1b_6.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "Pie-IX",
    Size: 820,
    imageUrl: "images/units/gallery_1920x1440_2b_1.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "Outremont",
    Size: 875,
    imageUrl: "images/units/gallery_1920x1440_2b_2.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "Villeneuve",
    Size: 910,
    imageUrl: "images/units/gallery_1920x1440_2b_3.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "Sherbrooke",
    Size: 820,
    imageUrl: "images/units/gallery_1920x1440_2b_4.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "St-Hubert",
    Size: 960,
    imageUrl: "images/units/gallery_1920x1440_2b_5.webp",
  },
  {
    Type: "2 Bedrooms",
    Model: "Hochelaga",
    Size: 875,
    imageUrl: "images/units/gallery_1920x1440_2b_6.webp",
  },
];

function createUnitCard(unitArray) {
  const container = document.querySelector("#unit_gallery");
  if (!container) return;
  container.innerHTML = "";

  unitArray.forEach((unit) => {
    let card = document.createElement("figure");
    let img = document.createElement("img");
    let model = document.createElement("figcaption");
    let type = document.createElement("p");
    let area = document.createElement("p");

    card.classList.add("unit-card");
    img.classList.add("unitImage");
    model.classList.add("title_card");
    type.classList.add("type_card");
    area.classList.add("area_card");

    model.textContent = unit.Model;
    type.textContent = unit.Type;
    area.innerHTML = `<span class="label">Size: </span> ${unit.Size} sq.ft`;

    img.setAttribute("src", unit.imageUrl);
    img.setAttribute("alt", `${unit.Model} Unit`);
    img.setAttribute("loading", "lazy");

    card.appendChild(img);
    card.appendChild(model);
    card.appendChild(type);
    card.appendChild(area);

    container.appendChild(card);
  });
}

// Find the gallery container
const unitGallery = document.querySelector("#unit_gallery");

if (unitGallery) {
  // Initial display
  createUnitCard(units);

  // Select the links
  const onebLink = document.querySelector("#one-b");
  const twobLink = document.querySelector("#two-b");
  const studioLink = document.querySelector("#studio");
  const allUnitsLink = document.querySelector("#allUnits");

  // Add listeners only if the elements exist
  if (onebLink) {
    onebLink.addEventListener("click", () => {
      const oneBedroomUnits = units.filter((unit) => unit.Type === "1 Bedroom");
      createUnitCard(oneBedroomUnits);
    });
  }

  if (twobLink) {
    twobLink.addEventListener("click", () => {
      const twoBedroomUnits = units.filter(
        (unit) => unit.Type === "2 Bedrooms",
      );
      createUnitCard(twoBedroomUnits);
    });
  }

  if (studioLink) {
    studioLink.addEventListener("click", () => {
      const studioUnits = units.filter((unit) => unit.Type === "Studio");
      createUnitCard(studioUnits);
    });
  }

  if (allUnitsLink) {
    allUnitsLink.addEventListener("click", () => {
      createUnitCard(units);
    });
  }
}

// ==============Form filler================

const professions = [
  {
    id: "pr-2024",
    name: "Operations Manager",
    averagerating: 4.5,
  },
  {
    id: "pr-0927",
    name: "Machine Learning Engineer",
    averagerating: 4.7,
  },
  {
    id: "re-3567",
    name: "Engineering Technician",
    averagerating: 3.5,
  },
  {
    id: "ty-6789",
    name: "Plant Manager",
    averagerating: 3.9,
  },
  {
    id: "po-3456",
    name: "Administrative Assistant",
    averagerating: 5.0,
  },
];

const professionSelect = document.querySelector("#profession");

if (professionSelect) {
  professions.forEach((profession) => {
    const option = document.createElement("option");
    option.value = profession.id;
    option.textContent = profession.name;
    professionSelect.appendChild(option);
  });
}

// ==============Form Receptor================

const params = new URLSearchParams(window.location.search);

const full = params.get("fullName");
const age = params.get("age");
const profession = params.get("profession");
const email = params.get("email");
const phone = params.get("phone");
const desiredUnit = params.get("desiredUnit");
const moveInDate = params.get("moveInDate");
const summarySection = document.querySelector("#app-summary");

if (summarySection) {
  const params = new URLSearchParams(window.location.search);

  const full = params.get("fullName");
  const age = params.get("age");
  const profession = params.get("profession");
  const email = params.get("email");
  const phone = params.get("phone");
  const desiredUnit = params.get("desiredUnit");
  const moveInDate = params.get("moveInDate");

  const fullNameOutput = document.querySelector("#fullNameOutput");
  const ageOutput = document.querySelector("#ageOutput");
  const professionOutput = document.querySelector("#professionOutput");
  const emailOutput = document.querySelector("#emailOutput");
  const phoneOutput = document.querySelector("#phoneOutput");
  const desiredUnitOutput = document.querySelector("#desiredUnitOutput");
  const moveInDateOutput = document.querySelector("#moveInDateOutput");
  const dateOutput = document.querySelector("#dateOutput");
  const appCountOutput = document.querySelector("#appCount");

  if (fullNameOutput) fullNameOutput.textContent = full || "";
  if (ageOutput) ageOutput.textContent = age || "";
  if (professionOutput) professionOutput.textContent = profession || "";
  if (emailOutput) emailOutput.textContent = email || "";
  if (phoneOutput) phoneOutput.textContent = phone || "";
  if (desiredUnitOutput) desiredUnitOutput.textContent = desiredUnit || "";
  if (moveInDateOutput) moveInDateOutput.textContent = moveInDate || "";
  if (dateOutput) dateOutput.textContent = new Date().toLocaleDateString();

  let count = Number(localStorage.getItem("appCount")) || 0;
  count++;
  localStorage.setItem("appCount", count);

  if (appCountOutput) appCountOutput.textContent = count;
}
