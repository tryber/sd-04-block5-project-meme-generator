window.onload = function(){
    let memeT = document.getElementById("meme-text")
    let textoI = document.getElementById("text-input")
    textoI.addEventListener("input", function() {
        memeT.innerHTML = textoI.value
    })
    let imagenI = document.getElementById("meme-insert")
    let imagenM = document.getElementById("meme-image")
    imagenI.addEventListener("input", function () {
    imagenM.src = URL.createObjectURL(this.files[0]);
})        
    function openImage(image) {
    document.getElementById("meme-image").src = image
    }
    }