const accountButton = document.querySelector(".account");
const welcome = document.querySelector(".user");
const quiz = document.querySelector(".Quizz");
const qE = document.querySelector(".qE");

const main = document.querySelector(".main");
const europe = document.querySelector(".europe");
const jeu = document.querySelector(".jeu")
let questionToDisplay = 0;

// faire apparaitre et disparaitre les blocs
europe.addEventListener("click", function () {
  main.style.display = "none";
  quiz.style.display = "flex";
  qE.textContent = questionsEurope[questionToDisplay].question;
  const reponsesDiv = document.createElement("div");
  reponsesDiv.innerHTML = "";
  jeu.appendChild(reponsesDiv);
  console.log(reponsesDiv);

  const boutonReponse = document.createElement("button");
  reponsesDiv.appendChild(boutonReponse);
  
  questionsEurope[questionToDisplay].reponses.forEach((reponse) => {
    const button = document.createElement("button");
    button.textContent = reponse ;
    button.classList.add("qE");
    reponsesDiv.appendChild(button);
    console.log("button"+button);
  //for (i=0; i<reponsesEurope.length; i++) {
  //reponsesEurope[0].textContent = questionsEurope[0].reponses[0];
  })}
);

//Fonction timer ;
function timer () { 
    let temps = 10;
    
    const timer = document.querySelector(".timer")
    
    setInterval(() => {
      timer.innerText = `${temps}`
      temps = temps <= 0 ? 0 : temps - 1
    }, 1000)};
    timer();

// création d'un tableau d'objets contenant les questions et les réponses pour le bloc Europe
const questionsEurope = [
  {
      question : "Quelle expression est consacrée par le traité de Maastricht ?",
      reponses : ["la culture eurasiatique", "la diversité culturelle", "la culture générale", "les droits de l'Homme"],
      reponseCorrecte : "la diversité culturelle",
  },
  {
      question : "l'Union europééenne mène des actio4ns militaires ... :",
      reponses : ["au Pakistan ?", "en Macédoine du Nord ?", "en Ukraine ?", "en Bosnie ?"],
      reponseCorrecte : "en Ukraine ?",
      },
  {
      question : "Quelle est la personne la plus riche d'Europe ?",
      reponses :["Volodymyr Zelenski", "Bernard Arnault", "Emmanuel Macron", "JuL"],
      reponseCorrecte : "Bernard Arnault",
  }
];

// function displayQuestion() {
//     const questionDiv = document.querySelector("div");
//     questionDiv.innerHTML = "";

//     const questionAffichee = document.createElement("p");
//     questionAffichee.classList.add("qE");
//     questionAffichee.innerHTML = <p>questionsEurope[questionToDisplay].question</p>;
//     console.log(questionAffichee);
//     questionDiv.appendChild(questionAffichee);

    // création du H2
    // const question = document.createElement("h2");
    // question.innerText = questionsEurope[questiontoDisplay].question;
    // card.appendChild(question);

    //création du bouton
    // const reponsesDiv = document.createElement("div");
    // reponsesDiv.innerHTML = "";
    // questionsEurope[questionToDisplay].reponses.forEach((reponse) => {
    //     const button = document.createElement("button");
    //     button.textContent = reponse ;
    //     button.classList.add("qE");
    //     reponsesDiv.appendChild(button);
    //     console.log("button"+button);
        // button.addEventListener("click", () => {
        //     questionToDisplay++
        //     if (questionToDisplay > questionsEurope.length -1) {
        //         console.log("fin du jeu")
        //     }
        //     else {
        //         displayQuestion();
        //     }
           // console.log(button.textContent);
            // if (button.textContent === questionsEurope[questionToDisplay].correctAnswer) {
            //     console.log("bonne réponse");
            //   } else {
            //     console.log("mauvaise réponse");
            //   }
          // }
  //       )}
  // displayQuestion();
      //)
    //}
    

        
              
              // questionToDisplay++;
           // score incrémenté
           
  


// const reponsesEurope = [document.querySelectorAll(".qE.button")]
// console.log(reponsesEurope);
//console.log("reponsesEurope[1]"+reponsesEurope[1]);
//let bouton =0;
//for ( i=0; i<reponsesEurope.length; i++) {
//  bouton[i] = reponsesEurope[i];
//  console.log("bouton[i]" +bouton[i])};
// const asia = document.querySelector(".asia");
// asia.addEventListener("click", function () {
//   main.style.display = "none";
//   quiz.style.display = "flex";
//   //   changer le quiz en quiz2
// });
// const america = document.querySelector(".america");
// america.addEventListener("click", function () {
//   main.style.display = "none";
//   quiz.style.display = "flex";
// });
// const africa = document.querySelector(".africa");
// africa.addEventListener("click", function () {
//   main.style.display = "none";
//   quiz.style.display = "flex";
//   qE.textContent = "Blablabla";
// });
// const australia = document.querySelector(".australia");
// australia.addEventListener("click", function () {
//   main.style.display = "none";
//   quiz.style.display = "flex";
// });


