var carregaArquivo = function(event){
    var arquivo = event.target;

    var leitor = new FileReader();
    leitor.onload=function()
    {
        var url = leitor.result;    
        var imagem = document.getElementById("imagem");
        imagem.src=url;
    }
    leitor.readAsDataURL(arquivo.files[0]);
}

var btntexto = document.querySelector("#btntexto");
btntexto.addEventListener("click", function(event){
    event.preventDefault();

    var texto = document.querySelector("#text-input"); 
    var textoMeme = document.querySelector("#texto-meme");
    textoMeme.innerHTML = texto.value;
    //console.log(texto.value);
    
});





