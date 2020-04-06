//Coletando as variáveis de entrada:

function colect(){
  let text = document.getElementById('text-input');
  let image = document.getElementById('meme-insert');
}
let button = document.getElementById("button");
button.addEventListener("click",colect);

//Adicionando a imagem na página
let img = document.createElement("img");
img.id = "meme-image"
img.nodeValue = image;