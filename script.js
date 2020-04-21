window.onload = function () {
  let memeInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let memeContainer = document.getElementById("meme-image-container");
  let textInput = document.getElementById("text-input");
  let textImage = document.getElementById("meme-text");
  let button = document.querySelectorAll("button");
  let form = document.querySelector("form");
  let memeButton = document.querySelectorAll(".meme-button");
  let memeStyle = memeContainer.style;
  function loadImage() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  }
  function loadText() {
    textImage.innerHTML = textInput.value;
  }
  textInput.addEventListener("input", loadText);
  memeInsert.addEventListener("input", loadImage);
  button[0].addEventListener("click", () => {
    (memeStyle.borderStyle = "dashed "), (memeStyle.borderWidth = "3px"), (memeStyle.borderColor = "red");
  });
  button[1].addEventListener("click", () => {
    (memeStyle.borderStyle = "double"), (memeStyle.borderWidth = "5px"), (memeStyle.borderColor = "blue");
  });
  button[2].addEventListener("click", () => {
    (memeStyle.border = "groove"), (memeStyle.borderWidth = "6px"), (memeStyle.borderColor = "green");
  });
  for (let i = 0; i < memeButton.length; i++) {
    memeButton[i].addEventListener("click", () => {
      memeImage.src = memeButton[i].src;
    });
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
