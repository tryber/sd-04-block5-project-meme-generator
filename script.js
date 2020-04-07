window.onload = function() {
  // Listen and generate the meme upper text
  const upperTextInput = document.querySelector('#text-input');
  upperTextInput.addEventListener('input', function(e) {
    const upperText = document.querySelector('#upper-text');
    upperText.innerHTML = e.target.value;
  });
  // Listen and generate the meme lower text
  const lowerTextInput = document.querySelector('#lower-text-input');
  lowerTextInput.addEventListener('input', function(e) {
    const lowerText = document.querySelector('#lower-text');
    lowerText.innerHTML = e.target.value;
  });
};
