const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
const quiz = document.querySelector(".Quizz");
const qE = document.querySelector(".qE");
const qAf = document.querySelector(".qE");

//Fonction timer ;
function timer () { 
    let temps = 10;
    
    const timer = document.querySelector(".timer")
    
    setInterval(() => {
      timer.innerText = `${temps}`
      temps = temps <= 0 ? 0 : temps - 1
    }, 1000)};
    timer();

// ".question".classList.add (".europe");

// ajouter const quiz1, quiz2 ...
accountButton.addEventListener("click", function () {
  userName = prompt("Entre ton pseudo");
  welcome.textContent = userName ? `Bienvenue ${userName} !!` : `Bienvenue !!`;
});

// création d'un tableau d'objets contenant les questions et les réponses pour le bloc Europe
const questionsEurope = [
    {
        question : "Quelle expression est consacrée par le traité de Maastricht ?",
        _reponses : ["la culture eurasiatique", "la diversité culturelle", "la culture générale", "les droits de l'Homme"],
        get reponses(){
            return this._reponses;
        },
        reponseCorrecte() {
            return this._reponses[1];
        } //attention : distinguer le numéro de la réponse et son index
    },
    {
        question : "l'Union europééenne mène des actions militaires ... :",
        _reponses : ["au Pakistan ?","en Macédoine du Nord ?","en Ukraine ?","en Bosnie ?"],
        get reponses(){
            return this._reponses;
        },
        reponseCorrecte() {
            return this.reponses[2];//attention : distinguer le numéro de la réponse et son index
        },
    },
    {
        question : "Quelle est la personne la plus riche d'Europe ?",
        _reponses : ["Volodymyr Zelenski","Bernard Arnault","Emmanuel Macron","JuL"],
        get reponses(){
            return this._reponses;
        },
        reponseCorrecte() {
            return this.reponses[1];//attention : distinguer le numéro de la réponse et son index
        }
    }
];

//création d'une fonction random pour afficher les questions dans un ordre aléatoire 

// partie sur les pays
const main = document.querySelector(".main");
const europe = document.querySelector(".europe");
const reponsesEurope = [document.querySelectorAll(".qE.button")]
//console.log(reponsesEurope);
europe.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
  qE.textContent = questionsEurope[0].question;
  //for (i=0; i<reponsesEurope.length; i++) {
    reponsesEurope[0].innerHTML = questionsEurope[0].reponses[0];
    }
//}
);
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


