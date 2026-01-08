// Select DOM elements
const full = document.getElementById("lastModified");
const year = document.getElementById("currentyear");

// Display last modified date
full.innerHTML = `Last Modified <span class="highlight">${document.lastModified}</span>`;

// Display current year
year.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
