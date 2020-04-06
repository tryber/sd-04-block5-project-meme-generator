window.onload = function(){
    const caixaTexto = document.querySelector('#text-input');
    const textdisplayed = document.querySelector('#meme-image-container');
    caixaTexto.addEventListener('keyup', trocaTexto);

    function trocaTexto () {
        textdisplayed.innerText = caixaTexto.value;
      
      } 
}

 