function texto() {
  let text = document.querySelector('#text-input')
  let texDig = document.querySelector('#meme-text').innerText = text.value.toUpperCase()
}

let carregar = function(event) {
let image = document.querySelector('#meme-image');
image.src = URL.createObjectURL(event.target.files[0]);
}
