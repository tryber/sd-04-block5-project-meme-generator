const inpFile = document.getElementById("meme-insert");
const topText = document.querySelector("#text-input");
const bottomText = document.querySelector("#text-input2");
const container = document.getElementById("meme-image-container");
const image = container.querySelector(".image-container");
let ImageText = topText.value;

inpFile.addEventListener("change",function(){
    const file =this.files[0];
    console.log(file);

    if (file){
        const reader = new FileReader();

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
