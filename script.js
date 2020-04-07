let textInput = document.querySelector("#text-input");
textInput.addEventListener('keyup', function(){
    let paragraph = document.querySelector("#meme-text");
    paragraph.innerHTML = textInput.value;
})

let submit = document.querySelector("#meme-insert")
submit.addEventListener('change', function(){
    let image = document.querySelector("#meme-image")
    let file = this.files[0];

    if(file) {
        let reader = new FileReader();
        image.style.display = "block";
        reader.addEventListener("load", function(){
            image.setAttribute("src", this.result)
        })
        reader.readAsDataURL(file);
    }else {
        image.style.display = null;
        image.setAttribute("src", "")
    }
})