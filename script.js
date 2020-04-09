let insertMeme = document.querySelector("#meme-insert");
let imageMeme = document.querySelector("#meme-image");
let inputText = document.querySelector("#text-input");
let textMeme = document.querySelector("#meme-text");

insertMeme.addEventListener('change', function () {
  imageMeme.src = URL.createObjectURL(this.files[0]);
});

inputText.addEventListener('input', function () {
  textMeme.innerHTML = inputText.value;
});
