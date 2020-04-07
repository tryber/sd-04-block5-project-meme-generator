

function botao (){

let texto = document.querySelector("#text-input");

let resultadoTxt = document.querySelector(".texto-digitado");

let butt = document.querySelector("button");

resultadoTxt.innerText = texto.value;

}

let loadFile = function(event) {
let image = document.querySelector('.meme-image');
image.src = URL.createObjectURL(event.target.files[0]);
};

butt.addEventListener("click", botao);
