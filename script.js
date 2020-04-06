let textInput = document.querySelector("#text-input");
textInput.addEventListener('keyup', function(){
    let paragraph = document.querySelector(".meme-text");
    paragraph.innerHTML = textInput.value;
})