function writeOnImg() {
  let text = document.querySelector('#text-input').value;
  let imageContainer = document.querySelector('#meme-text');
  
  imageContainer.innerHTML = text;
  
  }

// let img;

function loadImg(event) {
  // if (!img) {
    img = document.createElement("img");
    // img.id = "meme-image";
  // }
  img.src = URL.createObjectURL(event.target.files[0]);
  document.querySelector("#meme-image-container").appendChild(img);
}