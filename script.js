let inputText = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");
let imagem = document.getElementById("meme-image");
let memeContainer = document.getElementById("meme-image-container");
let button1 = document.getElementById("button1");
let preSave1 = document.getElementById("meme-1");
let preSave2 = document.getElementById("meme-2");
let preSave3 = document.getElementById("meme-3");
let preSave4 = document.getElementById("meme-4");
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
    ReadMeme(event);
});
preSave1.addEventListener("click", function(event)
{
    MemeRead(event);
});
preSave2.addEventListener("click", function(event)
{
    MemeRead(event);
});
preSave3.addEventListener("click", function(event)
{
    MemeRead(event);
});
preSave4.addEventListener("click", function(event)
{
    MemeRead(event);
});

function PutText()
{
    textMeme.innerHTML = inputText.value;
    textMeme.style.wordWrap;
}

function ReadMeme(event)
{
    let file = event.target.files[0];
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
}

function MemeRead(event)
{
    imagem.src = event.target.src;
    imagem.onload = function()
    {
        DimencionaBorda();
    };
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
