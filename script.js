window.onload = function () {
  let imageInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let imageButton = document.getElementById("image-button");
  let textButton = document.getElementById("text-button");
  let textinput = document.getElementById("text-input");
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
    sessionStorage.setItem("image", URL.createObjectURL(imageInsert.files[0]));
    memeImage.src = sessionStorage.getItem("image");
    imageInsert.addEventListener("input", loadImage);
  }
  function loadText() {
    sessionStorage.setItem("text", textinput.value);
    let text = sessionStorage.getItem("text");
    textImage.innerHTML = text;
  }
  function addTopPosition() {
    if(textImage.style.marginTop )
      textImage.style.marginTop = parseInt(textImage.style.marginTop) + (-20) + 'px';  
  }
  function addBottomPosition() {
    textImage.style.marginTop = parseInt(textImage.style.marginTop) + (20) + 'px';     
  }
  function moreTextSize() {
    textImage.style.fontSize = parseInt(textImage.style.fontSize) + (2) + 'px'
  }
  function lessTextSize() {
    textImage.style.fontSize = parseInt(textImage.style.fontSize) + (-2) + 'px'
  }
  textButton.addEventListener("click", loadText);
  imageButton.addEventListener("click", loadImage);
  buttonTop.addEventListener("click", addTopPosition);
  buttonBottom.addEventListener("click", addBottomPosition);
  moreSizeButton.addEventListener('click', moreTextSize);
  lessSizeButton.addEventListener('click', lessTextSize)

};
