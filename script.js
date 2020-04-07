window.onload = function (){
  //Coletando as variáveis de entrada:
  let img = document.getElementById('meme-image');
  let text = document.getElementById('text-input');
  text.addEventListener('keyup',function(){
    let caps = text.value;
    document.getElementById('meme-text').innerHTML = caps;
  })
  let image = document.getElementById('meme-insert');
  image.addEventListener("change",save)
  function save(){
    img.src = URL.createObjectURL(image.files[0]);
    img.style.width = "750px";
    img.style.heigth = "750px";
    let container = document.getElementById('meme-image-container')
    container.style.border = '1px solid rgb(0, 0, 0)'
  }
}
