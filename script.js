let button = document.querySelector('#upload-image');
let memeImg = document.querySelector('#meme-image');
let memeInsert = document.querySelector('#meme-insert');
let textInput = document.querySelector('#text-input');
let textMeme = document.querySelector('#text-meme');


memeInsert.addEventListener("change", function(){
  memeImg.src = URL.createObjectURL(this.files[0]);
})

textInput.addEventListener('keyup', function(){
  textMeme.innerText = textInput.value
})






