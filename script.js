window.onload = function () {
    const caixaDeTexto = document.getElementById("text-input");
    const caixaDaImagem = document.getElementById("meme-image-container");
    const texto = document.getElementById("meme-text");
    const botaoUpload = document.getElementById("meme-insert");
    const imagem = document.getElementById("meme-image");

    function inserirTexto () {
        texto.innerText = caixaDeTexto.value;
    }
    function uploadImagem () {
        imagem.src = URL.createObjectURL(botaoUpload.files[0]);
    }

    caixaDeTexto.addEventListener('keyup', inserirTexto);
    botaoUpload.addEventListener('change', uploadImagem);
}
