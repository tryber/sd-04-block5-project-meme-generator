window.onload = function () {
  let inpTxt = document.getElementById("text-input");
  let memeTxt = document.getElementById("meme-text");

  //console.log(inpTxt.value)

  function pasteTxt() {
    memeTxt.innerText = inpTxt.value;
  };

  inpTxt.addEventListener("input", pasteTxt);
};
