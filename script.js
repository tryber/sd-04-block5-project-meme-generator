let memeText = document.getElementById("meme-text")
let textInput = document.getElementById("text-input")
let imageInput = document.getElementById("meme-insert")
let imageContainer = document.getElementById("meme-image-container")

imageInput.addEventListener("change", function(e){
    let memeImage = document.createElement("img")
    memeImage.src = URL.createObjectURL(e.target.files[0])
    memeImage.id = "meme-image"
    imageContainer.append(memeImage)

})
textInput.addEventListener("keyup", function(){
    memeText.innerText = textInput.value
})