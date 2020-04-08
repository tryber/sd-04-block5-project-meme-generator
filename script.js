window.onload = function () {
  let memeContainer = document.querySelector("#meme-image-container");
  let uploadImg = document.getElementById("meme-insert");
  let imageMeme = document.getElementById("meme-image");
  let inpText = document.getElementById("text-input");
  let text = document.getElementById("meme-text");

  uploadImg.addEventListener("input", function () {
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
  });
  inpText.addEventListener("input", function () {
    text.innerHTML = inpText.value;
  });
  
};
