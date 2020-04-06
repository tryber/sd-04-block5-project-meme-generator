window.onload = function(){
    const caixaTexto = document.querySelector('#text-input');
    const textdisplayed = document.querySelector('#textToDisplay');
    caixaTexto.addEventListener('keyup', trocaTexto);

    function trocaTexto () {
        textdisplayed.innerText = caixaTexto.value;
      
      } 
}

 