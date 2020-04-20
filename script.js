
const text = document.getElementById("meme-text");
const inputText = document.getElementById("text-input");
const memeInsert = document.getElementById("meme-insert");
const container = document.getElementById("meme-image-container");
const image = document.getElementById("meme-image");
const borderSize = [3, 5, 6];
const borderStyle = ["dashed", "double", "groove"];
const borderColor = ["red", "blue", "green"];
const thumbDiv = this.document.querySelector('.thumbnailsContainer')

window.onload = function () {
  // input text dynamically over the image:
  inputText.addEventListener("input", function () {
    text.innerHTML = inputText.value
  })

  //calling upload function:
  memeInsert.addEventListener("input", uploudImage)
  function uploudImage(e) {
    image.src = URL.createObjectURL(e.target.files[0])
  }
  //calling change border function for each button:
  for (let i = 0; i < 3; i += 1) {
    document.getElementById(`button${i + 1}`).addEventListener("click", changeBorder);
    function changeBorder() {
      container.style.border = `${borderSize[i]}px ${borderStyle[i]} ${borderColor[i]}`;
    }
  }

  //calling thumbToContainer function for each thumb image:
  thumbDiv.addEventListener('click', thumbToContainer)
}

function thumbToContainer(e) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  if (e.target && e.target.nodeName == "IMG") {
    image.src = e.target.src;
    e.target.classList.add('selected');
  }
}
