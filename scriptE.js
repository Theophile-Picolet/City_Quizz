const questionsEurope = [
    {
        question : "Quelle expression est consacrée par le traité de Maastricht ?",
        answers : ["la culture eurasiatique", "la diversité culturelle", "la culture générale", "les droits de l'Homme"],
        correctAnswer : "la diversité culturelle",
    },
    {
        question : "l'Union europééenne mène des actio4ns militaires ... :",
        answers : ["au Pakistan ?", "en Macédoine du Nord ?", "en Ukraine ?", "en Bosnie ?"],
        correctAnswer : "en Ukraine ?",
        },
    {
        question : "Quelle est la personne la plus riche d'Europe ?",
        answers :["Volodymyr Zelenski", "Bernard Arnault", "Emmanuel Macron", "JuL"],
        correctAnswer : "Bernard Arnault",
    }
];

let questionToDisplay = 0;
// if (questionToDisplay =0 ; questionToDisplay <=questionsEurope.length; questionToDisplay++) {
// TADAAAAAAAAAA !!!!
    function displayQuestion() {
    const questionDiv = document.querySelector(".question");
    questionDiv.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("card");
    questionDiv.appendChild(card);
 // création du H2
    const question = document.createElement("h2");
    question.innerText = questionsEurope[questionToDisplay].question;
    card.appendChild(question);
    //création du bouton
    questionsEurope[questionToDisplay].answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        card.appendChild(button);
        button.addEventListener("click",() => {
            if (button.textContent === questionsEurope[questionToDisplay].correctAnswer) {
                alert("Bonne réponse");
                questionToDisplay++;
                displayQuestion();
            } else {
                alert("Mauvaise réponse");
                questionToDisplay++;
                displayQuestion();
            }
        })
})};
    displayQuestion();
    
    // questionToDisplay++;
    // if (questionToDisplay <= questionsEurope.length) {
    //     displayQuestion();
    // }
    // if (questionToDisplay < questionsEurope.length-1) {
    //     questionToDisplay++};


    

//             }}
            //questionToDisplay++; ou fin du game.

