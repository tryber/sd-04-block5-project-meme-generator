window.onload = function () {
    let memeText = document.getElementById("meme-text")
    let textInput = document.getElementById("text-input")
    let imageInput = document.getElementById("meme-insert")
    let imageContainer = document.getElementById("meme-image-container")
    let buttom1 = document.getElementById("button1")
    let buttom2 = document.getElementById("button2")
    let buttom3 = document.getElementById("button3")

    imageInput.addEventListener("input", function(e){
        let memeImage = document.createElement("img")
        memeImage.src = URL.createObjectURL(e.target.files[0])
        memeImage.id = "meme-image"
        memeImage.className = "meme-image"
        imageContainer.append(memeImage)

    })

    textInput.addEventListener("keyup", function(){
        memeText.innerText = textInput.value
    })

    buttom1.addEventListener("click", function(){
        imageContainer.style.border = "dashed 3px red"
    })
    buttom2.addEventListener("click", function(){
        imageContainer.style.border = "double 5px blue"
    })
    buttom3.addEventListener("click", function(){
        imageContainer.style.border = "groove 6px green"
    })
}