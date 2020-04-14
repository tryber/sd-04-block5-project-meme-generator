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
let container = document.querySelector('#meme-image-container');

bUm.addEventListener('click', function () {
  container.classList.add('button1');
});

bDois.addEventListener('click', function () {
  container.classList.add('button2');
});

bTres.addEventListener('click', function () {
  container.classList.add('button3');
});

let botImgUm = document.querySelector('#meme-1');
botImgUm.addEventListener('click', function () {
  let image = document.querySelector('#meme-image').src='meme1.jpeg';
});

let botImgDois = document.querySelector('#meme-2');
botImgDois.addEventListener('click', function () {
  let image = document.querySelector('#meme-image').src='meme2.jpeg';
});

let botImgTres = document.querySelector('#meme-3');
botImgTres.addEventListener('click', function () {
  let image = document.querySelector('#meme-image').src='meme3.jpeg';
});

let botImgQuatro = document.querySelector('#meme-4');
botImgQuatro.addEventListener('click', function () {
  let image = document.querySelector('#meme-image').src='meme4.jpeg';
});
