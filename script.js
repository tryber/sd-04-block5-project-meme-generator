window.onload = function() {
  const upperTextInput = document.querySelector('#text-input');
  upperTextInput.addEventListener('input', function(e) {
    const upperText = document.querySelector('#meme-text');
    upperText.innerHTML = e.target.value;
  });
};
