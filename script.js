function submitText() {
  let text = document.getElementById('meme-text');
  let textInput = document.getElementById('text-input').value;
  text.innerHTML = textInput;
}

document.getElementById('text-input').addEventListener('input', submitText);

let memeImage = document.getElementById('meme-image');
let memeInput = document.getElementById('meme-insert');
memeInput.addEventListener('input', function(){
  memeImage.src = URL.createObjectURL(this.files[0]);
});

let button1 = document.getElementById("button1");
button1.addEventListener('click', function() {
  let imageContainer = document.getElementById("meme-image-container");
  imageContainer.className = 'meme-image-container selectedOne';
});

let button2 = document.getElementById("button2");
button2.addEventListener('click', function() {
  let imageContainer = document.getElementById("meme-image-container");
  imageContainer.className = 'meme-image-container selectedTwo';
});

let button3 = document.getElementById("button3");
button3.addEventListener('click', function() {
  let imageContainer = document.getElementById("meme-image-container");
  imageContainer.className = 'meme-image-container selectedThree';
});
