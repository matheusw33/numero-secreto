const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = geraNumeroSecreto();

function geraNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1);
}         

const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

elementoMenorValor.innerText = menorValor;
elementoMaiorValor.innerText = maiorValor;

console.log(numeroSecreto);