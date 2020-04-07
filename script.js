window.onload = function () {
  let inpTxt = document.getElementById("text-input");
  let memeTxt = document.getElementById("meme-text");
  let but1 = document.getElementById("button1");
  let but2 = document.getElementById("button2");
  let but3 = document.getElementById("button3");
  let container = document.getElementById("meme-image-container");

  //console.log(inpTxt.value)

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

  inpTxt.addEventListener("input", pasteTxt);
  but1.addEventListener("click", borderStyle1);
  but2.addEventListener("click", borderStyle2);
  but3.addEventListener("click", borderStyle3);
};
