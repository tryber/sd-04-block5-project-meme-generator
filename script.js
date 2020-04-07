
 
  window.onload = function(){

   let imageOut = document.getElementById("meme-image"); 
   let usuarioImage = document.getElementById("meme-insert"); 
     
    
   function load_arquivo (){
    imageOut.src = URL.createObjectURL(usuarioImage.files[0]); 
   }
   usuarioImage.addEventListener("input", load_arquivo);
 
   

    var textoInserido = document.getElementById("text-input");
    let textofoto = document.getElementById("meme-text"); 

    function insereTextoNaFoto(){
      textofoto.innerHTML=textoInserido.value;
    }
   textoInserido.addEventListener("keyup",insereTextoNaFoto);


  }



