const upperTextInput = document.querySelector('#text-input');
upperTextInput.addEventListener('input', (e) => {
  const upperText = document.querySelector('#meme-text');
  upperText.innerHTML = e.target.value;
});

const lowerTextImput = document.querySelector('#lower-text-imput');
lowerTextImput.addEventListener('input', (e) => {
  const lowerText = document.querySelector('#lower-text');
  lowerText.innerHTML = e.target.value;
});

const memeImageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
memeImageInput.addEventListener('input', (e) => {
  memeImage.src = window.URL.createObjectURL(e.target.files[0]);
});

const borderBtnOne = document.querySelector('#button1');
const borderBtnTwo = document.querySelector('#button2');
const borderBtnThree = document.querySelector('#button3');
const memeContainer = document.querySelector('#meme-image-container');
borderBtnOne.addEventListener('click', () => {
  memeContainer.classList.add('border1');
  memeContainer.classList.remove('border2');
  memeContainer.classList.remove('border3');
});
borderBtnTwo.addEventListener('click', () => {
  memeContainer.classList.remove('border1');
  memeContainer.classList.add('border2');
  memeContainer.classList.remove('border3');
});
borderBtnThree.addEventListener('click', () => {
  memeContainer.classList.remove('border1');
  memeContainer.classList.remove('border2');
  memeContainer.classList.add('border3');
});

const featuredImgs = document.querySelectorAll('.meme-thumb');
featuredImgs.forEach((img) => {
  img.addEventListener('click', () => {
    memeImage.src = img.src;
  });
});
