// Step 1: Create a date object and retrieve the current year
let today = new Date();
let thisYear = today.getFullYear();

// Step 2: Select the footer element from the DOM
let footer = document.createElement("footer"); // create footer element
footer.innerHTML = `&copy; ${thisYear} Promesse Fongba. All rights reserved.`;
document.body.appendChild(footer); // append footer to body

// Step 3: List your technical skills in an array
let skills = [
    { main: "UI/UX Design", sub: "Adobe Illustrator, Canva, Adobe Photoshop" },
    { main: "Software Engineering", sub: "HTML5, CSS3, Javascript, python, SQL" },
    {
      main: "Soft Skills",
      sub: "Bilingual(French/English), persistent, ambitous, team player, emphatetic",
    },
   
  ];
  
  let container = document.querySelector(".skills_container");
  skills.forEach((skill) => {
    let el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `<h3>${skill.main}</h3><p>${skill.sub}</p>`;
    container.appendChild(el);
  });
