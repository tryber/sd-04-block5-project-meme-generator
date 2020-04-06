window.onload = function() {
  let container = document.getElementById("meme-image-container");
  let text = document.createElement("p");
  container.appendChild(text);
  let inputText = document.getElementById("text-input");
  inputText.addEventListener("input", function(){
    text.innerHTML = inputText.value;
  })

}

