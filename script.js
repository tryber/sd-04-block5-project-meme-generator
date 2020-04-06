window.onload = function(){

  let textInput = document.querySelector('#text-input');
  let imgInput = document.querySelector('#meme-insert');
  let btn =  document.querySelector('#btnGerar');
  let container = document.querySelector('#meme-image-container');
  let memeText = document.querySelector('#meme-text');
  
  
  textInput.addEventListener('keyup', function(){
    memeText.innerHTML = textInput.value;
  
  });
  

};