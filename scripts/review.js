const params = new URLSearchParams(window.location.search);

const product = params.get("product-name");
const rating = params.get("rating");
const installationDate = params.get("installation-date");
const features = params.getAll("features"); // multiple checkbox values
const comments = params.get("comments");
const username = params.get("name");

document.querySelector("#productOutput").textContent = product;
document.querySelector("#ratingOutput").textContent = rating;
document.querySelector("#dateOutput").textContent = installationDate;

document.querySelector("#featuresOutput").textContent = features.join(", ");

if (comments) {
  document.querySelector("#commentsOutput").textContent = comments;
} else {
  document.querySelector("#commentsOutput").textContent =
    "No written review provided.";
}

if (username) {
  document.querySelector("#nameOutput").textContent = username;
} else {
  document.querySelector("#nameOutput").textContent = "No Name provided";
}

let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);
document.querySelector("#reviewCount").textContent = count;
