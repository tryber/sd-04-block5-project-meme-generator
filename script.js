
 
  window.onload = function(){
   let imageOut = document.getElementById("meme-image"); //id na tag img
   let usuarioImage = document.getElementById("meme-insert"); // pega a imagem q o usuario inseriu
      console.log(usuarioImage);
    
   function load_arquivo (){
    imageOut.src = URL.createObjectURL(usuarioImage.files[0]); // a img que sai na tela recebe a img que o imagemusuario
  }
   usuarioImage.addEventListener("input", load_arquivo);
   // evento input qnd o valor de um elemento input é alterado
   

  var textoInserido = document.getElementById("text-input"); // pega o texto que o usuario digitou
  let textofoto = document.getElementById("meme-text"); 

  function insereTextoNaFoto(){
    textofoto.innerHTML=textoInserido.value;
  }
  textoInserido.addEventListener("keyup",insereTextoNaFoto);
  // evento keyup qndo?

  }



