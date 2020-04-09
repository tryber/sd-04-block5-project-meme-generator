let inputText = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");
let imagem = document.getElementById("meme-image");
let memeContainer = document.getElementById("meme-image-container");
let button1 = document.getElementById("button1");
let imgWid = 300;
let imgHei = 200;


inputText.addEventListener("keyup", PutText);
button1.addEventListener("click", function()
{
    TrocarBorda("1");
});
button2.addEventListener("click", function()
{
    TrocarBorda("2");
});
button3.addEventListener("click", function()
{
    TrocarBorda("3");
});

inputImage.addEventListener("change", function ()
{
    let file = this.files[0];
    if(file)
    {   
        let leitura = new FileReader();
        leitura.addEventListener("load", function()
        {     
            imagem.setAttribute("src", this.result);
        });
        leitura.readAsDataURL(file);
        imagem.onload = function()
        {
            DimencionaBorda();
        };
    }
});

function PutText()
{
    textMeme.innerHTML = inputText.value;
    textMeme.style.wordWrap;
}

function DimencionaBorda ()
{
    imgWid = imagem.width;
    imgHei = imagem.height;
    memeContainer.style.width = imgWid + "px";
    memeContainer.style.height = imgHei + "px";
}

function TrocarBorda(estado)
{
    if(estado == 1)
    {
        memeContainer.style.border = "3px dashed red";
    }
    if(estado == 2)
    {
        memeContainer.style.border = "5px double blue";
    }
    if(estado == 3)
    {
        memeContainer.style.border = "6px groove green";
    }
}