let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Juan Gomez" },
    { section: "002", enrolled: 50, instructor: "Joan Smith" },
    { section: "003", enrolled: 70, instructor: "Fred Mash" },
  ],
};

function displayCourseNam(course) {
  const courseText = course.code + ": " + course.title;
  // Option 1 = `${course.code} – ${course.title}`
  // Option 2 document.querySelector("#courseName").innerHTML = courseText;
  // Option 3 const courseNameElement = document.getElementById("courseName");
  document.getElementById("courseName").innerHTML = courseText;
}

function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  tbody.innerHTML = rows;
}

/*
function displaySections(course) {
  const sectionsTable = document.getElementById("sections");
  const tbody = sectionsTable.querySelector("tbody");

  // Clear any previous rows
  tbody.innerHTML = "";

  course.sections.forEach(function (sectionObj) {
    const row = document.createElement("tr");

    const sectionCell = document.createElement("td");
    sectionCell.textContent = sectionObj.section;

    const enrolledCell = document.createElement("td");
    enrolledCell.textContent = sectionObj.enrolled;

    const instructorCell = document.createElement("td");
    instructorCell.textContent = sectionObj.instructor;

    row.appendChild(sectionCell);
    row.appendChild(enrolledCell);
    row.appendChild(instructorCell);

    tbody.appendChild(row);
  });
} */

displayCourseNam(aCourse);
renderSections(aCourse);
