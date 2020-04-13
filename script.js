const textoDe = document.querySelector('#text-input');
const textoPara = document.querySelector('#meme-text');

textoDe.addEventListener('keyup', function () {
textoPara.innerText = this.value
})

let carregar = function(event) {
  let image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
