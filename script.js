window.onload = function(){

  let textInput = document.getElementById('text-input');
  let text = document.getElementById('meme-text');
  
  textInput.addEventListener('input', function(){
      text.innerHTML = textInput.value }
  )
  
  let imgInput = document.getElementById('meme-insert');
  let img = document.getElementById('meme-image');
  
  imgInput.addEventListener('input', function(){
      console.log(imgInput.files[0].name);
      img.src = URL.createObjectURL(event.target.files[0]);
  });

  let frameImg = document.getElementById("meme-image-container");

  let btn1 = document.getElementById("button1");
  btn1.addEventListener("click", function(){
    frameImg.style.border = "3px dashed red";
  });
  let btn2 = document.getElementById("button2");
  btn2.addEventListener("click", function(){
    frameImg.style.border = "5px double blue";
  });
  let btn2 = document.getElementById("button3");
  btn2.addEventListener("click", function(){
    frameImg.style.border = "6px groove green";
  });
}
