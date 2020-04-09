let inputText = document.querySelector("#text-input");
let selectedPic = document.querySelector("#meme-insert");
let txtContent = document.querySelector("#meme-text")
let memePic = document.querySelector("#meme-image");

selectedPic.addEventListener('change', function () {
  memePic.src = URL.createObjectURL(this.files[0]);
});

inputText.addEventListener('keyup', function () {
  txtContent.innerHTML = inputText.value;
});
