
let insertText = document.getElementById("text-input");

insertText.addEventListener('input', function () {
    let memeText = document.querySelector("#meme-text");
    memeText.innerHTML = insertText.value;
})

let image = document.querySelector("#meme-insert");
image.addEventListener("change", function () {
    let memeImage = document.querySelector("#meme-image");
    memeImage.src = URL.createObjectURL(this.files[0]);
})

