// rédaction de : "Quand je clique sur un bloc pays, 
//tous les blocs pays disparaissent et faire apparaitre un bloc de question"
function apparitionDivQuestions() {
const blocPays = document.querySelectorAll(".bloc-pays");//prendre le bon nom de class
// je récupère le bloc qui contient les pays 

blocPays.addEventListener ('click', function () {
    // j'écoute les événements sur blocPays
    blocPays.setAttribute("display:none");// je fais disparaitre mon bloc Pays en modifiant uniquement la ligne dislay de son css
    
    const blocQuestions = document.querySelectorAll('bloc-questions');//prendre le bon nom de class
    blocQuestions.setAttribute("display:flex");//je rends visible le blocQuestions en modifiant uniquement la ligne display de son CSS
});
};
