window.onload = function() {
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener('keyup', function() {
        let paragraph = document.querySelector("#meme-text");
        paragraph.innerHTML = textInput.value;
    })

    let submit = document.querySelector("#meme-insert")
    submit.addEventListener('change', upImage)

    let button1 = document.querySelector("#button1");
    button1.addEventListener('click', borderCustomOne)

    let button2 = document.querySelector("#button2");
    button2.addEventListener('click', borderCustomTwo)

    let button3 = document.querySelector("#button3");
    button3.addEventListener('click', borderCustomThree)

}

function upImage() {
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
}

function borderCustomOne(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "3px dashed rgb(255, 0, 0)"
}

function borderCustomTwo(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "5px double rgb(0, 0, 255)"
}

function borderCustomThree(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "6px groove rgb(0, 128, 0)"
}

