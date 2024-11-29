const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
const Quizz = document.querySelector(".Quizz");
accountButton.addEventListener('mouseover', function(){
    accountButton.style.filter = 'blur(0.5px)';
    accountButton.style.scale = 1.1;
    accountButton.addEventListener('mouseleave', function (){
        accountButton.style.filter = "none";
        accountButton.style.scale = 1;})
    })
accountButton.addEventListener("click", function () {
    userName = prompt("Entre ton pseudo");
    welcome.textContent = userName?`Bienvenue ${userName} !!`: `Bienvenue !!`  ;
});
// créer un tableau de questions
// let questions = [
//     {question: "En quelle année est la première fois que la Terre a été découverte par une expédition scientifique?", answer: "1571", country: "Europe"},
//     {question: "Quelle est la capitale du Canada?", answer: "Ottawa", country: "America"},
//     {question: "Quelle est la capitale du Japon?", answer: "Tokyo", country: "Asia"},
//     {question: "Quelle est la capitale de la France?", answer: "Paris", country: "Europe"},
//     {question: "Quelle est la capitale de l'Australie?", answer: "Canberra", country: "Australia"},
//     {question: "Quelle est la capitale de l'Afrique?", answer: "Bangui", country: "Africa"},



// partie sur les pays
const main = document.querySelector(".main");

const europe = document.querySelector(".europe");
europe.addEventListener("click", function () {
    main.style.display = 'none';
    Quizz.style.display = 'flex';
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


europe.addEventListener('mouseover', function(){
    europe.style.filter = 'blur(2px)';
    europe.style.scale = 1.1;
    europe.addEventListener('mouseleave', function (){
        europe.style.filter = "none";
        europe.style.scale = 1;

})
})