//store the selected elements we are using
const mainNav = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

// Add a click event to hamburger button to toggle the 'open' class on the navigation menu
hambutton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December 9",
    area: 25349,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg",
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2019, November 3",
    area: 11906,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg",
  },
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York, USA",
    dedicated: "2000, April 6",
    area: 10900,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-temple-lds-830813-wallpaper.jpg",
  },
];

function createTempleCard(templeArray) {
  document.querySelector("#temple-cards").innerHTML = "";
  // Loop through each temple in the array
  templeArray.forEach((temple) => {
    //Create elements
    let card = document.createElement("figure");
    let img = document.createElement("img");
    let name = document.createElement("figcaption");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");

    // add classes so CSS applies
    card.classList.add("temple-card");
    img.classList.add("templeImage");
    name.classList.add("title_card");

    // fill text content
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq.ft`;

    // image attributes
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    // build card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    document.querySelector("#temple-cards").appendChild(card);
  });
}

// Calling the function
createTempleCard(temples);

// Event listener Menu links
/*Filtering Menu buttons 
      -Old – temples built before 1900 
        New – temples built after 2000
        Large – temples larger than 90,000 square feet
        Small – temples smaller than 10,000 square feet
        Home – displays all the temples stored in the array.*/

const oldLink = document.querySelector("#oldTemples");
const newLink = document.querySelector("#newTemples");
const largeLink = document.querySelector("#largeTemples");
const smallLink = document.querySelector("#smallTemples");
const allLink = document.querySelector("#allTemples");

oldLink.addEventListener("click", () => {
  // Filter temples with dedicated year < 1900
  let oldTemples = temples.filter((temple) => {
    let year = Number(temple.dedicated.substring(0, 4));
    return year < 1900;
  });

  createTempleCard(oldTemples);
});

newLink.addEventListener("click", () => {
  // Filter temples with dedicated year >= 2000
  let newTemples = temples.filter((temple) => {
    let year = Number(temple.dedicated.substring(0, 4));
    return year >= 2000;
  });
  createTempleCard(newTemples);
});

largeLink.addEventListener("click", () => {
  // Filter Large – temples larger than 90,000 square feet
  let largeTemples = temples.filter((temple) => {
    let area = Number(temple.area);
    return area > 90000;
  });

  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", () => {
  // Small – temples smaller than 10,000 square feet
  let smallTemples = temples.filter((temple) => {
    let area = Number(temple.area);
    return area < 10000;
  });

  createTempleCard(smallTemples);
});

allLink.addEventListener("click", () => {
  // go back to home
  createTempleCard(temples);
});
