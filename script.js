

let loadImage = function(event){
    let image = document.querySelector("#meme-image");
    image.style.width = "500px";
    image.style.height = "400px"

    //FUNÇÃO PEGA A IMAGEM CARREGADA NO INPUT (O MESMO CHAMOU ESSA FUNÇÃO 'ONCHANGE') E CONFIGURA COMO IMG SRC
    image.src = URL.createObjectURL(event.target.files[0]);

};
window.onload = function() {

let inputText = document.querySelector("#text-input");
let memePhrase = document.querySelector("#meme-text");

inputText.addEventListener('keyup',preencheFrase);

function preencheFrase(){
    memePhrase.innerText=inputText.value;
}
}