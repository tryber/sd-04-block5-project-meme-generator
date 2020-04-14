function submitText() {
  let text = document.getElementById("meme-text");
  let textInput = document.getElementById("text-input").value;
  text.innerHTML = textInput;
}

document.getElementById("text-input").addEventListener('input', submitText);

function addImage(event) {
  let img = document.getElementById("meme-image");
  img.src = URL.createObjectURL(event.target.files[0]);
}
