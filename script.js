const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
accountButton.addEventListener("click", function () {
    userName = prompt("Entre ton pseudo");
    welcome.textContent = userName?`Bienvenue ${userName} !!`: `Bienvenue !!`  ;
});
// partie sur les pays
const main = document.querySelector(".main");
const europe = document.querySelector(".europe");
europe.addEventListener("click", function () {
    main.style.display = 'none';
})
const asia = document.querySelector(".asia");
asia.addEventListener("click", function () {
    main.style.display = 'none';
})
const america = document.querySelector(".america");
america.addEventListener("click", function () {
    main.style.display = 'none';
})
const africa = document.querySelector(".africa");
africa.addEventListener("click", function () {
    main.style.display = 'none';
})
const australia = document.querySelector(".australia");
australia.addEventListener("click", function () {
    main.style.display = 'none';
});




