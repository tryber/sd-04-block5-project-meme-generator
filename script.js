let memeText = document.getElementById("meme-text")
let textInput = document.getElementById("text-input")
let memeImg = document.getElementById("meme-image")
let imageInput = document.getElementById("meme-insert")

imageInput.addEventListener("change", function(){
    memeImg.src = URL.createObjectURL(imageInput.files[0])
})
textInput.addEventListener("keyup", function(){
    memeText.innerText = textInput.value
})