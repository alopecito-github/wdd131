const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Get chapter list from localStorage or start with empty array
let chaptersArray = getChapterList() || [];

// Show any saved chapters when page loads
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  console.log("Button clicked");
  console.log("Input value before check:", input.value);

  if (input.value != "") {
    console.log("Adding chapter:", input.value);
    // make sure the input is not empty
    displayList(input.value); // 1. Add to DOM
    chaptersArray.push(input.value); // 2. Add to array
    setChapterList(); // 3. Save to localStorage
    console.log("Updated chaptersArray:", chaptersArray);

    input.value = ""; // clear the input
    input.focus(); // set the focus back to the input
  } else {
    console.log("Input is empty, not adding.");
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");

  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete");

  li.append(deletebutton);
  list.append(li);

  console.log("list created with item:", item);

  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // li.textContent includes the ❌
    input.focus();
  });
}

// Save array to localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Get array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Remove a chapter from array + localStorage
function deleteChapter(chapter) {
  // Remove the ❌ at the end of the text
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
