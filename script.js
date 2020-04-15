window.onload = function () {
    let textInput = this.document.getElementById("text-input");
    let textMeme = this.document.getElementById("meme-text");
    let memeInput = this.document.getElementById("meme-insert");
    let memeImage = this.document.getElementById("meme-image");
    //
    textInput.addEventListener("input", function () { textMeme.innerHTML = textInput.value; })

    memeInput.addEventListener("input", function () { memeImage.src = URL.createObjectURL(this.files[0]); })

}

function openImage(image) {
    document.getElementById("meme-image").src = image;
}
