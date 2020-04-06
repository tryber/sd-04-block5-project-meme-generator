let memeContainer;
window.onload = function(){
  memeContainer = document.getElementById("meme-image-container");
}
function addImageContainer (event){
  let img = document.createElement("img");
  img.src = URL.createObjectURL(event.target.files[0])
  memeContainer.appendChild(img);
}
let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
textInput.addEventListener("input", function(){
  memeText.innerHTML= textInput.nodeValue;
})


