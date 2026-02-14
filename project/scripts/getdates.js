// Select DOM elements
const fullModified = document.getElementById("lastModified");
const year = document.getElementById("currentyear");

// Display last modified date
fullModified.innerHTML = `Last Modified <span class="highlight">${document.lastModified}</span>`;

// Display current year
year.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
