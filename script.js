function submitText() {
  let text = document.getElementsByTagName("p")[0];
  let textInput = document.querySelector("#text-input").value;
  text.innerHTML = textInput;
}

document.querySelector("#text-input").addEventListener('keyup', submitText);
