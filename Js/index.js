const today = new Date();
const currentYear = today.getFullYear();
const footer = document.createElement("footer");
footer.innerHTML = `&copy; ${currentYear} Promesse Fongba. All rights reserved.`;
document.body.appendChild(footer);
const skills = [
  { main: "UI/UX Design", sub: "Adobe Illustrator, Canva, Adobe Photoshop" },
  { main: "Software Engineering", sub: "HTML5, CSS3, Javascript, python, SQL" },
  {
    main: "Soft Skills",
    sub: "Bilingual(French/English), persistent, ambitous, team player",
  },
];
const container = document.querySelector(".skills_container");
skills.forEach((skill) => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<h3>${skill.main}</h3><p>${skill.sub}</p>`;
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