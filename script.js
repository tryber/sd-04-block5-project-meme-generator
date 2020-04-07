window.onload = function(){
    const caixaTexto = document.querySelector('#text-input');
    const textToDisplayContainer = document.querySelector('#meme-text');
    caixaTexto.addEventListener('keyup', trocaTexto);
      function trocaTexto () {
        textToDisplayContainer.innerText = caixaTexto.value;
      } 

      //Add image
    // const caixaImagem = document.querySelector('#meme-insert')
    // caixaTexto.addEventListener('keyup', addImageToContainer);
    // let img;
    //   function addImageToContainer(event){
    //   if (!img){
    //   img = document.createElement("img");
    //     }
    //   img.src = "image.jpg";
    //   //img.src = URL.createObjectURL(event.target.files[0]);
    //   caixaImagem.appendChild(img);
      
    // } 
   

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

 