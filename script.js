//Coletando as variáveis de entrada:
let img = document.getElementById('meme-image');
let text = document.getElementById('text-input');
let container = document.getElementById('meme-image-container')
text.addEventListener('keyup',function(){
  let caps = text.value;
  document.getElementById('meme-text').innerHTML = caps;
})
let image = document.getElementById('meme-insert');
image.addEventListener("change",save)
function save(){
  img.src = URL.createObjectURL(image.files[0]);
}
const button1 = document.getElementById('button1');
button1.addEventListener("click", function () {
  container.className = "meme-image-container";
  container.style.border = '';
  container.classList.add('button1');
})

const button2 = document.getElementById('button2');
button2.addEventListener("click", function () {
  container.className = "meme-image-container";
  container.style.border = '';
  container.classList.add('button2');
})

const button3 = document.getElementById('button3');
button3.addEventListener("click", function () {
  container.className = "meme-image-container";
  container.style.border = '';
  container.classList.add('button3');
})
