function writeOnImg() {
  let text = document.querySelector('#text-input').value;
  let imageContainer = document.querySelector('#meme-text');

  imageContainer.innerHTML = text;
  }

let memeInsert = document.querySelector("#meme-insert");
  memeInsert.addEventListener("input", function() {
  img = document.querySelector("img");
  img.id = "meme-image";
  img.src = URL.createObjectURL(this.files[0]);
})
// Variables
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let container = document.getElementById("meme-image-container");
// Button 1 - border type
button1.addEventListener("click", function(){
  container.style.border = "3px dashed red";
})
// Button 2 - border type
button2.addEventListener("click", function(){
  container.style.border = "5px double blue";
})
// Button 3 - border type
button3.addEventListener("click", function(){
  container.style.border = "6px groove green";
})