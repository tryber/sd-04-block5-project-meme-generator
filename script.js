window.onload = function () {
  let memeInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let textInput = document.getElementById("text-input");
  let textImage = document.getElementById("meme-text");

  function loadImage() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  }

  function loadText() {
    textImage.innerHTML = textInput.value;
  }

  textInput.addEventListener("input", loadText);

  memeInsert.addEventListener("input", loadImage);
};
