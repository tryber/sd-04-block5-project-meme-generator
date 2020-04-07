window.onload = function () {
  let inpTxt = document.getElementById("text-input");
  let memeTxt = document.getElementById("meme-text");
  let but1 = document.getElementById("button1");
  let but2 = document.getElementById("button2");
  let but3 = document.getElementById("button3");
  let container = document.getElementById("meme-image-container");
  let meme1 = document.getElementById("meme-1");
  let meme2 = document.getElementById("meme-2");
  let meme3 = document.getElementById("meme-3");
  let meme4 = document.getElementById("meme-4");
  let memeImg = document.getElementById("meme-image");
  inpTxt.addEventListener("input", function () {memeTxt.innerText = inpTxt.value;});
  but1.addEventListener("click", function () {container.style.border = "3px dashed red";});
  but2.addEventListener("click", function () {container.style.border = "5px double blue";});
  but3.addEventListener("click", function () {container.style.border = "6px groove green";});
  meme1.addEventListener("click", function () {memeImg.src = "imgs/meme1.jpeg";});
  meme2.addEventListener("click", function () {memeImg.src = "imgs/meme2.jpeg";});
  meme3.addEventListener("click", function () {memeImg.src = "imgs/meme3.jpeg";});
  meme4.addEventListener("click", function () {memeImg.src = "imgs/meme4.jpeg";});
};

