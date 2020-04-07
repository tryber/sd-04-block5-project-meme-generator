let memeImg = document.querySelector('#meme-image');
let memeInsert = document.querySelector('#meme-insert');
let textInput = document.querySelector('#text-input');
let textMeme = document.querySelector('#meme-text');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

let container = document.querySelector("#meme-image-container");

memeInsert.addEventListener("change", function(){
  memeImg.src = URL.createObjectURL(this.files[0]);
});

textInput.addEventListener('keyup', function(){
  textMeme.innerText = textInput.value;
});

button1.addEventListener('click', function(){
  container.style.border = "3px dashed red";
});

button2.addEventListener('click', function(){
  container.style.border = "5px double blue";
});

button3.addEventListener('click', function(){
  container.style.border = "6px groove green";
});

function openImage(image) {
  document.querySelector("#meme-image").src = image
};
