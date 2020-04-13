window.onload = function () {
  let imageInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let textButton = document.getElementById("text-button");
  let textInput = document.getElementById("text-input");
  let textImage = document.getElementById("meme-text");
  let buttonTop = document.getElementById("position-top");
  let buttonBottom = document.getElementById("position-bottom");
  let moreSizeButton = document.getElementById("more-button");
  let lessSizeButton = document.getElementById("less-button");
  let memeContaine = this.document.getElementById("meme-image-container");
  textImage.style.marginTop = 0;
  textImage.style.marginBottom = 0;
  textImage.style.fontSize = 30 + 'px';
  function loadImage() {
    let url = URL.createObjectURL(imageInsert.files[0]);
    memeImage.setAttribute('src', url)
  }
  function loadText() {
    textImage.innerHTML = textInput.value;
  }
  function moreTextSize() {
    textImage.style.fontSize = parseInt(textImage.style.fontSize) + (2) + 'px'
  }
  function lessTextSize() {
    textImage.style.fontSize = parseInt(textImage.style.fontSize) + (-2) + 'px'
  }
  textInput.addEventListener("input", loadText);
  imageInsert.addEventListener("input", loadImage);
  moreSizeButton.addEventListener('click', moreTextSize);
  lessSizeButton.addEventListener('click', lessTextSize)

};
