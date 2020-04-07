let inputText = document.getElementById("text-input");
let inputImage = document.querySelector("#meme-insert");
let text = document.getElementById("meme-text");
let img = document.getElementById("meme-image");

function loadFile() {
    img.src = URL.createObjectURL(inputImage.files[0]);
}
inputImage.addEventListener("change", loadFile);

function userText() {
  document.getElementById("meme-text").innerHTML = inputText.value
}
inputText.addEventListener("input", userText);

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let containerImage = document.getElementById("meme-image-container");
function changeButton1() {
  containerImage.style.border = "3px dashed red";
}
button1.addEventListener("click", changeButton1);

function changeButton2() {
  containerImage.style.border = "5px double blue";
}
button2.addEventListener("click", changeButton2);

function changeButton3() {
  containerImage.style.border = "6px groove green";
}
button3.addEventListener("click", changeButton3);
