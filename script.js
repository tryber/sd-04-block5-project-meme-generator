window.onload = function() {
    let image = document.querySelector("#meme-image");
    let textInput = document.querySelector("#text-input");
    let submit = document.querySelector("#meme-insert");
    let button1 = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let memes = document.querySelectorAll('.meme');

    textInput.addEventListener('keyup', function() {
        let paragraph = document.querySelector("#meme-text");
        paragraph.innerHTML = textInput.value;
    });
    
    submit.addEventListener('change', upImage);
    button1.addEventListener('click', borderCustomOne);
    button2.addEventListener('click', borderCustomTwo);
    button3.addEventListener('click', borderCustomThree);

    for (meme of memes) {
        meme.addEventListener('click', function(e){
            image.src = e.target.src;
            console.log(image.src);
        });
    }
}

function upImage() {
    let image = document.querySelector("#meme-image")
        let file = this.files[0];

        if(file) {
            let reader = new FileReader();
            image.style.display = "block";
            reader.addEventListener("load", function(){
                image.setAttribute("src", this.result);
            })
            reader.readAsDataURL(file);
        }else {
            image.style.display = null;
            image.setAttribute("src", "");
        }
}

function borderCustomOne(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "3px dashed rgb(255, 0, 0)";
}

function borderCustomTwo(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "5px double rgb(0, 0, 255)";
}

function borderCustomThree(){
    let border = document.querySelector("#meme-image-container");
    border.style.border = "6px groove rgb(0, 128, 0)";
}
