//Imagem
let img = document.querySelector("#meme-insert");
let imgMeme = document.querySelector("#meme-image");

//Textos
let textoMeme = document.querySelector("#meme-text");
let texto = document.querySelector("#text-input");

//Container
let container = document.querySelector("#meme-image-container");

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

//preenche bordas
btn1.addEventListener("click", function(){
    container.style.border = "3px dashed red";
});

btn2.addEventListener("click", function(){
    container.style.border = "5px double blue";
});

btn3.addEventListener("click", function(){
    container.style.border = "6px groove green";
});

//botões memes
let btmeme1 = document.querySelector("#meme-1");
let btmeme2 = document.querySelector("#meme-2");
let btmeme3 = document.querySelector("#meme-3");
let btmeme4 = document.querySelector("#meme-4");

//Carrega memes
btmeme1.addEventListener("click", function(e){
    let img ="imgs/meme1.jpeg";
    imgMeme.setAttribute('src', img);
});

btmeme2.addEventListener("click", function(e){
    let img ="imgs/meme2.jpeg";
    imgMeme.setAttribute('src', img);
});

btmeme3.addEventListener("click", function(e){
    let img ="imgs/meme3.jpeg";
    imgMeme.setAttribute('src', img);
});

btmeme4.addEventListener("click", function(e){
    let img ="imgs/meme4.jpeg";
    imgMeme.setAttribute('src', img);
});

