window.onload = function () {
    let inputText = document.querySelector("#text-input");
    let textMeme = document.querySelector("meme-text");
    let uploadImage = document.querySelector("#meme-insert");
    let memeImage = document.querySelector("#meme-image");

    inputText.input = function () {
        textMeme.innerHTML = inputText.value
    };

}