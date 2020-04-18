
var textInput = document.querySelector("#text-input");
var textDisplay = document.querySelector("#meme-text");
var imageDisplay = document.querySelector("#meme-image");

var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");

var image1 = document.getElementById("meme-1");
var image2 = document.getElementById("meme-2");
var image3 = document.getElementById("meme-3");
var image4 = document.getElementById("meme-4");

var container = document.querySelector("#meme-image-container");

document.getElementById('meme-insert').addEventListener("input", handle);
textInput.addEventListener("input", insertText);
button1.addEventListener("click", addClassB1);
button2.addEventListener("click", addClassB2);
button3.addEventListener("click", addClassB3);
image1.addEventListener("click", img1Insert);
image2.addEventListener("click", img2Insert);
image3.addEventListener("click", img3Insert);
image4.addEventListener("click", img4Insert);

function img1Insert() {
  imageDisplay.src = "./imgs/meme1.jpeg"
}
function img2Insert() {
  imageDisplay.src = "./imgs/meme2.jpeg"
}
function img3Insert() {
  imageDisplay.src = "./imgs/meme3.jpeg"
}
function img4Insert() {
  imageDisplay.src = "./imgs/meme4.jpeg"
}

function insertText() {
  textDisplay.innerHTML = textInput.value
}

function handle(evt) {
  var files =  evt.target.files

  if(files.length == 0) {
  alert('Error : No file selected');
  return;
  }

  var reader = new FileReader();
  reader.onload = function(){
    imageDisplay.src = URL.createObjectURL(files[0]);
    // imageDisplay.innerHTML = ['<img id="meme-image" class="memeImage" src="', evt.target.result,
    // '" title="', escape(files[0].name), '"/>'].join('');
  }
  reader.readAsDataURL(files[0]);
}

function addClassB1(){
  if(container.classList.contains("button2")){
    container.classList.remove("button2");
  }
  if(container.classList.contains("button3")){
    container.classList.remove("button3");
  }
  container.classList.add("button1");
}
function addClassB2(){
  if(container.classList.contains("button1")){
    container.classList.remove("button1");
  }
  if(container.classList.contains("button3")){
    container.classList.remove("button3");
  }
  container.classList.add("button2");
}
function addClassB3(){
  if(container.classList.contains("button2")){
    container.classList.remove("button2");
  }
  if(container.classList.contains("button1")){
    container.classList.remove("button1");
  }
  container.classList.add("button3");
}
