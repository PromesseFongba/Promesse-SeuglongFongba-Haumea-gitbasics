// Step 1: Create a date object and retrieve the current year
let today = new Date();
let thisYear = today.getFullYear();

// Step 2: Select the footer element from the DOM
let footer = document.createElement("footer"); // create footer element
footer.innerHTML = `&copy; ${thisYear} Promesse Fongba. All rights reserved.`;
document.body.appendChild(footer); // append footer to body

// Step 3: List your technical skills in an array
let skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

// Step 4: Select the section of the document where you want to display the skills
let skillsSection = document.querySelector("#skills");

// Step 5: Select the unordered list within the skills section
let skillsList = skillsSection.querySelector("ul");

// Step 6: Loop over each skill in the array
skills.forEach(skill => {
    let listItem = document.createElement("li"); // create a list item for each skill
    listItem.innerText = skill;
    skillsList.appendChild(listItem); // append each skill to the list
});
