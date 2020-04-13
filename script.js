window.onload = function () {
    let textInput = document.getElementById("text-input")
    let textMeme = document.getElementById("meme-text")
    let memeInput = document.getElementById("meme-insert")
    let memeImage = document.getElementById("meme-image")
    let container = document.getElementById("meme-image-container")


    textInput.addEventListener("keyup", function () {
        textMeme.innerHTML = textInput.value
    })

    memeInput.addEventListener("input", function(){
        memeImage.src = URL.createObjectURL(this.files[0]);
    })
    
}
