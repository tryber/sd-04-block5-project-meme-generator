window.onload = function () {
  let memeContainer = document.querySelector("#meme-image-container");
  let uploadImg = document.getElementById("meme-insert");
  let imageMeme = document.getElementById("meme-image");

  uploadImg.addEventListener("input", function () {
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
  });
};
