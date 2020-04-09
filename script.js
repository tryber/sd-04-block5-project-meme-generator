
var btntexto = document.querySelector("#meme-insret");
var texto = document.querySelector("#text-input"); 
var textoMeme = document.querySelector("#meme-text");

 var carregaArquivo = function(event){
    var arquivo = event.target;

    var leitor = new FileReader();
    leitor.onload=function()
    {
        var url = leitor.result;    
        var imagem = document.getElementById("meme-image");
        imagem.src=url;
    }
    leitor.readAsDataURL(arquivo.files[0]);
    textoMeme.innerHTML = texto.value;
}








