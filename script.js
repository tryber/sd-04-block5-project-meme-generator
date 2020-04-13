const textoDe = document.querySelector('#text-input');
const textoPara = document.querySelector('#meme-text');

textoDe.addEventListener('keyup', function () {
textoPara.innerText = this.value
})

