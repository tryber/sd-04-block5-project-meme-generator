
let insertText = document.getElementById("text-input");

insertText.addEventListener('input', function () {
    let memeText = document.querySelector("#meme-text");
    memeText.innerHTML = insertText.value;
})

let image = document.querySelector("#meme-insert");
image.addEventListener("change", function () {
    let memeImage = document.querySelector("#meme-image");
    memeImage.src = URL.createObjectURL(this.files[0]);
})

let container = document.querySelector("#meme-image-container");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

button1.addEventListener("click", function (){
    container.style.border = "3px dashed rgb(255, 0 , 0)"
})

button2.addEventListener("click", function (){
    container.style.border = "5px double rgb(0, 0, 255)"
})

button3.addEventListener("click", function (){
    container.style.border = "6px groove rgb(0, 128, 0)"
})