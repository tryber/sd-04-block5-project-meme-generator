const inputText = document.getElementById("text-input");
inputText.addEventListener("keyup", (event) => {
  const memeText = document.querySelector("#meme-text");
  memeText.textContent = event.target.value;
});
const imgInput = document.querySelector("#meme-insert");
const imgContainer = document.querySelector("#meme-image-container");
imgInput.addEventListener("change", (event) => {
  if (this.document.querySelector("#meme-image") != null) {
    imgContainer.removeChild(document.querySelector("#meme-image"));
  }
  const newImg = document.createElement("img");
  newImg.id = "meme-image";
  newImg.className = "meme-image";
  newImg.src = URL.createObjectURL(event.target.files[0]);
  imgContainer.appendChild(newImg);
});
const btnAll = document.querySelectorAll("button");
btnAll[0].addEventListener("click", () => {
  imgContainer.classList.add("btn1");
});
btnAll[1].addEventListener("click", () => {
  imgContainer.classList.add("btn2");
});
btnAll[2].addEventListener("click", () => {
  imgContainer.classList.add("btn3");
});
