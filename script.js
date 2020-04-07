window.onload = function(){
    const caixaTexto = document.querySelector('#text-input');
    const textToDisplayContainer = document.querySelector('#meme-text');
    caixaTexto.addEventListener('keyup', trocaTexto);
      function trocaTexto () {
        textToDisplayContainer.innerText = caixaTexto.value;
      }

      //Add image
    const caixaImagem = document.querySelector('#meme-image-container');
    const memeinsertvalue = document.querySelector('#meme-insert');
    const buttonevent = document.querySelector('#buttonLoadImage');

    //buttonevent.addEventListener('click', addImageToContainer);
    memeinsertvalue.addEventListener('change',addImageToContainer);
    let img;
    let imgpath;
    function addImageToContainer(event){
      if (!img){
      img = document.createElement("img");
      img.id = "meme-image"
      img.className = "classMemeImage"
        }
      imgpath = memeinsertvalue.files[0].name;
      console.log(imgpath);
      img.src = imgpath;
      caixaImagem.appendChild(img);
    }
    // buttons to change the border
    buttons = document.querySelectorAll("button")
}
