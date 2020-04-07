window.onload = function () {
  let text = document.getElementById("meme-text");

  let inputText = document.getElementById("text-input");
  // input text dynamically over the image
  inputText.addEventListener("input", function () {
    text.innerHTML = inputText.value
  })

  const memeInsert = this.document.getElementById("meme-insert");
  const container = this.document.getElementById("meme-image-container");
  const image = this.document.getElementById("meme-image");

  memeInsert.addEventListener("change", uploudImage)
  function uploudImage() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      image.style.display = "block";
      reader.addEventListener("load", function () {
        //atribuindo o valor de src do FileReader através do this.result
        image.setAttribute("src", this.result)
      })
      reader.readAsDataURL(file);
    }
  }
  let borderSize = [3, 5, 6];
  let borderStyle = ["dashed", "double", "groove"];
  let borderColor = ["red", "blue", "green"];

  for (let i = 0; i < borderSize.length; i += 1) {

    document.getElementById(`button${i + 1}`).addEventListener("click", changeBorder);

    function changeBorder() {
      container.style.border = `${borderSize[i]}px ${borderStyle[i]} ${borderColor[i]}`;
    }
  }

  let sources = ["/img/meme1.jpeg$", "/img/meme2.jpeg$", "/img/meme3.jpeg$", "/img/meme4.jpeg$"];

  for (let i = 0; i <= 3; i += 1) {

    document.getElementById(`meme-${i+1}`).addEventListener("click", thumbToContainer);

    function thumbToContainer() {
      image.src = sources[i];
    }
  }

}

