
    let memeText = document.getElementById("meme-text")
    let memeImage = document.getElementById("meme-image")
    let textInput = document.getElementById("text-input")
    let imageInput = document.getElementById("meme-insert")
    let imageContainer = document.getElementById("meme-image-container")
    let buttom1 = document.getElementById("button1")
    let buttom2 = document.getElementById("button2")
    let buttom3 = document.getElementById("button3")
    let image1 = document.getElementById("meme-1")
    let image2 = document.getElementById("meme-2")
    let image3 = document.getElementById("meme-3")
    let image4 = document.getElementById("meme-4")

    imageInput.addEventListener("input", function(e){
        memeImage.src = URL.createObjectURL(e.target.files[0])
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

function changeImage(image){
    memeImage.src = image;
}