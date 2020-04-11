let textInput = document.getElementById("text-input");
let memeImage = document.getElementById("meme-insert");
let memeContainer = document.getElementById("meme-image-container");

function readImage(input) {
  setIMG(URL.createObjectURL(input.files[0]));
}

function setIMG(image) {
  let img = document.getElementById('meme-image');
  img.style.height = "";
  img.style.width = "";
  img.src = image;
  img.onload = function () {
    if (img.clientWidth > 600){
      let heightPerc = 100 - (60000 / img.clientWidth);
      let height = img.clientHeight - ((img.clientHeight * heightPerc) / 100);

      memeContainer.style.height = height + "px";
      img.style.height = height + "px";

      memeContainer.style.width = "600px";
      img.style.width = "600px";
    } else {
      memeContainer.style.height = img.clientHeight + "px";
      memeContainer.style.width = img.clientWidth + "px";
    }
  }
}

function readTextImage(input) {
    document.getElementById('meme-text').innerText = input.value
}

memeImage.addEventListener('change', function () {
    readImage(this);
});

textInput.addEventListener("input", function () {
    readTextImage(this);
});
