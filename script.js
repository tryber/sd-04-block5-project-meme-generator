function writeOnImg() {
  let text = document.querySelector('#text-input').value;
  let imageContainer = document.querySelector('#meme-image-container');
  
  imageContainer.innerHTML = text;
  
  }