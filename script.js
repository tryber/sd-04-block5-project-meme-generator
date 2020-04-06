window.onload = function(){

  let textInput = document.querySelector('#text-input');
  let imgInput = document.querySelector('#meme-insert');
  let container = document.querySelector('#meme-image-container');
  let memeText = document.querySelector('#meme-text');

  textInput.addEventListener('keyup', function(){
    memeText.innerHTML = textInput.value;
  });

  function addImage(event){
    let image = document.createElement('img');
    image.id = "meme-image";
    image.src = URL.createObjectURL(event.target.files[0]);
    container.appendChild(image);
  };
  imgInput.addEventListener('change', addImage);
}
