//Variáveis
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

const btnOpenFortune = document.querySelector('.btnOpenFortune');
const btnResetFortune = document.querySelector('.btnResetFortune');

const fortuneText = document.querySelector('.fortuneText');

let frase = [
    "Não compense na ira o que lhe falta na razão.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Siga os bons e aprenda com eles.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
    "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
    "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
    "Você sempre será a sua melhor companhia!",
];

//Eventos
btnOpenFortune.addEventListener("click", handleOpenClick);
btnResetFortune.addEventListener("click", handleOpenClick);
document.addEventListener("keydown", handleKeyPress);


//Funções
function handleOpenClick() {
    page1.classList.toggle("hide");
    page2.classList.toggle("hide");
    if (!page1.classList.contains("hide")) {
        newFortune();
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        if (page1.classList.contains("hide")) {
        returnToPage1();
        } else {
        openFortune();
        }
    }
}

function openFortune() {
    page1.classList.toggle("hide");
    page2.classList.toggle("hide");
    newFortune();
}

function returnToPage1() {
    page2.classList.toggle("hide");
    page1.classList.toggle("hide");
}

function newFortune() {
  let randomFortune = Math.floor(Math.random() * frase.length);
    fortuneText.innerText = frase[randomFortune];
}