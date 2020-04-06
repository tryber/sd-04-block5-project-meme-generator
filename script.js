window.onload = function () {

    let textInput = this.document.getElementById("text-input");
    let textMeme = this.document.getElementById("text-meme");
    let memeInput = this.document.getElementById("meme-insert");
    let memeImage = this.document.getElementById("meme-image");
    let meme = this.document.getElementById("meme-image-container");
    let button1 = this.document.getElementById("button1");
    let button2 = this.document.getElementById("button2");
    let button3 = this.document.getElementById("button3");

    textInput.addEventListener("input", function () {
        textMeme.innerHTML = textInput.value;
    })

    memeInput.addEventListener("input", function () {
        memeImage.src = URL.createObjectURL(this.files[0]);
    })

    button1.addEventListener("click", function () {
        meme.style.border = "3px dashed red"
    })

    button2.addEventListener("click", function () {
        meme.style.border = "5px double blue"
    })

    button3.addEventListener("click", function () {
        meme.style.border = "6px groove green"
    })

}

function reset() {
    document.getElementById("meme-image-container").style.border = "1px solid black"
}

function openImage(image) {
    document.getElementById("meme-image").src = image
}
