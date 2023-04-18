const dica = document.querySelector("#dica")
const btnSubmit = document.querySelector("#btn");
const campoNumero = document.querySelector("#numero");
const canva = document.querySelector(".canva");
const btnReset = document.querySelector(".btn-reset");

btnSubmit.addEventListener('click', function(e){
    
    if (campoNumero.value == numeroSecreto){
        canva.innerHTML = `
        <p>Acertou!!!!</p>
        <button id="btn-reset">Tentar novamente</button>
        `
    }else{
        comparaNumero(); 
    }
      
    e.preventDefault();
})

function comparaNumero(){    
    if( campoNumero.value > numeroSecreto){
        dica.innerHTML = `<p> O numero secreto é menor.</p><i class="bi bi-chevron-double-down"></i>`;
        campoNumero.value = '';
    }else if(campoNumero.value < numeroSecreto) {
        dica.innerHTML = `<p> O numero secreto é maior.</p><i class="bi bi-chevron-double-up"></i>`;
        campoNumero.value = '';
    } 
}

document.body.addEventListener("click", e =>{
    if(e.target.id == 'btn-reset'){
        window.location.reload();
    }
})
