// rédaction de : "Quand je clique sur un bloc pays, 
//tous les blocs pays disparaissent et faire apparaitre un bloc de question"


// déclaration d'une fonction 
function apparitionDivQuestions() {
    const blocPays = document.querySelector(".container");//prendre le bon nom de class
    // je récupère le bloc qui contient les pays 
    console.log(blocPays);
    blocPays.addEventListener('click', function () {
        // j'écoute les événements sur blocPays
       blocPays.style.display = 'none';// je fais disparaitre mon bloc Pays en modifiant uniquement la ligne dislay de son css
        const blocQuestions = document.querySelector(".Quizz");//prendre le bon nom de class
        blocQuestions.style.display = 'flex';//je rends visible le blocQuestions en modifiant uniquement la ligne display de son CSS
        });
};

// appel de la fonction 
apparitionDivQuestions();