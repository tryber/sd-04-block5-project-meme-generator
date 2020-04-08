// Query selectors
let textInput = document.querySelector('.text-input');
let imageContainer = document.querySelector('.meme-image-container');
let memeText = document.querySelector('.meme-text');
let memeInsert = document.querySelector('.meme-insert');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

// Text input
textInput.addEventListener('keyup', () => {
  memeText.innerHTML = textInput.value;
});

// Image upload
memeInsert.addEventListener('change', () => {
  let img = document.createElement('img');
  img.id = 'meme-image';
  img.alt = 'meme image';
  imageContainer.appendChild(img);
  img.src = URL.createObjectURL(event.target.files[0]);
});

// Border buttons
button1.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed red';
});

button2.addEventListener('click', () => {
  imageContainer.style.border = '5px double blue';
});

button3.addEventListener('click', () => {
  imageContainer.style.border = '6px groove green';
});
