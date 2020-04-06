let textInput = document.querySelector("#text-input");
let textMeme = document.querySelector("#text-meme");

let memeImg = document.querySelector("#meme-image");
let memeInsert = document.querySelector("#meme-insert");

memeInsert.addEventListener("change", function () {
  memeImg.src = URL.createObjectURL(this.files[0]);
});

textInput.addEventListener("keyup", function () {
  let txt = textInput.value;
  textMeme.innerText = txt.toUpperCase();
});
