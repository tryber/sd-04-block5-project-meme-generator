var textInput = document.querySelector("#text-input");
var textDisplay = document.querySelector("#meme-text");
var imageDisplay = document.querySelector("#meme-image");

document.getElementById('meme-insert').addEventListener("change", handle);

function insertText() {
  textDisplay.innerHTML = textInput.value
}

function handle(evt) {
  var files =  evt.target.files

  if(files.length == 0) {
  alert('Error : No file selected');
  return;
  }

  var reader = new FileReader();
  reader.onload = function(){
    imageDisplay.src = URL.createObjectURL(files[0]);
    // imageDisplay.innerHTML = ['<img id="meme-image" class="memeImage" src="', evt.target.result,
    // '" title="', escape(files[0].name), '"/>'].join('');
  }
  reader.readAsDataURL(files[0]);
}
