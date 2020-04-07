window.onload = function () {
    let inputText = document.querySelector('.text-input');
    let textMeme = document.querySelector('.meme-text');
    let uploadImage = document.querySelector('.meme-insert');
    let memeImage = document.querySelector('.meme-image');

    function insereTexto () {
        textMeme.innerHTML = inputText.value
    }
    
    inputText.addEventListener('input', insereTexto);

    function insereImagem (event) {
        memeImage.src = URL.createObjectURL(event.target.files[0]); 
    }

    uploadImage.addEventListener('change', insereImagem);
}
