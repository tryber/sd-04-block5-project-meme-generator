window.onload = function () {
  let imageInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let textInput = document.getElementById("text-input");
  let textImage = document.getElementById("meme-text");
  let memeContainer = document.getElementById("meme-image-container");

  function loadImage() {
    let url = URL.createObjectURL(imageInsert.files[0]);
    memeImage.setAttribute("src", url);
  }
  function loadText() {
    textImage.innerHTML = textInput.value;
  }

  textInput.addEventListener("input", loadText);
  imageInsert.addEventListener("input", loadImage);
};
