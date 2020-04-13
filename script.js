window.onload = function () {
  let imageInsert = this.document.getElementById("meme-insert");
  let memeImage = this.document.getElementById("meme-image");
  let textInput = this.document.getElementById("text-input");
  let textImage = this.document.getElementById("meme-text");
  let memeContaine = this.document.getElementById("meme-image-container");

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
