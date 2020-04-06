window.onload = function() {
  const upperTextInput = document.querySelector('#text-input');
  upperTextInput.addEventListener('input', function(e) {
    const upperText = document.querySelector('#upper-text');
    document.querySelector('p').innerHTML = e.target.value;
  });
};
