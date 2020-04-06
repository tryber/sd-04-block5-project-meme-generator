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
  // Bonus 4
  let btnOne = document.querySelector('#button1');

  btnOne.addEventListener('click', function(){
    container.style.border = "3px dashed red";
  });

  let btnTwo = document.querySelector('#button2');

  btnTwo.addEventListener('click', function(){
    container.style.border = "5px double blue";
  });

  let btnThree = document.querySelector('#button3');

  btnThree.addEventListener('click', function(){
    container.style.border = "6px groove green";
  });

};
