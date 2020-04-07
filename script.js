window.onload = function() {
  const upperTextInput = document.querySelector('#text-input');
  upperTextInput.addEventListener('input', function(e) {
    const upperText = document.querySelector('#meme-text');
    upperText.innerHTML = e.target.value;
  });

  const memeImageInput = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');

  memeImageInput.addEventListener( 'input', function(e) {
    memeImage.src = window.URL.createObjectURL(e.target.files[0]);
  });
};
