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

let button1 = document.getElementById("button1");
let butoon2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let memeContainer = document.getElementById("meme-image-container");
button1.addEventListener("click", function(){
  memeContainer.style.border = "3px dashed red";
});
button2.addEventListener("click", function(){
  memeContainer.style.border = "5px double blue";
});
button3.addEventListener("click", function(){
  memeContainer.style.border = "6px groove green";
});
