const upperTextInput = document.querySelector('#text-input');
const lowerTextImput = document.querySelector('#lower-text-imput');
const memeImageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const borderBtnOne = document.querySelector('#button1');
const borderBtnTwo = document.querySelector('#button2');
const borderBtnThree = document.querySelector('#button3');
const memeContainer = document.querySelector('#meme-image-container');
const featuredImgs = document.querySelectorAll('.meme-thumb');

upperTextInput.addEventListener('input', (e) => {
  const upperText = document.querySelector('#meme-text');
  upperText.innerHTML = e.target.value;
});

lowerTextImput.addEventListener('input', (e) => {
  const lowerText = document.querySelector('#lower-text');
  lowerText.innerHTML = e.target.value;
});

memeImageInput.addEventListener('input', (e) => {
  memeImage.src = window.URL.createObjectURL(e.target.files[0]);
});

borderBtnOne.addEventListener('click', () => {
  changeBorder(memeContainer, 1);
});
borderBtnTwo.addEventListener('click', () => {
  changeBorder(memeContainer, 2);
});
borderBtnThree.addEventListener('click', () => {
  changeBorder(memeContainer, 3);
});

featuredImgs.forEach((img) => {
  img.addEventListener('click', () => {
    memeImage.src = img.src;
  });
});

function changeBorder(
  element = null,
  borderStyle = null,
) {
  element.classList.remove('border1');
  element.classList.remove('border2');
  element.classList.remove('border3');

  switch (borderStyle) {
    case 1:
      element.classList.add('border1');
      break;
    case 2:
      element.classList.add('border2');
      break;
    case 3:
      element.classList.add('border3');
      break;
    default:
      break;
  }
}
