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
      sub: "Bilingual(French/English), persistent, ambitous, team player",
    },
   
  ];
  
  let container = document.querySelector(".skills_container");
  skills.forEach((skill) => {
    let el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `<h3>${skill.main}</h3><p>${skill.sub}</p>`;
    container.appendChild(el);
  });
  
 // Use DOM selectors to get the form element
const messageForm = document.querySelector("[name='leave_message']");

// Add event listener to form
// So we can get the user's input values
// And create new messages using them
messageForm.addEventListener("submit", (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  // Access values from inputs
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Select the HTML element that will contain new messages (<ul></ul>)
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  // Begin creating the new message element (<li></li>)
  const newMessage = document.createElement("li");
  // Adding the content from users inputs into the new message element
  newMessage.innerHTML = `
  <a href=mailto:${usersEmail} >${usersName}</a>
  <span>${usersMessage}</span>
  `;

  // Creating a button to remove the new message
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Creating an event listener for when user clicks remove button
  removeButton.addEventListener("click", function(event) {
    // Access parent element of button (newMessage)
    const entry = event.target.parentNode;
    // Remove the message from the DOM
    entry.remove();
  });

  // Add removeButton to the newMessage
  newMessage.appendChild(removeButton);

  // Add new message to the DOM
  messageList.appendChild(newMessage);

  // Reset the form inputs
  messageForm.reset();
});