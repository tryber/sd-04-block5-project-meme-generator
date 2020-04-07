let memeText = document.querySelector("#text-input");
let memeImage = document.getElementById("meme-insert");
let container = document.getElementById("meme-image-container");
let image = container.querySelector(".meme-image");
let ImageText = memeText.value;

memeText.addEventListener("change", function(){
    ImageText = document.querySelector("#text-input").value;
    document.querySelector('#meme-text').innerHTML = ImageText;
});

memeImage.addEventListener("change",function(){
    let file = this.files[0];

    if (file){
        let reader = new FileReader();

        image.style.display = "block";

        reader.addEventListener("load",function(){
            image.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);
    }
});
