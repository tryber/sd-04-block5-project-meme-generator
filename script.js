window.onload = function() {
  let container = document.getElementById("meme-image-container");
  let text = document.createElement("p");
  container.appendChild(text);
  let inputText = document.getElementById("text-input");
  // input text dynamically over the image
  inputText.addEventListener("input", function(){
    text.innerHTML = inputText.value;
  })

}

