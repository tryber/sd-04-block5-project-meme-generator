let insertMeme = document.getElementById("meme-insert");
let imageMeme = document.getElementById("meme-image");
let inputText = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");


insertMeme.addEventListener('input', function() {
    imageMeme.src = URL.createObjectURL(this.files[0]);
});

inputText.addEventListener('input', function(){
    textMeme.innerHTML = inputText.value;
});
