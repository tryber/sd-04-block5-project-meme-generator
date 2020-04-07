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
    
    onchange
    //memeinsertvalue.addEventListener('input.onchange', addImageToContainer);
    buttonevent.addEventListener('click', addImageToContainer);
    let img;
    let imgpath;
      function addImageToContainer(event){
      if (!img){
      img = document.createElement("img");
      img.id = "meme-image";
        }
      imgpath = memeinsertvalue.files[0].name;
      console.log(imgpath);
      img.src = imgpath;
      //img.src = URL.createObjectURL(event.target.files[0]);
      caixaImagem.appendChild(img);
      
    } 
   

    // image temp
    
    // const caixaImagem = document.querySelector('#meme-insert');
    // caixaImagem.addEventListener('click', trocaImagem);
    //

          // Part add image
      // caixaTexto.addEventListener('keyup', addImageToContainer);
      // let img;
      // function addImageToContainer(event){
      // if (!img){
      // img = document.createElement("img");
      // img.style.width = "80%";
      // }
      // img.src = "image.jpg";
      // //img.src = URL.createObjectURL(event.target.files[0]);
      // memeImageContainer.appendChild(img);
    //}

}

 