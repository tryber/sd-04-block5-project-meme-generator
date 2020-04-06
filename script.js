window.onload = function (){
  //Coletando as variáveis de entrada:
  let img = document.getElementById('meme-image');
  let text = document.getElementById('text-input');
  text.addEventListener('change',function(){
    document.getElementById('text').innerHTML = text.value;
  })
  let image = document.getElementById('meme-insert');
  text.addEventListener("change",save())
  function save(){
    img.src = URL.createObjectURL(image.files[0]);
    img.onload = imageIsLoaded;
    img.height = 768;
    img.width = 1366;
  }
  console.log(text.value)
  

  
  //Adicionando a imagem na página

}
