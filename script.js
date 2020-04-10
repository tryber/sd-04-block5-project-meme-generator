//Imagem
let img = document.querySelector("#meme-insert");
let imgMeme = document.querySelector("#meme-image");

//Textos
let textoMeme = document.querySelector("#meme-text");
let texto = document.querySelector("#text-input");

 //Capturando texto
texto.addEventListener("input", function()
{    
   textoMeme.innerHTML = texto.value;
});

//Carrega imagem
img.addEventListener("change", function(e){
    let url = URL.createObjectURL(e.target.files[0]);
    imgMeme.setAttribute('src', url)
});

//botões bordas
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");

let container = document.querySelector("#meme-image-container");
//preenche bordas
btn1.addEventListener("click", function(){    
    container.classList.add("borda1"); 
});

btn2.addEventListener("click", function(){   
    container.classList.add("borda2"); 
});

btn3.addEventListener("click", function(){
    container.classList.add("borda3"); 
});


