let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
textInput.addEventListener("keyup", function(){
  memeText.innerHTML = textInput.value;
});
let memeInsert = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
memeInsert.addEventListener("input", function(){
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});
