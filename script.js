function writeOnImg() {
  let text = document.querySelector('#text-input').value;
  let imageContainer = document.querySelector('#meme-text');

  imageContainer.innerHTML = text;
  }

let memeInsert = document.querySelector("#meme-insert");
  memeInsert.addEventListener("input", function() {
  img = document.querySelector("img");
  img.id = "meme-image";
  img.src = URL.createObjectURL(this.files[0]);
})
