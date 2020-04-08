let textInput = document.querySelector('#text-input');
let imageContainer = document.querySelector('#meme-image-container');
let memeText = document.querySelector('#meme-text');
let memeInsert = document.querySelector('#meme-insert');

textInput.addEventListener('keyup', () => {
  memeText.innerHTML = textInput.value;
});

memeInsert.addEventListener('change', () => {
  let img = document.createElement('img');
  img.id = 'meme-image';
  img.alt = 'meme image';
  imageContainer.appendChild(img);
  img.src = URL.createObjectURL(event.target.files[0]);
});
