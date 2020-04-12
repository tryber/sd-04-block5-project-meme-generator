function texto() {
  let text = document.querySelector('#text-input');
  let texDig = document.querySelector('#meme-text');

  text.addEventListener('keyup', function() {
    texDig.innerText = this.value.toUpperCase();
  })
}

let carregar = function(event) {
let image = document.querySelector('#meme-image');
image.src = URL.createObjectURL(event.target.files[0]);
}
