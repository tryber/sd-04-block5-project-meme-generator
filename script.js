window.onload = function () {
    let inputText = document.querySelector('.text-input');
    let textMeme = document.querySelector('.meme-text');
    let uploadImage = document.querySelector('.meme-insert');
    let memeImage = document.querySelector('.meme-image');

    const memeContainer = document.querySelector('.meme-image-container');
    const botao1 = document.querySelector('.button1');
    const botao2 = document.querySelector('.button2');
    const botao3 = document.querySelector('.button3');

    const meme_1 = document.querySelector('.meme-1');
    const meme_2 = document.querySelector('.meme-2');
    const meme_3 = document.querySelector('.meme-3');
    const meme_4 = document.querySelector('.meme-4');

    function insereTexto () {
        textMeme.innerHTML = inputText.value
    }
    inputText.addEventListener('input', insereTexto);

    function insereImagem (event) {
        memeImage.src = URL.createObjectURL(event.target.files[0]);
    }
    uploadImage.addEventListener('change', insereImagem);

    function borda1() {
        memeContainer.style.border = '3px dashed red';
    }
    botao1.addEventListener('click', borda1);

    function borda2() {
        memeContainer.style.border = '5px double blue';
    }
    botao2.addEventListener('click', borda2);

    function borda3() {
        memeContainer.style.border = '6px groove green';
    }
    botao3.addEventListener('click', borda3);

    function meme1() {
        memeImage.src = meme_1.src;
    }
    meme_1.addEventListener('click', meme1);

    function meme2() {
        memeImage.src = meme_2.src;
    }
    meme_2.addEventListener('click', meme2);

    function meme3() {
        memeImage.src = meme_3.src;
    }
    meme_3.addEventListener('click', meme3);

    function meme4() {
        memeImage.src = meme_4.src;
    }
    meme_4.addEventListener('click', meme4);
}
