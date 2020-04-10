//Imagem
let img = document.querySelector("#meme-insert");
let imgMeme = document.querySelector("#meme-image");

//Textos
let textoMeme = document.querySelector("#meme-text");
let texto = document.querySelector("#text-input");

 //Capturando texto
texto.addEventListener("keypress", function()
{    
   textoMeme.innerHTML = texto.value;
});

//Carrega imagem
img.addEventListener("change", function(e){
    var url = URL.createObjectURL(e.target.files[0]);
    imgMeme.setAttribute('src', url)
});



