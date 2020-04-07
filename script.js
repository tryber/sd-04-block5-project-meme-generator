let textInput = document.getElementById('text-input');
textInput.addEventListener('change', function(){
  document.getElementById('meme-text').innerHTML = textInput.value;
  textInput.value = "";
});

let input = document.getElementById('meme-insert');
input.addEventListener('change', function(){
  let inputImg = input.files[0];
  let reader = new FileReader();
  let imageMeme = document.getElementById('meme-image');

  if(inputImg){
    reader.readAsDataURL(inputImg);
  }
  reader.onloadend = function() {
    imageMeme.src = reader.result;
  }
});
