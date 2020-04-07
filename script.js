window.onload = function() {
  
//Select Elements
const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

inputImage.addEventListener('input', function() {
  memeImage.src = URL.createObjectURL(this.files[0]);
})

inputText.addEventListener('input', function() {
  memeText.innerHTML = inputText.value;
})

}