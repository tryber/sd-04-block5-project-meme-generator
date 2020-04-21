window.onload = function () {
  let memeInsert = document.getElementById("meme-insert");
  let memeImage = document.getElementById("meme-image");
  let memeContainer = document.getElementById("meme-image-container");
  let textInput = document.getElementById("text-input");
  let textImage = document.getElementById("meme-text");
  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  let button3 = document.getElementById("button3");
  let form = document.querySelector("form");
  function loadImage() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  }

  function loadText() {
    textImage.innerHTML = textInput.value;
  }

  textInput.addEventListener("input", loadText);
  memeInsert.addEventListener("input", loadImage);
  button1.addEventListener("click", () => {
    (memeContainer.style.borderStyle = "dashed"),
      (memeContainer.style.borderWidth = "3px");
    memeContainer.style.borderColor = "red";
  });
  button2.addEventListener("click", () => {
    (memeContainer.style.borderStyle = "double"),
      (memeContainer.style.borderWidth = "5px");
    memeContainer.style.borderColor = "blue";
  });
  button3.addEventListener("click", () => {
    (memeContainer.style.borderStyle = "groove"),
      (memeContainer.style.borderWidth = "6px");
    memeContainer.style.borderColor = "green";
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
