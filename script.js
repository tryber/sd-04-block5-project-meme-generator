window.onload = function () {

    let textInput = this.document.getElementById("text-input");
    let textMeme = this.document.getElementById("text-meme");
    let memeInput = this.document.getElementById("meme-insert");
    let memeImage = this.document.getElementById("meme-image");

    textInput.addEventListener("keyup", function () {
        textMeme.innerHTML = textInput.value;
    })

    memeInput.addEventListener("change", function() {
        memeImage.src = URL.createObjectURL(this.files[0]);
    })
}

