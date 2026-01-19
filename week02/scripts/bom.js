// 1) Create variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  // 1) Check for non-empty input
  if (input.value.trim() !== "") {
    // 2) Create list item
    const li = document.createElement("li");
    const capitalizedValue = input.value.trim();

    li.textContent =
      capitalizedValue.charAt(0).toUpperCase() + capitalizedValue.slice(1);

    // 3) Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    // 4) Accessibility for screen readers
    deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

    // 5) Append button to li
    li.append(deleteButton);

    // Button code to remove li
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });

    // 6) Append li to list
    list.append(li);

    // 7) Clear input
    input.value = "";
  }

  // 8) Always return focus to input
  input.focus();
});
