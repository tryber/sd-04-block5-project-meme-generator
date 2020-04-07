window.onload = function() {
    let memeInsert = document.querySelector("#meme-insert");
    let textInput = document.querySelector("#text-input");
    let memeImageContainer = document.querySelector("#meme-image-container");
    let memeImage = document.querySelector("#meme-image");
    let memeText = document.querySelector("#meme-text");

    function insertText() {
        memeText.innerHTML = textInput.value;
    }

    function insertImage() {
        memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    }

    textInput.addEventListener("input", insertText);

    memeInsert.addEventListener("input", insertImage);

}
