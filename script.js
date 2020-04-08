let selectedPic = document.getElementById("meme-insert");
let inputText = document.getElementById("text-input");
let memePic = document.getElementById("meme-image");
let txtContent = document.getElementById("meme-content")

selectedPic.addEventListener('change', function () {
  memePic.src = URL.createObjectURL(this.files[0]);
});

inputText.addEventListener('change', function () {
  txtContent.innerHTML = inputText.value.toUpperCase();
})
