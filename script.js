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

  function pasteTxt() {
    memeTxt.innerText = inpTxt.value;
  };

  function borderStyle1() {
    container.style.border = "3px dashed red";
  };

  function borderStyle2() {
    container.style.border = "5px double blue";
  };

  function borderStyle3() {
    container.style.border = "6px groove green";
  };

  function imgContainer1() {
    memeImg.src = "imgs/meme1.jpeg";
  };

  function imgContainer2() {
    memeImg.src = "imgs/meme2.jpeg";
  };

  function imgContainer3() {
    memeImg.src = "imgs/meme3.jpeg";
  };

  function imgContainer4() {
    memeImg.src = "imgs/meme4.jpeg";
  };

  inpTxt.addEventListener("input", pasteTxt);
  but1.addEventListener("click", borderStyle1);
  but2.addEventListener("click", borderStyle2);
  but3.addEventListener("click", borderStyle3);
  meme1.addEventListener("click", imgContainer1);
  meme2.addEventListener("click", imgContainer2);
  meme3.addEventListener("click", imgContainer3);
  meme4.addEventListener("click", imgContainer4);
};
