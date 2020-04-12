const caixaDeTexto = document.querySelector("#text-input");
const caixaDaImagem = document.querySelector("#meme-image-container");
const texto = document.querySelector("#meme-text");

function inserirTexto () {
    texto.innerText = caixaDeTexto.value;
}

caixaDeTexto.addEventListener('keyup', inserirTexto);
