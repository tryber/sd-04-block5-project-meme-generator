let inputText = document.getElementById("input-text");
let textMeme = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");

inputText.addEventListener("keyup", PutText);
inputImage.addEventListener("keyup", AplicImage(event));

function PutText()
{
    textMeme.innerHTML = inputText.value;
}

function AplicImage(event)
{
    let targ = event.target.files[0];
    let leitura = new FileReader();

    leitura.onload() = function(event)
    {
        inputImage.src = event.target.result;
    }
}