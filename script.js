window.onload = function () {
  this.console.log("OK");
  const inputText = document.getElementById("text-input");

  inputText.addEventListener("keyup", (event) => {
    const memeText = document.querySelector("#meme-text");
    memeText.textContent = event.target.value.toUpperCase();
  });

  const imgInput = document.querySelector("#meme-insert");
  const imgContainer = document.querySelector("#meme-image-container");

  imgInput.addEventListener ("change", (event) => {
    const newImg = document.createElement("img");
    newImg.id = "meme-image";
    newImg.className = "meme-image";
    newImg.src = URL.createObjectURL(event.target.files[0]);
    imgContainer.appendChild(newImg);
  });
};
