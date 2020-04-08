let inputText = document.getElementById("text-input");
let textMeme = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");
let imagem = document.getElementById("meme-image");

inputText.addEventListener("keyup", PutText);


function PutText()
{
    textMeme.innerHTML = inputText.value;
}

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
    }
});