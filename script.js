window.onload = function() {
    let memeImage = document.getElementById("meme-image");
    let memeInsert = document.getElementById("meme-insert");

    function uploadImage(){
        memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    }
    memeInsert.addEventListener("input", uploadImage);

    let textInput = document.getElementById("text-input");
    let memeText = document.getElementById("meme-text");

    function textImage(){
        memeText.innerHTML = textInput.value;
    }
    textInput.addEventListener("input", textImage);
}
