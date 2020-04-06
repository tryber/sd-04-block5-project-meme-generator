let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');

textInput.addEventListener('input', () => { text.innerHTML = textInput.value })

let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');

imgInput.addEventListener('input', () => {
    console.log(imgInput.files[0].name);
    img.src = URL.createObjectURL(event.target.files[0]);
});

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let div = document.getElementById('meme-image-container');

btn1.addEventListener('click', ()=>{
    div.style.border='3px dashed red';
});
btn2.addEventListener('click', ()=>{
    div.style.border='5px double blue';
});
btn3.addEventListener('click', ()=>{
    div.style.border='6px groove green';
});

let btn4 = document.getElementById('m1img');
let btn5 = document.getElementById('m2img');
let btn6 = document.getElementById('m3img');
let btn7 = document.getElementById('m4img');

btn4.addEventListener('click', ()=>{
    img.src='./imgs/meme1.jpg';
});
btn5.addEventListener('click', ()=>{
    img.src='./imgs/meme2.jpg';
});
btn6.addEventListener('click', ()=>{
    img.src='./imgs/meme3.jpg';
});
btn7.addEventListener('click', ()=>{
    img.src='./imgs/meme4.jpg';
});
