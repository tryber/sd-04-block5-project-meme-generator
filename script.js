window.onload = function() {
const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const resetBorder = document.getElementById('reset-btn');
const memes = document.getElementsByClassName('meme');

inputImage.addEventListener('input', function(){
  memeImage.src = URL.createObjectURL(this.files[0]);});

inputText.addEventListener('input', function() {
  memeText.innerHTML = inputText.value;})

btn1.addEventListener('click', function() {
  memeContainer.style.border = "3px dashed red";})

btn2.addEventListener('click', function() {
  memeContainer.style.border = "5px double blue";})

btn3.addEventListener('click', function() {
  memeContainer.style.border = "6px groove green"})

resetBorder.addEventListener('click', function() {
  memeContainer.style.border = "1px solid black"})

for (meme of memes) {
  meme.addEventListener('click', function(event) {
    memeImage.src = event.target.src;})}
}
