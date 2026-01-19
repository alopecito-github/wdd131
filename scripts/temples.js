//store the selected elements we are using
const mainNav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event to hamburger button to toggle the 'open' class on the navigation menu
hambutton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
