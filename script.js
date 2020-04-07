let inpFile = document.getElementById("meme-insert");
let topText = document.querySelector("#text-input");
let container = document.getElementById("meme-image-container");
let image = container.querySelector(".meme-image");
let ImageText = topText.value;

inpFile.addEventListener("change",function(){
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

topText.addEventListener("change", function(){
    ImageText = document.querySelector("#text-input").value;
    document.querySelector('#meme-text').innerHTML = ImageText;
});