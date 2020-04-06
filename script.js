window.onload = function() {
    
    let textInput = this.document.getElementById("text-input");
    let textMeme = this.document.getElementById("text-meme");
    this.console.log(textInput.value)

    textInput.addEventListener("keyup", function() {
        textMeme.innerHTML = textInput.value;
    })
}