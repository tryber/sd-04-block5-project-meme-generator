let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');

textInput.addEventListener('input', () => { text.innerHTML = textInput.value })

let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');

imgInput.addEventListener('input', () => {
    console.log(imgInput.files[0].name);
    img.src = URL.createObjectURL(event.target.files[0]);
});

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
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

let btn4 = document.getElementById('meme-1');
let btn5 = document.getElementById('meme-2');
let btn6 = document.getElementById('meme-3');
let btn7 = document.getElementById('meme-4');

btn4.addEventListener('click', ()=>{
    img.src='https://imgflip.com/s/meme/Distracted-Boyfriend.jpg';
});
btn5.addEventListener('click', ()=>{
    img.src='https://imgflip.com/s/meme/Woman-Yelling-At-Cat.jpg';
});
btn6.addEventListener('click', ()=>{
    img.src='https://imgflip.com/s/meme/Running-Away-Balloon.jpg';
});
btn7.addEventListener('click', ()=>{
    img.src='https://imgflip.com/s/meme/Disaster-Girl.jpg';
});