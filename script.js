function submitText() {
  let text = document.getElementById("meme-text");
  let textInput = document.getElementById("text-input").value;
  text.innerHTML = textInput;
}

document.getElementById("text-input").addEventListener('input', submitText);
