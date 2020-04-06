window.onload = function() {
  let container = document.getElementById("meme-image-container");
  let text = document.createElement("p");
  text.id = "text-input"
  container.appendChild(text);
  let inputText = document.getElementById("input");
  inputText.addEventListener("input", function(){
    text.innerHTML = inputText.value;
  })

}

