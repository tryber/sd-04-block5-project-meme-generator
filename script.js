const textoDe = document.querySelector('#text-input');
const textoPara = document.querySelector('#meme-text');

textoDe.addEventListener('keyup', function () {
textoPara.innerText = this.value
})

let carregar = function(event) {
  let image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

let bUm = document.querySelector('#button1');
let bDois = document.querySelector('#button2');
let bTres = document.querySelector('#button3');
let container = document.querySelector('#meme-image-container')

bUm.addEventListener('click', function () {
  container.classList.add('button1');
})

bDois.addEventListener('click', function () {
  container.classList.add('button2');
})

bTres.addEventListener('click', function () {
  container.classList.add('button3');
})
