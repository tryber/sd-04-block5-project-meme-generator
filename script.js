let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
textInput.addEventListener("keyup", function(){
  memeText.innerHTML = textInput.value;
});