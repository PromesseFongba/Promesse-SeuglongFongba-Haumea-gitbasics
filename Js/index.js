function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const today = new Date();
const currentYear = today.getFullYear();
const footer = document.createElement("footer");
footer.innerHTML = `&copy; ${currentYear} Promesse Fongba. All rights reserved.`;
document.body.appendChild(footer);
const skills = [
  { main: "UI/UX Design", sub: "Adobe Illustrator, Canva, Adobe Photoshop" },
  { main: "Software Engineering", sub: "HTML5, CSS3, Javascript, Python, SQL" },
  {
    main: "Soft Skills",
    sub: "Bilingual(French/English), persistent, ambitious, team player",
    audio: true
  },
];

const container = document.querySelector(".skills_container");

skills.forEach((skill) => {
  const el = document.createElement("article");
  el.className = "card";
  el.style.width = '500px';  // Set the width of the card
  el.style.height = '300px';  
  el.style.display = 'flex';
  el.style.borderRadius = '20px';
  el.style.flexDirection = 'column';
  el.style.backgroundColor = '#d7377a';  
  el.style.padding = '20px';  
  el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';  

  el.innerHTML = `<h3>${skill.main}</h3><p>${skill.sub}</p>`;

  if (skill.audio) {
    const audioHtml = `
      <audio controls="controls">
        <source src="bilingual.mp3" type="audio/mpeg">
        <source src="Bilingual.ogg" type="audio/ogg">
        <a href="bilingual.mp3">Download music from Greg</a> (MP3)
      </audio>
    `;
    el.innerHTML += audioHtml;
  }

  container.appendChild(el);
});




const createButton = (text) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.type = "button";
  return btn;
};
const createRemoveButton = () => {
  const removeBtn = createButton("remove");
  removeBtn.addEventListener("click", (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });
  return removeBtn;
};
const getUserDetails = (e) => {
  return {
    email: e.target.usersEmail.value,
    name: e.target.usersName.value,
    message: e.target.usersMessage.value,
  };
};
const createMessage = (e) => {
  const { email, name, message } = getUserDetails(e);
  const msg = document.createElement("li");
  msg.innerHTML = `
  <a href=mailto:${email} >${name}</a>
  <span>${message}</span>`;
  return msg;
};
const messageList = document.querySelector("#messages ul");
const messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = createMessage(e);
  const removeButton = createRemoveButton();
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});



document.addEventListener('DOMContentLoaded', function () {
  fetch('https://api.github.com/users/PromesseFongba/repos')
  .then(response => response.json())
  .then(repositories => {
      const projectSection = document.getElementById('project'); 
      const projectList = projectSection.querySelector('.year'); 

      for (let i = 0; i < repositories.length; i++) {
          const project = document.createElement('li');
          project.innerText = repositories[i].name;
          project.className = 'list'; 
          projectList.appendChild(project);
      }
  })
  .catch(error => {
      console.error('Failed to fetch repositories:', error);
      alert('Failed to fetch repositories. Please check the console for more details.');
  });
});




