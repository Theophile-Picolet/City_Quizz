const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
const quiz = document.querySelector(".Quizz");
const qE = document.querySelector(".qE");
const qAf = document.querySelector(".qE");

// ".question".classList.add (".europe");

// ajouter const quiz1, quiz2 ...
accountButton.addEventListener("click", function () {
  userName = prompt("Entre ton pseudo");
  welcome.textContent = userName ? `Bienvenue ${userName} !!` : `Bienvenue !!`;
});
// partie sur les pays
const main = document.querySelector(".main");
const europe = document.querySelector(".europe");
europe.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
  qE.textContent = "sqdqf";
});
const asia = document.querySelector(".asia");
asia.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
  //   changer le quiz en quiz2
});
const america = document.querySelector(".america");
america.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
});
const africa = document.querySelector(".africa");
africa.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
  qE.textContent = "Blablabla";
});
const australia = document.querySelector(".australia");
australia.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
});
