window.onload = function () {
  let text = document.getElementById("meme-text");

  let inputText = document.getElementById("text-input");
  // input text dynamically over the image
  inputText.addEventListener("input", () => { text.innerHTML = inputText.value })

  const memeInsert = this.document.getElementById("meme-insert");
  const container = this.document.getElementById("meme-image-container");
  const image = this.document.getElementById("meme-image");

  memeInsert.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      image.style.display = "block";
      reader.addEventListener("load", function() {
        //atribuindo o valor de src do FileReader através do this.result
        image.setAttribute("src", this.result)
      })
      reader.readAsDataURL(file);
    }

        
  })
}

