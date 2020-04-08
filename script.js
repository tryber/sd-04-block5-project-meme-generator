let inputText = document.getElementById("text-input");
let selectedPic = document.getElementById("meme-insert");
let txtContent = document.getElementById("meme-text")
let memePic = document.getElementById("meme-image");

selectedPic.addEventListener('change', function () {
  memePic.src = URL.createObjectURL(this.files[0]);
});

inputText.addEventListener('input', function () {
  txtContent.innerHTML = inputText.value.toUpperCase();
})
