// 1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima
//  da imagem escolhida. As seguintes verificações serão feitas:
// A caixa onde o texto é inserido deve ter um id denominado 'text-input'.
// O elemento da imagem do meme deve ter um elemento pai com um id denominado 'meme-image-container'.
//  Esse elemento é o container dentro do qual a imagem deverá aparecer.
// O elemento do texto deve estar totalmente contido dentro do container.
// Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde
//  a imagem aparecerá.

var textInput = document.querySelector("#text-input");
var textDisplay = document.querySelector("#meme-text");
// var container = document.querySelector("#meme-image-container");
var imageDisplay = document.querySelector("#image-insert");

document.getElementById('meme-insert').addEventListener('change', handle);

function insertText() {
  textDisplay.innerHTML = textInput.value
}



// 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
// O elemento da imagem deve possuir um id chamado 'meme-image'.
// O elemento onde é feito o upload da imagem deve ser identificado com o id 'meme-insert'
// A imagem deve estar totalmente contida dentro do elemento identificado com 'meme-image-container'
// O texto de quem usa deve ser inserido sobre a imagem escolhida.

function handle(evt) {
  var files =  evt.target.files
  console.log(files);



  // if(files.length == 0) {
	// 	alert('Error : No file selected');
	// 	return;
  // }
  
  var reader = new FileReader();

  reader.onload = function(evt){
    imageDisplay.innerHTML = ['<img id="meme-image" src="', evt.target.result,
    '" title="', escape(files[0].name), '"/>'].join('');
  }
  reader.readAsDataURL(files[0]);  
}
