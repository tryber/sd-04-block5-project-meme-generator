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
