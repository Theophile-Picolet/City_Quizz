const main = document.querySelector(".main");
const europe = document.querySelector(".europe");
europe.addEventListener("click", function () {
  main.style.display = "none";
});

function apparitionDivQuestions() {
  const blocPays = document.querySelector(".main");//prendre le bon nom de class
  // je récupère le bloc qui contient les pays OU le main
  console.log(blocPays);
  blocPays.addEventListener('click', function () {
      // j'écoute les événements sur blocPays
     blocPays.style.display = 'none';// je fais disparaitre mon bloc Pays en modifiant uniquement la ligne dislay de son css
      const blocQuestions = document.querySelector(".Quizz");//prendre le bon nom de class
      blocQuestions.style.display = 'flex';//je rends visible le blocQuestions en modifiant uniquement la ligne display de son CSS
      });
};
apparitionDivQuestions();


const 