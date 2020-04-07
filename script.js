window.onload = function () {
    let inputText = document.querySelector('.text-input');
    let textMeme = document.querySelector('.meme-text');
    let uploadImage = document.querySelector('.image-upload');
    let memeImage = document.querySelector('.meme-image');

    function insereTexto () {
        textMeme.innerHTML = inputText.value
    }
    
    
    inputText.addEventListener('input', insereTexto);

}