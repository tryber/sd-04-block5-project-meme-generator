window.onload = function() {
    let memeInsert = this.document.querySelector("#meme-insert");
    let textInput = this.document.querySelector("#text-input");
    let memeImageContainer = this.document.querySelector("#meme-image-container");
    let memeImage = this.document.querySelector("#meme-image");
    let memeText = this.document.querySelector("#meme-text");

    function insertText() {
        memeText.innerHTML = textInput.value;
    }

    function insertImage() {
        memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    }

    textInput.addEventListener("input", insertText);

    memeInsert.addEventListener("input", insertImage);

}
